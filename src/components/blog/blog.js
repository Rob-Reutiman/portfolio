import React from 'react';

import Nav from '../nav';
import Entries from './entries';
import Footer from '../footer';

class Blog extends React.Component {
    render () {

      const posts = Entries.map(entry => {
        return (
          <div className='blog'>
            <table>
              <tr>
                <td className='tcol'>{entry.title}</td>
                <td className='tcol dates'><span>{entry.date}</span></td>
              </tr>
            </table>
            <p className='white'>
              <br/>
              {entry.text}
            </p>
          </div>
        )
      })

        return (
          <React.Fragment>

            <Nav active={this.props.match.url}/>

            <div className="page-content">

              <div className='header blog_header'>
                <h1>私のブラグ</h1>
              </div>

              {posts}

            </div>

            <Footer/>

          </React.Fragment>
        );
    }
}

export default Blog;