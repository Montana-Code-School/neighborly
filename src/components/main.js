import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link} from 'react-router';


class Main extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <h1>Main Page Bitches, Welcome {this.props.userStore.name}!</h1>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname: '/Browse'}}><NavItem>Browse Items</NavItem></LinkContainer>
              <LinkContainer to={{pathname: '/Activity'}}><NavItem>Activity</NavItem></LinkContainer>
              <LinkContainer to={{pathname: '/MyNeighbors'}}><NavItem>My Neighbors</NavItem></LinkContainer>
              <LinkContainer to={{pathname: '/Login'}}><NavItem>Be Neighborly!</NavItem></LinkContainer>
            </Nav>
            <Nav pullRight className="nav-bar-right"/>
          </Navbar.Collapse>
        </Navbar>

    {this.props.children}

      </div>
    )
  }

}

export default Main
