import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Home from './components/Home.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* both /roster and /roster/:number begin with /roster */}
        <Route path='/privacy-policy' component={PrivacyPolicy}/>
      </Switch>
    );
  }
}

export default App;
