import StatCalculator from './statCalculator';

it('works for positive ability modifiers', () => {
  const modifier = StatCalculator.calculateAbilityModifier(13);
  expect(modifier).toBe(1);
});
