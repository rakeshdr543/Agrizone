import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';


import { listProducts } from '../actions/productActions';

 const HomeScreens=(props)=>{
 
   const productList=useSelector(state => state.productList)
   const {products,loading,error} =productList;
   const dispatch = useDispatch();


   useEffect(() => {
     dispatch(listProducts());
   
   }, [])
  

    return(
      loading ? (<div>Loading</div>):
    error ? <div>{error}</div>:
        <ul className="products">
              {
               products.map(product=>
                  <li key={product._id}>
                  <div className="product">
                  <Link to={'/products/'+product._id} >
                      <img className="product-image" src={product.image} alt="product"/>
                      <div className="product-name">{product.name}</div>
                      </Link>
                <div className="product-brands">{product.brand}</div>
                <div className="product-price">₹ {product.price}</div>
                      <div className="product-rating">{product.rating} Stars ( {product.numReviews} Reviews)</div>
                  </div>
              </li>

                
                )
              }
               
               
               
                
            </ul>

    )
 }

 export default HomeScreens;