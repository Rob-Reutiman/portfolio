import React from 'react';

import classes from './classes';

class Coursework extends React.Component {
  render () {

    const courses = classes.map(c => {

      return (
        <React.Fragment>
          <p>{c.name} <span className='course_dates'>{c.dates}</span></p>
        </React.Fragment>
      )
    });

    return (
      <React.Fragment>
        <div className='header'>
          <h1>Coursework</h1>
        </div>

        <div className='expr'>
          {courses}
        </div>
      </React.Fragment>
    )
  }
}

export default Coursework;