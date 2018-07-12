export const appReducer = (state = '', action) => {
  switch(action.type) {
    case 'APP_SELECTED':
      return action.value;
    default:
      return state;
  }
};