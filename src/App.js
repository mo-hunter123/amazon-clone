import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';


function App() {
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
