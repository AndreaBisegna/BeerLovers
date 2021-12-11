import React from 'react';
import MyCart from './components/MyCart.js';
import ProductsList from './components/ProductsList.js';
import Nav from './components/Nav.js';
import store from './components/Store.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';







function App() {

 
  store.subscribe(()=>{}); 



  return (
    <Router>
      <div className="App">
      <div className="main-container">
        <Nav />
        <Routes>
        <Route path="/" exact element={<SearchField/>}/>
        <Route path="/components/ProductsList" element={<ProductsList/>}/>
        <Route path="/components/MyCart" element={<MyCart/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}




const SearchField = () => {
 return(
    <div>
      <h1>HomePage</h1>
    </div>

 )
  
}

export default App;


