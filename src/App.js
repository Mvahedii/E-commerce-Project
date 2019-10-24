import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './Components/Header/Header'
import HomePage from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import SingInandSignUp from './Pages/SingInandSignUp/SingInandSignUp'

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/sign-in' component={SingInandSignUp} />
      </Switch>
    </div>
  );
}

export default App;
