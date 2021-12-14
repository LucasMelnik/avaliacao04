import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    );
  }
}

export default App;
