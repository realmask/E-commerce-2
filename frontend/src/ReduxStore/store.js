import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { favoriteReducer } from './reducers/favReducer';
import { productdetialReducer } from './reducers/productdeatailReducer';
import { productreducer } from './reducers/productreducer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  cartitems: {cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): [],}

}

const rootReducer = combineReducers({
  productList: productreducer ,
  productDetails : productdetialReducer, 
  cartitems: cartReducer ,
  favoriteproduct: favoriteReducer,
})
const store = createStore(rootReducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;




    