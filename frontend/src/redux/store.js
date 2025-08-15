import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import { thunk } from 'redux-thunk';
import categoriesReducers from './categoriesReducer';
import productsReducers from './productReducer';

const rootReducer = combineReducers({
  categories: categoriesReducers,
  products: productsReducers
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;