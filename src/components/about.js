import React from 'react';

import Nav from './nav'

class About extends React.Component {
  render () {
    return(
      <React.Fragment>
        <Nav active={this.props.match.url}/>
        <div className="page-content">
          <div className='hello-world'>
            <h1 className='center-text highlight'>Hello, World! Here's what you need to know about me.</h1>
          </div>
          <p className='white hello-world'>rob_Reutiman = &#123;</p>
          <ul className='list hello-world'>
            <li className='highlight list-item'>&#09;origin: <span className='white welcome'>"Mill Valley, CA",</span></li>
            <li className='highlight list-item'>&#09;education: <span className='white welcome'>"University of Notre Dame",</span></li>
            <li className='highlight list-item'>&#09;major: <span className='white welcome'>"Computer Science",</span></li>
            <li className='highlight list-item'>&#09;interests: <span className='white welcome'>&#91; Backpacking, Spearfishing, Video Games, Photography, Japanese Language and Culture &#93;,</span></li>
            <li className='highlight list-item'>&#09;major: <span className='white welcome'>"Computer Science",</span></li>

          </ul>
          <p className='welcome hello-world'>&#125;</p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;