import React from 'react';
import Nav from './nav';
import ComputerAnimation from './animations/computer-animation';

class Projects extends React.Component {
  render () {
    return(
      <React.Fragment>
        <Nav active={this.props.match.url}/>
        <div>
          <ComputerAnimation/>
          <p className='white'>Projects</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;