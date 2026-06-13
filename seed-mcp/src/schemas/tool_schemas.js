const { z } = require('zod');
const { zodToJsonSchema } = require('zod-to-json-schema');

const schemas = {
  dbQueryDirection: z.object({ animal: z.string().min(1).max(100) }),
  dbSaveDirection: z.object({ 
    animal: z.string().min(1).max(100),
    direction: z.string().min(1).max(100),
    market_signal_score: z.number()
  }),
  dbLogRun: z.object({
    animal: z.string().min(1).max(100),
    direction: z.string().min(1).max(100),
    viability_score: z.number(),
    format: z.string().min(1).max(50)
  }),
  dbCheckIpBlacklist: z.object({ phrase: z.string().min(1).max(255) }),
  dbAddIpBlacklist: z.object({ 
    phrase: z.string().min(1).max(255),
    reason: z.string().min(1).max(255)
  }),
  etsyProbe: z.object({ keyword: z.string().min(2).max(100) }),
  amazonProbe: z.object({ keyword: z.string().min(2).max(100) }),
  serperShoppingProbe: z.object({ keyword: z.string().min(2).max(100) }),
  gptRefiner: z.object({ inputs: z.array(z.string()).max(50) }),
  conceptOverlap: z.object({ inputs: z.array(z.string()).max(100) }),
  styleCatalog: z.object({}),
  humorFrameworks: z.object({})
};

module.exports = {
  schemas,
  getJsonSchema: (schemaKey) => zodToJsonSchema(schemas[schemaKey])
};
