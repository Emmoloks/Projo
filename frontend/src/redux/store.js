import {configureStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import categoriesReducers from './reducers/categoriesReducer';
import productsReducers from './reducers/productsReducer';



const rootReducer = combineReducers({
  categories: categoriesReducers,
  products: productsReducers
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;