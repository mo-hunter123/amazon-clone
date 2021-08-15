import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import instance from './axios';
import Header from './Header';
import Home from './Home';


function App() {

  const [products, setProducts] = useState([]); 

  useEffect(() => {
      instance.get('/products').then((response) => {
          setProducts(response.data)
      })
  }, [])


  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
