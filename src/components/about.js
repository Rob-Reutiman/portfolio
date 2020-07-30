import React from 'react';

import Nav from './nav'

class About extends React.Component {
  render () {
    return(
      <React.Fragment>
        <Nav active={this.props.match.url}/>
        <div className='page-content'>
          <div className='header'>
            <h1>Hello, World! Here's what you need to know about me.</h1>
          </div>
          <div className='code_box'>
            <span>Rob_Reutiman = &#123;</span>
            <ul className='list'>
              <li>&#09;origin: <span>Mill Valley, CA,</span></li>
              <li>&#09;education: <span>University of Notre Dame,</span></li>
              <li>&#09;major: <span>Computer Science,</span></li>
              <li>&#09;GPA: <span>3.38,</span></li>
              <li>&#09;interests: <span>&#91; Coding, Backpacking, Spearfishing, Video Games, Photography, Japanese Language and Culture &#93;,</span></li>
              <li>&#09;latest_work_experience: <span>&#123;
                <ul className='list'>
                  <li>&#09;company: <span>FamHis,</span></li>
                  <li>&#09;role: <span>Junior Software Engineer,</span></li>
                  <li>&#09;duration: <span>Jan - July 2020</span></li>
                </ul>&#125;,</span>
              </li>
              <li>&#09;resume: <a href='reutiman_resume.pdf'>reutiman_resume.pdf</a></li>
            </ul>
            <span>&#125;</span>
          </div>
          <div className='header'>
            <h1>Projects</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;