import React from 'react'
import './App.css';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';

function App() {

  return (
    <>
      {/* <Route path={['/movie/:id', '/page=:page']}> */}
      <HomePage />
      {/* </Route> */}
    </>
  );
}

export default App;