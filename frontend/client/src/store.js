import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducer/productReducer';
import {cartReducer} from './reducer/cartReducers';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import { userSigninReducer, userRegisterReducer } from './reducer/userReducers';

const cartItems=Cookie.getJSON("cartItems")|| [];
const userInfo=Cookie.getJSON("userInfo") || null;

const initialState={cart:{cartItems},userSignin:{userInfo}};

const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    productSave:productSaveReducer,
    productDelete:productDeleteReducer
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;