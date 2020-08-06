import React from 'react';

import Nav from '../nav';
import Introduction from './introduction';
import Experience from './experience';
import Projects from './projects';
import Coursework from './coursework';
import Footer from './footer';

class About extends React.Component {
  render () {

    return(
      <React.Fragment>

        <Nav active={this.props.match.url}/>

        <div className='page-content'>

          <Introduction/>

          <Experience/>

          <Projects/>

          <Coursework/>

        </div>

        <Footer/>

      </React.Fragment>
    );
  }
}

export default About;