import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import ProductScreen from './main/ProductScreen'; 
import CartScreen from './main/CartScreen';
import FavoriteScreen from './main/FavoriteScreen'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="grid-container">
          <Header />
          <main>
            <Route path="/favorite"  component={FavoriteScreen}/>
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} /> 
            <Route path="/" component={Main} exact />
           </main>
          <Footer />
        </div>
      </BrowserRouter>
    
    </>

  );
}

export default App;
