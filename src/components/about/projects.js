import React from 'react';
import myProjects from './p-descriptions.js';

class Projects extends React.Component {
  render () {

    const projects = myProjects.map(project => {
      const tags = project.tags.map(tag => {
        return (
          <div className='tag'>{tag}</div>
        )
      })
      return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
          <div className='link_box'>
            <i className={'fas ' + project.icon + ' fa-2x'}></i>
            <h2><a href={project.link}>{project.name}</a> <a href={project.link}><i className='fab fa-github fa-md'></i></a></h2>
            <div>
              {tags}
            </div>
            <span>{project.description}</span>
          </div>
        </div>
      )
    });

    return (
      <React.Fragment>
        <div className='header'>
          <h1>Projects</h1>
        </div>

        <div className='container'>
          <div className='row'>
            {projects}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Projects;