import React from 'react';
import Nav from './nav'

class Photos extends React.Component {
    render () {
        return(
          <React.Fragment>
            <Nav active={this.props.match.url}/>
            <div className='background'>
            </div>
          </React.Fragment>
        );
    }
}

export default Photos;