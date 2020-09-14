import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceorderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {

  const userSignin=useSelector(state=>state.userSignin)
  const {userInfo}=userSignin;

  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");

  }
  const openMenu=()=>{
   
    document.querySelector('.sidebar').classList.add('open');


  }
  
  return (
    <BrowserRouter>
  
     <div className='grid-container'>
        <header className='header'>
            <div className="brand">
                <button onClick={openMenu} > &#9776;</button>
                <Link to='/'> agriZone</Link>
            </div>
            <div className="header-links">
            <Link to='/cart' style={{fontSize:'2.5rem'}}>🛒
            
                    </Link>
               
                {userInfo ? <Link to='/profile'>{userInfo.name}</Link> :
               <Link to='/signin'>Sign In</Link>}

                {
                  userInfo && userInfo.isAdmin &&(
                    <div className="dropdown">
                      <a href='#'>Admin</a>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/orders">Orders</Link>
                          <Link to="/products">Products</Link>
                        </li>

                      </ul>
                    </div>
                  )
                }

            </div>

        </header>
        <aside className="sidebar" >
            <h3>Shopping Catagories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li><Link to="/category/organic" >Organic Items</Link></li>
                <li><Link to="/category/grains" >Food Grains</Link></li>
            </ul>
        </aside>
        <main className='main'>
            <div className="content">
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/products' exact={true} component={ProductsScreen} />
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/register' component={RegisterScreen} />
              <Route path='/signin' component={SigninScreen} />
            <Route path='/products/:id' component={ProductScreen} />
              <Route path='/' exact={true} component={HomeScreen} />
              <Route path="/cart/:id?"  component={CartScreen} />
              

            
        </div>
        </main>
        <footer className='footer'>
            All Rights Reserved.
        </footer>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
