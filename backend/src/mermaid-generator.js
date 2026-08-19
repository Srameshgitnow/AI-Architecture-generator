function generateMermaid(businessRequirements) {
  // Simple heuristic-based diagram generator placeholder.
  // Replace with LangGraph-driven planner for richer outputs.
  const title = (businessRequirements && businessRequirements.title) || 'Architecture';
  return `flowchart TD\n  subgraph ${title}\n    A[Client] --> B[API Gateway]\n    B --> C[App Services]\n    C --> D[(Database)]\n    C --> E[(Cache)]\n  end\n`;
}

module.exports = { generateMermaid };
