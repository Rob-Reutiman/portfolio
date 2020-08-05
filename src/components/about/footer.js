import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <h1>
          <a href='https://www.linkedin.com/in/robert-reutiman/'><i className="fab fa-linkedin fa-md"></i></a>
          <a href='https://github.com/Rob-Reutiman'><i className="fab fa-github fa-md"></i></a>
          <a href='https://open.spotify.com/user/1291022190'><i className="fab fa-spotify fa-md"></i></a>
          <a href='https://www.instagram.com/roborob18/'><i className="fab fa-instagram fa-md"></i></a>
        </h1>
        <span>© Rob Reutiman 2020</span>
      </div>
    )
  }
}

export default Footer;