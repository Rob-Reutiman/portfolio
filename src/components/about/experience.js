import React from 'react';
import experiences from './work-experiences';

class Experience extends React.Component {
  render () {

    const work_experience = experiences.map(experience => {

      const description = experience.bullets.map(desc => {
        return (
          <li>{desc}</li>
        )
      });

      return (
        <div className='expr'>
          {experience.company} <span className='dates'>{experience.dates}</span>
          <p className='role'>{experience.role}</p>
          <ul>
            {description}
          </ul>
        </div>
      )
    });

    return (
      <React.Fragment>
        <div id='experience' className='header'>
          <h1>Experience</h1>
        </div>

        {work_experience}

      </React.Fragment>
    )
  }
}

export default Experience;