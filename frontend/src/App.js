import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/index';
import Routes from './Routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
  );

}

export default App;
