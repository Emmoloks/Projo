const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return [...state, ...action.payload];
    case 'REMOVE_CATEGORY':
      return state.filter(category => category.id !== action.payload.id);
    default:
      return state;
  }
};

export default categoriesReducer;
