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
      currency: {
        platinum: 1,
        gold: 2,
        electrum: 3,
        silver: 4,
        copper: 5,
      },
      hitPoints: {
        current: 28,
        max: 28,
      },
      armorClass: 16,
      speed: 30,
      proficiencyBonus: 3,
      abilities: {
        str: { name: 'Strength', score: 8, isProficient: true },
        dex: { name: 'Dexterity', score: 13, isProficient: false },
        con: { name: 'Constitution', score: 8, isProficient: true },
        int: { name: 'Intelligence', score: 16, isProficient: false },
        wis: { name: 'Wisdom', score: 8, isProficient: false },
        cha: { name: 'Charisma', score: 6, isProficient: false },
      },
      skills: {
        acr: { text: 'Acrobatics', mod: -1, typ: '(DEX)' },
        ani: { text: 'Animal Handling', mod: -1, typ: '(WIS)' },
        arc: { text: 'Arcana', mod: -1, typ: '(INT)' },
        ath: { text: 'Athletics', mod: -1, typ: '(DEX)' },
        dec: { text: 'Deception', mod: -1, typ: '(CHA)' },
        his: { text: 'History', mod: -1, typ: '(INT)' },
        ins: { text: 'Insight', mod: -1, typ: '(WIS)' },
        int: { text: 'Intimidation', mod: -1, typ: '(CHA)' },
        inv: { text: 'Investigation', mod: -1, typ: '(INT)' },
        med: { text: 'Medicine', mod: -1, typ: '(WIS)' },
        nat: { text: 'Nature', mod: -1, typ: '(WIS)' },
        per: { text: 'Perception', mod: -1, typ: '(WIS)', isProficient: true },
        prf: { text: 'Performance', mod: -1, typ: '(WIS)' },
        prs: { text: 'Persuasion', mod: -1, typ: '(WIS)' },
        rel: { text: 'Religion', mod: -1, typ: '(WIS)' },
        sle: { text: 'Sleight of Hand', mod: -1, typ: '(WIS)' },
        ste: { text: 'Stealth', mod: -1, typ: '(WIS)' },
        sur: { text: 'Survivial', mod: -1, typ: '(WIS)' },
      },
      description: {
        characterDetails: {
          alignment: 'evil',
          languages: ['common'],
          faith: 'druish?',
          lifestyle: 'messy',
        },
        physical: {
          hair:'blond',
          age: 20,
          eyes: 'blue',
          skin: 'grey', 
          height: '22ft',
          weight: 200, 
          gender:'male',
          other: 'long beard'
        },
        personal: {
          traits: 'stubborn',
          ideals: 'I can have ideals?',
          bonds: ''
        },
      }
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
