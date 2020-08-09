import React from 'react';

import Nav from '../nav';
import Footer from '../footer';

import house from './house_0.jpg';
import mushrooms from './Shroomies_0.png';
import sunrise from './sky_1.jpg';
import sunset from './sunset_0.jpg';
import bolinas from './Tree_0.jpg';
import beach from './tybee_0.jpg';

class Photos extends React.Component {

  render () {
    const pics = [house, sunset, mushrooms, sunrise, bolinas, beach];
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