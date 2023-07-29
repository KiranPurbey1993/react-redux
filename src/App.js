import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      
      <div style={{marginTop:'100px'}}>
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" exact  Component={ProductListing}></Route>
              <Route path="/product/:productId" exact  Component={ProductDetail}></Route>
              <Route>404 Not Found!</Route>
          </Routes>
        </BrowserRouter>
      </div>
     
    </div>
  );
}

export default App;
