import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Blog from './blog/blog.js'
import Photos from './photos/photos.js'
import About from './about/about.js'

class RouteList extends Component {
  render() {
    return (
      <Switch> { /* Evaluates which page to display based on path */ }
        <Route path='/' component={withRouter(About)} />
        {/* <Route path="/photos" component={withRouter(Photos)} />
        <Route path="/jp-blog" component={withRouter(Blog)} /> */}
      </Switch>
    )
  }
}

export default RouteList;