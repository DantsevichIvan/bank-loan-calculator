import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import HomePage from './HomePage'
import ActorsPage from './ActorsPage'
import Header from './Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Route path="/ /" render={()=> <HomePage/> }/>
        <Route path="/actors" render={()=> <ActorsPage/> }/>
      </div>
    </div>
  );
}

export default App;
