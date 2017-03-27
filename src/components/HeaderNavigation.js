import React from 'react';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { inject, observer } from 'mobx-react';
import { Flex, Box } from 'reflexbox';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
      <link rel="stylesheet" href="../../public/style.css"/>


      <nav className="navbar navbar-inverse navbar-fixed-top navbar-toggleable-sm">
        <div className="container">

          <div className="navbar-header">
            <button  className="navbar-toggle navbar-toggle-collapsed"  data-toggle="collapse" data-target="#bs-nav-demo">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#"><flex align="left" justify="space-around"/><img    src="../images/swpllogo.png" /></a>
          </div>

          <div className="navbar-collapse collapse ">
            <ul className="nav navbar-nav flex-row justify-space-between">
              <li className="nav-item py-md-5"><a href="#">Browse</a></li>
              <li className="nav-item py-md-5"><a className="active" href="#">Account</a></li>
            </ul>
            <ul className="nav navbar-nav flex-row justify-space-between">
              <li className="nav-item py-md-5"><a href="#">Login</a></li>
              <li className="nav-item py-md-5"><a href="#">Sign up</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}

Navbar.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object
};

export default Navbar;
