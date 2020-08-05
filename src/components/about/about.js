import React from 'react';

import Nav from './nav';
import Introduction from './introduction';
import Projects from './projects';
import Footer from './footer';

class About extends React.Component {
  render () {

    return(
      <React.Fragment>

        <Nav active={this.props.match.url}/>

        <div className='page-content'>

          <Introduction/>

          <Projects/>

        </div>

        <Footer/>

      </React.Fragment>
    );
  }
}

export default About;