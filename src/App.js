import React, { Component } from 'react';

import './assets/css/portfolio.css'

import { BrowserRouter as Router } from "react-router-dom";

import RouteList from './components/content';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      path: '/'
    }
  }

  render() {
    return (
      <Router>
        <RouteList/>
      </Router>
    )
  }
}
 
export default App;