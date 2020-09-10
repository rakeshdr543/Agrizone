import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer } from './reducer/productReducer';
import {cartReducer} from './reducer/cartReducers';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';

const cartItems=Cookie.getJSON("cartItems")|| [];
console.log(Cookie.getJSON(),"i am cookies")

const initialState={cart:{cartItems}};
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;