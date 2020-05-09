import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Welcome from './welcome.js'
import Projects from './projects.js'
import FPL from './fpl.js'
import Photos from './photos.js'
import About from './about.js'

class RouteList extends Component {
  render() {
    return (
      <Switch> { /* Evaluates which page to display based on path */ }
        <Route exact path="/" component={withRouter(Welcome) } />
        <Route path='/about' component={withRouter(About)} />
        <Route path="/projects" component={withRouter(Projects)} />
        <Route path="/fpl" component={withRouter(FPL)} />
        <Route path="/photos" component={withRouter(Photos)} />
      </Switch>
    )
  }
}

export default RouteList;