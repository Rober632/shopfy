import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import Wishlist from './pages/wishlist/wishlist'
import Product from './pages/product/product';
import NoPage from './pages/NoPage/nopage';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import './App.css';
import './services/i18n'
import React, { Suspense } from 'react';
import { useTranslation } from "react-i18next";
import Checkout from "./pages/checkout/checkout";
export const ThemeContext = createContext(null)
function App() {
  const [language , setLanguage] = useState('en')
  const [products , setProducts] =useState([])
  const [isLoading, setLoading] = useState(true);
  const [filter, setFilter] = useState(null)
  const [theme , setTheme] = useState('Light')
  
  const toggleTheme = () => {
    setTheme( curr => curr === 'Light' ? curr = 'Dark' : curr = 'Light')
  }
  useEffect(() => {
    if (filter === null ){
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> {setProducts(json)
      setLoading(false)})  
    }
  if(filter === 1 ){
    setProducts(products.sort((a,b) => a.price.toString().localeCompare(b.price, undefined, {numeric: true})));
  }
  else if (filter === 2 ) {
    setProducts(products.sort((b,a) => a.price.toString().localeCompare(b.price, undefined, {numeric: true})));
  }
  },[products,filter ])
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <ThemeContext.Provider value={{theme , toggleTheme  , language , setLanguage}}>
        <Suspense fallback="loading">
          <div className="App" id={theme}>
            <div className='content'>
              <BrowserRouter >
                <Routes>
                    <Route path="home" element={<Home products = {products} isLoading = {isLoading} setFilter = {setFilter} />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist/>} />
                    <Route path=':id' element={<Product products = {products} isLoading ={isLoading} />} />
                    <Route path="/checkout" element = {<Checkout/>} />
                    <Route path="*" element={<NoPage />} /> 
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;
