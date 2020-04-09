import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


class Nav extends Component {
  render() {

    // let item_menu_css = this.state.showHamburgerMenu
    // ? "navbar-collapse collapse in"
    // : "navbar-collapse collapse";
    
    return (
        <nav className="navigation">
          <div className="container-fluid">
            <div>
              <Link to="/"> 
                <span className="header brand">Rob Reutiman</span>
              </Link>
            </div>
            <div className="nav-items">
              <Link to="/about">
                <span className="header nav-item">About</span>
              </Link>
              <Link to="/projects"> 
                <span className="header nav-item">Projects</span>
              </Link>
              <Link to="/blog">
                <span className="header nav-item">Blog</span>
              </Link>
              <Link to="/photos">
                <span className="header nav-item">Photos</span>
              </Link>
              {/* <button>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
              </button> */}
            </div>
          </div>
        </nav>
    );
  }
}

export default Nav;