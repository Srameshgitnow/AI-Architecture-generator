// Simple mock of a LangGraph-style SDK orchestration run.
function runMockOrchestration(businessRequirements) {
  const steps = [
    { step: 1, action: 'Extract intents and entities from requirements' },
    { step: 2, action: 'Map intents to components and data stores' },
    { step: 3, action: 'Propose deployment topology and infra snippets' },
    { step: 4, action: 'Rank risks and produce mitigation tasks' }
  ];

  const reasoning = `Processed title: ${businessRequirements.title || 'Arch'}; description length: ${(
    businessRequirements.description || ''
  ).length}`;

  return { steps, reasoning };
}

module.exports = { runMockOrchestration };
