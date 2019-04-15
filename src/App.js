import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

// PAGES
import Nav from './components/Nav';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Nav />
        <Home />
      </HashRouter>
    );
  }
}

export default App;
