const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return [...state, ...action.payload];
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.payload.id);
    default:
      return state;
  }
};

export default productsReducer;
