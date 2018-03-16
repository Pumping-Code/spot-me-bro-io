import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from './components/Home.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path='/' component={Home}/>
        <Route path='/privacy-policy' component={PrivacyPolicy}/>
      </main>
    );
  }
}

export default App;
