import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Welcome from './welcome.js'
import Blog from './blog.js'
import Photos from './photos.js'
import About from './about/about.js'

class RouteList extends Component {
  render() {
    return (
      <Switch> { /* Evaluates which page to display based on path */ }
        <Route exact path="/" component={withRouter(Welcome) } />
        <Route path='/about' component={withRouter(About)} />
        <Route path="/photos" component={withRouter(Photos)} />
        <Route path="/jp-blog" component={withRouter(Blog)} />
      </Switch>
    )
  }
}

export default RouteList;