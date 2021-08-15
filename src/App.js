import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './Header';
import Home from './Home';


function App() {

  const [products, setProducts] = useState([]); 

  useEffect(() => {
      axios.get('http://localhost:9000/products').then((response) => {
          setProducts(response.data)
      })
  }, [])


  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ () => <Home  products={products}/>} />
          <Route path="/checkout" />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
