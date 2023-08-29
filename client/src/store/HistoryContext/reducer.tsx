export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'PUSH': {
      return [...state, action.payload];
    }
    case 'POP': {
      return [...state.slice(0, state.length - 1)];
    }
  }
  return state;
};
