const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { generateMermaid } = require('./mermaid-generator');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/generate', async (req, res) => {
  const { businessRequirements } = req.body;
  if (!businessRequirements) return res.status(400).json({ error: 'Missing businessRequirements' });

  // Use the LangGraph placeholder orchestration to produce structured outputs
  const { generateArchitectureFromRequirements } = require('./langgraph-placeholder');
  const result = generateArchitectureFromRequirements(businessRequirements);

  // Keep legacy simple mermaid as fallback
  const mermaid = result.mermaid || generateMermaid(businessRequirements);

  res.json({
    mermaid,
    actions: result.actions,
    components: result.components,
    techRecommendations: result.techRecommendations,
    cloudPlans: result.cloudPlans
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
