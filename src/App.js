import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './Pages/Home/Home'
import './App.css';

function App() {
  return (
    <div>
    <Route exact path='/' component={HomePage} />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
