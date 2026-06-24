'use strict';

const db = require('../bin/db');
const repo = require('./RunRepository');
const ActiveContext = require('./ActiveContext');
const TagValidator = require('./TagValidator');
const QAValidator = require('./QAValidator');
const FrictionLogger = require('./FrictionLogger');

class HandoffSerializer {
  static getRequiredSections(agentNumber) {
    const sections = {
      1: ['Context Brief'],
      2: ['Identity Hook', 'Approved Phrase', 'Style Choices', 'Master Composition Prompt'],
      3: ['Executive Verdict', 'IP Clearance', 'Final Optimized Prompt'],
      4: ['SEO & Metadata Package']
    };
    return sections[agentNumber] || [];
  }

  static async saveHandoff(agentNumber, payload) {
    const run = await db.requireActiveRun();
    
    // Verify that the agent has logged friction BEFORE handoff
    const hasFriction = await FrictionLogger.hasLogged(run.id, agentNumber);
    if (!hasFriction) {
      throw new Error(`Agent ${agentNumber} handoff failed: Missing friction log entry. Run 'node bin/pipeline.js friction log ...' before handing off.`);
    }

    const requiredSections = this.getRequiredSections(agentNumber);
    const payloadKeys = Object.keys(payload);
    const normalizedKeys = payloadKeys.map(k => k.toLowerCase().replace(/_/g, ' '));
    
    const missing = requiredSections.filter(req => 
      !normalizedKeys.some(k => k.includes(req.toLowerCase()))
    );

    if (missing.length > 0) {
      throw new Error(`Agent ${agentNumber} handoff failed: Missing required payload keys for sections: ${missing.join(', ')}`);
    }

    for (const [key, value] of Object.entries(payload)) {
      const sectionName = key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      
      let content = '';
      if (typeof value === 'string') {
        content = value;
      } else if (Array.isArray(value)) {
        content = value.map(item => `- ${item}`).join('\n');
      } else {
        content = JSON.stringify(value, null, 2);
      }
      
      await ActiveContext.appendSection(run.id, agentNumber, sectionName, content);
      
      // Auto-log key decisions if they exist in the payload
      if (key === 'approved_phrase' || key === 'phrase') {
        await repo.logDecision(run.id, 'phrase', content.replace(/["'\*]/g, '').trim(), agentNumber);
      }
      if (key === 'executive_verdict') {
        await repo.logDecision(run.id, 'verdict', content, agentNumber);
      }
    }

    // Trigger deep verification automatically
    return await this.verifyStep(agentNumber);
  }

  static async verifyStep(agentNumber) {
    const run = await db.requireActiveRun();
    const sections = await ActiveContext.getSections();
    const sectionNames = sections.map(s => s.name.toLowerCase());

    const required = this.getRequiredSections(agentNumber);
    const missing = required.filter(name => !sectionNames.some(s => s.includes(name.toLowerCase())));

    if (missing.length > 0) {
      throw new Error(`Agent ${agentNumber} handoff failed: Missing required Markdown sections: ${missing.join(', ')}`);
    }

    // Verify friction log
    const hasFriction = await FrictionLogger.hasLogged(run.id, agentNumber);
    if (!hasFriction) {
      throw new Error(`Agent ${agentNumber} handoff failed: Missing friction log entry. Run 'node bin/pipeline.js friction log --worked "<what worked>" --differently "<what went differently>" --tools "<what tools had issues>"' before verifying.`);
    }

    // Step-specific deep validation rules
    if (agentNumber === 1) {
      // Agent 1 validations
      const briefSection = sections.find(s => s.name.toLowerCase().includes('context brief'));
      const content = briefSection.content;

      // Extract Seed-Specific Search Language keyword lines
      const countMatch = content.match(/Seed-Specific Search Language/gi);
      if (!countMatch) {
        throw new Error("Agent 1 handoff failed: Missing 'Seed-Specific Search Language' keyword list in Context Brief");
      }

      // Check if keyword tags were logged in SQLite
      const recentTags = await repo.getTags(run.id);
      const tagCount = Object.values(recentTags).reduce((sum, list) => sum + list.length, 0);
      if (tagCount === 0) {
        console.warn("⚠️ Warning: No keywords or tags logged in SQLite for this run.");
      }
    }

    if (agentNumber === 2) {
      // Agent 2 validations
      const phraseSection = sections.find(s => s.name.toLowerCase().includes('approved phrase'));
      if (!phraseSection || !phraseSection.content.trim()) {
        throw new Error("Agent 2 handoff failed: Approved Phrase section is empty");
      }

      const phrase = phraseSection.content.replace(/["'-\*]/g, '').trim();
      const wordCount = phrase.split(/\s+/).length;
      if (wordCount > 8) {
        throw new Error(`Agent 2 handoff failed: Approved Phrase "${phrase}" exceeds word count limit of 8 words (got ${wordCount} words)`);
      }

      const promptSection = sections.find(s => s.name.toLowerCase().includes('master composition prompt'));
      if (!promptSection || !promptSection.content.trim()) {
        throw new Error("Agent 2 handoff failed: Master Composition Prompt section is empty");
      }
    }

    if (agentNumber === 3) {
      // Agent 3 validations: Verify that all required QA checks pass in the database
      const qaStatuses = await repo.getRequiredQACheckStatuses(run.id, QAValidator.getRequiredChecks());
      const verifyResult = QAValidator.verify(qaStatuses);
      if (!verifyResult.pass) {
        const failedNames = verifyResult.failures.map(f => f.name).join(', ');
        throw new Error(`Agent 3 handoff failed: Required QA checks did not pass: ${failedNames}`);
      }
    }

    if (agentNumber === 4) {
      // Agent 4 validations: Ensure SEO title, description, and tags exist in the output
      const seoSection = sections.find(s => s.name.toLowerCase().includes('seo & metadata package'));
      if (!seoSection || !seoSection.content.trim()) {
        throw new Error("Agent 4 handoff failed: SEO & Metadata Package section is empty");
      }

      // Scan content for Title, Tags, and Description fields
      const hasTitle = /title/i.test(seoSection.content);
      const hasTags = /tag/i.test(seoSection.content);
      const hasDesc = /description/i.test(seoSection.content);

      if (!hasTitle || !hasTags || !hasDesc) {
        throw new Error("Agent 4 handoff failed: SEO & Metadata Package must contain Title, Tags, and Description fields");
      }
    }

    return {
      success: true,
      agentNumber,
      runId: run.id,
      animal: run.animal
    };
  }
}

module.exports = HandoffSerializer;
