import React from 'react';

import avatar from './avatar.png';
import laptop from './laptop.gif';

class Introduction extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='avatar'>
          <img src={avatar} alt='<avatar.png>'></img>
          <img className='computer' src={laptop} alt='<laptop.gif>'></img>
        </div>

        <div className='header'>
          <h1>Hello, World! Here's what you need to know about me.</h1>
        </div>

        <div className='code_box'>
          <span>rob_reutiman = &#123;</span>
          <ul className='list'>
            <li>&#09;origin: <span>San Francisco, CA,</span></li>
            <li>&#09;education: <span>B.S. in Computer Science from the University of Notre Dame,</span></li>
            <li>&#09;skills: <span>&#91; Javascript, Java, Python, HTML/CSS, C, SQL, Bash, Node.js, Mocha, Chain, Spring Boot, JUnit, Django, React, Angular, AWS Cloud, Docker, K8s, Jira, Scrum, Git, CI/CD, Vault, Splunk, DataDog &#93;,</span></li>
            <li>&#09;interests: <span>&#91; Coding, Arsenal Football Club, F1, Bouldering, Free Diving, Reading, Video Games &#93;,</span></li>
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