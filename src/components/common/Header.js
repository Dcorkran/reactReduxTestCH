import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid-nav container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a id="logo-container" className="navbar-brand" href="#"><img className="logo" src={require('../../img/choozle.png')}></img></a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">

          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Why Choozle</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Agencies</a></li>
            <li id="nav-button-container"><button className="btn btn-danger">CONTACT US NOW</button></li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
