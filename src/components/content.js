import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Welcome from './welcome.js'
import Projects from './projects.js'
import Blog from './blog.js'
import Photos from './photos.js'
import About from './about.js'

class RouteList extends Component {
  render() {
    return (
      <Switch> { /* Evaluates which page to display based on path */ }
          <Route path="/projects" component={withRouter(Projects)} />
          <Route path="/blog" component={withRouter(Blog)} /> 
          <Route path="/photos" component={withRouter(Photos)} />
          <Route path='/about' component={withRouter(About)} />
          <Route exact path="/" component={withRouter(Welcome)} />
      </Switch>
    )
  }
}

export default RouteList;