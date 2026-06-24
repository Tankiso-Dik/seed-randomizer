'use strict';

const REQUIRED = [
  'ip_safety', 'meme_fidelity',
  'cohesion_animal_expression', 'cohesion_expression_phrase',
  'cohesion_phrase_prop', 'cohesion_prop_posture', 'cohesion_register',
  'prop_count', 'format_fidelity', 'anatomy_risk'
];

const ALL = [...REQUIRED, 'phrase_market_validation', 'color_contrast', 'taste_score', 'shareability'];

class QAValidator {
  static getRequiredChecks() {
    return REQUIRED;
  }

  static getAllChecks() {
    return ALL;
  }

  static verify(statuses) {
    const failures = [];
    for (const name of REQUIRED) {
      const s = statuses[name] || 'missing';
      if (s !== 'pass') {
        failures.push({ name, status: s });
      }
    }
    return {
      pass: failures.length === 0,
      failures
    };
  }
}

module.exports = QAValidator;
