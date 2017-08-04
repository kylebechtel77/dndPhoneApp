import Stats from './stats';

describe('calculating ability score modifiers', () => {
  const modifierMapping = [
    { score: 0, modifier: -5 },
    { score: 1, modifier: -5 },
    { score: 4, modifier: -3 },
    { score: 5, modifier: -3 },
    { score: 10, modifier: 0 },
    { score: 11, modifier: 0 },
    { score: 19, modifier: 4 },
    { score: 20, modifier: 5 },
    { score: 29, modifier: 9 },
    { score: 30, modifier: 10 },
  ];
  for (let i = 0; i < modifierMapping.length; i += 1) {
    it(`works for ${modifierMapping[i].score}`, () => {
      const modifier = Stats.calculateAbilityModifier(modifierMapping[i].score);
      expect(modifier).toBe(modifierMapping[i].modifier);
    });
  }
});
