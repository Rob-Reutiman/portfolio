import React from 'react';

import Nav from './nav'

class Home extends React.Component {
  render () {
    return(
      <React.Fragment>
        <Nav/>
        <div className='background'>
          <p className='paragraph'>Projects</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;