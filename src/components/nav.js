import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


class Nav extends Component {
  render() {

    // const photosActive = this.props.active === "/photos" ? "active" : "";
    // const fplActive = this.props.active === "/fpl" ? "active" : "";
    // const projectsActive = this.props.active === "/projects" ? "active" : "";
    // const aboutActive = this.props.active === "/about" ? "active" : "";

    return (  
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navigation">
        <Link to="/"> 
          <span className="brand">Rob Reutiman</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <i className="fa fa-bars fa-1x"></i>
          </span>
        </button>
        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <a href="#about"><span>About</span></a>
              <a href="#projects"><span>Projects</span></a>
            {/* <Link to="/fpl" onClick={() => this.setState({active: "fpl"})}>
              <span className={fplActive}>FPL</span>
            </Link>
            <Link to="/photos" onClick={() => this.setState({active: "photos"})}>
              <span className={photosActive}>Photos</span>
            </Link>
            <Link to="/blog" onClick={() => this.setState({active: "blog"})}>
              <span className={BlogActive}>Blog</span>
            </Link> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;