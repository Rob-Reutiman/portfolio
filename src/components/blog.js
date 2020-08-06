import React from 'react';

import Nav from './nav';
import Footer from './footer';

class Blog extends React.Component {
    render () {
        return(
          <React.Fragment>

            <Nav active={this.props.match.url}/>

            <div className="page-content">
            </div>

            <Footer/>

          </React.Fragment>
        );
    }
}

export default Blog;