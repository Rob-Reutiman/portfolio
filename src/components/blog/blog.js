import React from 'react';

import Nav from '../nav';
import Entries from './entries';
import Footer from '../footer';

class Blog extends React.Component {
    render () {

      const posts = Entries.map(entry => {
        return (
          <div className='expr'>
          {entry.title} <span className='dates'>{entry.date}</span>
          <p className='white'>
            {entry.text}
          </p>
        </div>
        )
      })

        return (
          <React.Fragment>

            <Nav active={this.props.match.url}/>

            <div className="page-content">
              <div className='coming_soon'><h1>Coming Soon</h1></div>

              {/* <div className='header'>
                <h1>私のブラグ</h1>
              </div> */}
            </div>

            {/* {posts} */}


            <Footer/>

          </React.Fragment>
        );
    }
}

export default Blog;