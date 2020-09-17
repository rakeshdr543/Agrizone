import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';


import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';

 const HomeScreens=(props)=>{
   const [searchKeyword,setSearchKeyword]=useState('');
  const category = props.match.params.id ? props.match.params.id:'';
   const productList=useSelector(state => state.productList)
   const {products,loading,error} =productList;
   const dispatch = useDispatch();


   useEffect(() => {
     dispatch(listProducts(category))
   
   }, [category])
   const submitHandler=(e)=>{
     e.preventDefault();
     dispatch(listProducts(category,searchKeyword));
   }
  

    return(
      <>
      {category && <h2>{category}</h2>}
      <ul className='filter'>
        <li>
          <form onSubmit={submitHandler}>
            <input name='searchKeyword'
            onChange={(e)=>setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>

      </ul>

     { loading ? (<div>Loading...</div>):
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
                      <div className="product-rating">
                        <Rating value={product.raing}
                        text={product.numReviews +' reviews'}
                        />


                        {/* {product.rating} Stars ( {product.numReviews} Reviews)*/}
                        </div> 
                  </div>
              </li>

                
                )
              }
               
               
               
                
            </ul>}
            </>

    )
 }

 export default HomeScreens;