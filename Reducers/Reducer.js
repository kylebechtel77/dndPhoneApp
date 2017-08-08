// todo get inital state from storage
// todo implement import/export
// todo learn functional programming. //per Ben. 

const initialState = {
  characters: [
    {
      id: 1,
      name: 'Cohen',
      race: 'Human',
      classes: [
        {
          name: 'Barbarian',
          level: 2,
        },
        {
          name: 'Cleric',
          level: 3,
        },
      ],
      hitPoints: {
        current: 28,
        max: 28,
      },
      armorClass: 16,
      speed: 30,
      abilities: {
        dex: { score: 13 },
        wis: { score: 8 },
      },
      proficiencyBonus: 3,
      skills: {
        per: { isProficient: true },
      },
      characterAbilities: {
        str: { name: 'Strength', score: 8, isProficient: true },
        dex: { name: 'Dexterity', score: 13, isProficient: false },
        con: { name: 'Constitution', score: 8, isProficient: true },
        int: { name: 'Intelligence', score: 16, isProficient: false },
        wis: { name: 'Wisdom', score: 8, isProficient: false },
        cha: { name: 'Charisma', score: 6, isProficient: false },
      },
    },
  ],
};

const levelUp = (curState, action) => ({
  ...curState,
  characters: curState.characters.map((c) => {
    if (action.id === c.id) {
      return {
        ...c,
        classes: c.classes.map(cl => ({
          ...cl,
          level: cl.level + 1,
        })),
      };
    }
    return c;
  }),
});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_LEVEL':
      return levelUp(state, action);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        ((todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo),
      );
    default:
      return state;
  }
};

export default reducer;
