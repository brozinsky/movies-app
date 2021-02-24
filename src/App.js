import React, { useEffect, useState } from 'react'
import './App.css';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path={['/movie/:id', '/']}>
        <HomePage />
      </Route>
    </>
  );
}

export default App;
