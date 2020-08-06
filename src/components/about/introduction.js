import React from 'react';

class Introduction extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='avatar'>
          <img src='avatar.png' alt='<avatar.png>'></img>
          <img className='computer' src='laptop.gif' alt='<laptop.gif>'></img>
        </div>

        <div className='header'>
          <h1>Hello, World! Here's what you need to know about me.</h1>
        </div>

        <div className='code_box'>
          <span>rob_reutiman = &#123;</span>
          <ul className='list'>
            <li>&#09;origin: <span>San Francisco, CA,</span></li>
            <li>&#09;education: <span>University of Notre Dame,</span></li>
            <li>&#09;major: <span>Computer Science,</span></li>
            <li>&#09;GPA: <span>3.38,</span></li>
            <li>&#09;expected_graduation: <span>May 2021,</span></li>
            <li>&#09;interests: <span>&#91; Coding, Backpacking, Spearfishing, Video Games, Photography, Arsenal FC, Japanese Language and Culture &#93;,</span></li>
            <li>&#09;resume: <span><a href='reutiman_resume.pdf'>reutiman_resume.pdf</a>,</span></li>
            <li>&#09;contact: <span>&#123;
              <ul className='list'>
                <li>&#09;phone: <span>949-812-2387,</span></li>
                <li>&#09;email: <span>rob@robreutiman.com</span></li>
              </ul>&#125;</span>
            </li>
          </ul>
          <span>&#125;</span>
        </div>
      </React.Fragment>
    )
  }
}

export default Introduction;