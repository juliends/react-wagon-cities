const citiesReducer = (state, action) => {
  if (state === undefined) {
      return [];
    }
    switch (action.type) {
      case 'SET_CITIES':
        console.log(action.payload);
        return action.payload;
      default:
        return state;
  }
};

export default citiesReducer;