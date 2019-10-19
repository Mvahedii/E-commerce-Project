import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={Shop} />
    </div>
  );
}

export default App;
