import './App.css';
import Header from './common/header/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Sdata from './components/shop/Sdata';
import Footer from './components/footer/Footer';


function App() {
  //step1: Feth data from database

  const{productItems} =Data
  const{shopItems}  =Sdata
  const[cartItem,setCartItem] =useState([])

  const addToCart =(product) =>{
    const productExit = cartItem.find((item) =>item.id===product.id)

    if(productExit){
      setCartItem(cartItem.map((item) =>
        (item.id===product.id?
          {...productExit, qty: productExit.qty+1}
          : item)))
    }else{
      setCartItem([...cartItem,{...product,qty:1}])
    }
  }

    // Stpe: 6
    const decreaseQty = (product) => {
      // if hamro product alredy cart xa bhane  find garna help garxa
      const productExit = cartItem.find((item) => item.id === product.id)
  
      // if product is exit and its qty is 1 then we will run a fun  setCartItem
      // inside  setCartItem we will run filter to check if item.id is match to product.id
      // if the item.id is doesnt match to product.id then that items are display in cart
      // else
      if (productExit.qty === 1) {
        setCartItem(cartItem.filter((item) => item.id !== product.id))
      } else {
        // if product is exit and qty  of that produt is not equal to 1
        // then will run function call setCartItem
        // inside setCartItem we will run map method
        // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
        setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
      }
    }

  return (
    <>
      <Router>
          <Header cartItem={cartItem}/>
          <Switch>
            <Route path='/' exact>
              <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
            </Route>
          
    
            <Route path='/cart' exact>
              <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
            </Route>
            </Switch>
            <Footer/> 
          
      </Router>
      
    </>
  );
}

export default App;
