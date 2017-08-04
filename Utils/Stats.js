export default {
  calculateAbilityModifier: abilityScore => Math.floor((abilityScore - 10) / 2),
  formatModifier: modifier => (modifier >= 0 ? `+${modifier}` : `${modifier}`),
};
