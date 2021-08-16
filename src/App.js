import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from './axios.js';
import Header from './Header';
import Home from './Home';
import ProductDetails from './ProductDetails';


function App() {

  const [products, setProducts] = useState([]); 


  useEffect(() => {
      axios.get('/products').then((response) => {
          setProducts(response.data)
      })
  }, [])

  

  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          
          <Route exact path={"/", "/products"} component={ () => <Home  products={products}/>} />
          <Route path="/products/:productId" component={ProductDetails} />
          <Route path="/checkout" />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
