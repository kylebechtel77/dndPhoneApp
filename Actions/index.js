export const levelUp = id => ({
  type: 'ADD_LEVEL',
  id,
});

export const otherAction = someArgument => ({
  type: 'SOME_OTHER_ACTION',
  someArgument,
});
