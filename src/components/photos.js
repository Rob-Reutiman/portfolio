import React from 'react';

import Nav from './nav';
import Footer from './footer';

class Photos extends React.Component {
    render () {
        return(
          <React.Fragment>

            <Nav active={this.props.match.url}/>

            <div className="page-content">
              <div className='coming_soon'><h1>Coming Soon</h1></div>
            </div>

            <Footer/>

          </React.Fragment>
        );
    }
}

export default Photos;