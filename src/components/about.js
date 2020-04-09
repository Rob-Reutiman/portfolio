import React from 'react';

import Nav from './nav'

class About extends React.Component {
  render () {
    return(
      <React.Fragment>
        <Nav/>
        <div className='background'>
          <p className='paragraph'>About</p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;