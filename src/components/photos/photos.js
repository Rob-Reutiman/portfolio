import React from 'react';

import Nav from '../nav';
import Footer from '../footer';
class Photos extends React.Component {

  render () {
    const pics = [];
    const pictures = pics.map((picture, index) => {
      return (
        <img src={picture} alt={'photo' + index}></img>
      )
    });

    return (
      <React.Fragment>

        <Nav active={this.props.match.url}/>

        <div className="page-content">
          <div className='header photo-header'>
            <h1 className=''>I take lots of photos for fun, but here are my current favorites!</h1>
          </div>

          <div className='photos'>
            {pictures}
          </div>

        </div>

        <Footer/>
        
      </React.Fragment>
    );
  }
}

export default Photos;