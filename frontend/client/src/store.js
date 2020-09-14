import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducer/productReducer';
import {cartReducer} from './reducer/cartReducers';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducer/userReducers';
import { myOrderListReducer, orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducer/orderReducers';

const cartItems=Cookie.getJSON("cartItems")|| [];
const userInfo=Cookie.getJSON("userInfo") || null;

const initialState={cart:{cartItems,shipping:{},payment:{}},userSignin:{userInfo}};

const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    userUpdate:userUpdateReducer,
    productSave:productSaveReducer,
    productDelete:productDeleteReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    myOrderList:myOrderListReducer

})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;