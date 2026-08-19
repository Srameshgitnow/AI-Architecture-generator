const test = require('node:test');
const assert = require('node:assert/strict');
const { generateArchitectureFromRequirements } = require('../src/langgraph-placeholder');

test('LangGraph workflow generates architecture actions and recommendations', () => {
  const result = generateArchitectureFromRequirements({
    title: 'Fintech Platform',
    description: 'A customer portal with payments, identity, analytics, and alerts for a fintech app.'
  });

  assert.ok(Array.isArray(result.actions));
  assert.ok(result.actions.length > 0);
  assert.ok(typeof result.mermaid === 'string');
  assert.ok(result.mermaid.includes('flowchart'));
  assert.ok(Array.isArray(result.techRecommendations));
  assert.ok(result.techRecommendations.length > 0);
  assert.ok(result.cloudPlans && result.cloudPlans.aws && result.cloudPlans.azure);
});
