import React from 'react';

import Nav from './nav'

class About extends React.Component {
  render () {
    return(
      <React.Fragment>
        <Nav active={this.props.match.url}/>
        <div className='background'>
          <div className='hello-world'>
            <p className='paragraph center-text teal'>Hello, World! Here's what you need to know about me.</p>
          </div>
          <p className='paragraph welcome hello-world'>rob_Reutiman = &#123;</p>
          <ul className='list hello-world'>
            <li className='paragraph teal list-item'>&#09;origin: <span className='paragraph welcome'>"Mill Valley, CA",</span></li>
            <li className='paragraph teal list-item'>&#09;education: <span className='paragraph welcome'>"University of Notre Dame",</span></li>
            <li className='paragraph teal list-item'>&#09;major: <span className='paragraph welcome'>"Computer Science",</span></li>
            <li className='paragraph teal list-item'>&#09;interests: <span className='paragraph welcome'>&#91; Backpacking, Spearfishing, Video Games, Photography, Japanese Language and Culture &#93;,</span></li>
            <li className='paragraph teal list-item'>&#09;major: <span className='paragraph welcome'>"Computer Science",</span></li>

          </ul>
          <p className='paragraph welcome hello-world'>&#125;</p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;