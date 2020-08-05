import React, { Component } from 'react';

import './assets/css/bootstrap.css'
import './assets/css/bootstrap.min.css'
import './assets/css/portfolio.css'

import { BrowserRouter as Router } from "react-router-dom";

import RouteList from './components/routes';

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