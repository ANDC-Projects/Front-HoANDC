export const adminStatus = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      return (state = !state);
    default:
      return state;
  }
};
