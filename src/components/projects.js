import React from 'react';
import Nav from './nav';
import ComputerAnimation from './animations/computer-animation';

class Projects extends React.Component {
  render () {
    return(
      <React.Fragment>
        <Nav active={this.props.match.url}/>
        <div className='background'>
          <ComputerAnimation/>
          <p className='paragraph'>Projects</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;