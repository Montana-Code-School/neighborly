import React from 'react';
import {browserHistory, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import CreateAccount from './CreateAccount';
import Login from './Login';

class LoginCreateAccount extends React.Component {

  render() {
    // JSX indenting below needs some clean up. Unfortunately es lint doesn't
    // help for JSX so you have to do it manually. - Harold
    return (
      <div>
        <div>
          <Navbar.Header>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav tabs>
            <h1 id="h1"><img src="../images/swpl.jpg" style={{marginTop: -7}} /></h1>
            <LinkContainer to={{pathname: '/'}}><NavItem>Home</NavItem></LinkContainer>
            <LinkContainer to={{pathname: '/Browse'}}><NavItem>Browse Items</NavItem></LinkContainer>
            <LinkContainer to={{pathname: '/Activity'}}><NavItem>Activity</NavItem></LinkContainer>
            <LinkContainer to={{pathname: '/Account'}}><NavItem>Your Account</NavItem></LinkContainer>
            {/*<LinkContainer to={{pathname: '/MyNeighbors'}}><NavItem>   My Neighbors   </NavItem></LinkContainer>*/}
            <LinkContainer to={{pathname: '/Login'}}><NavItem>Login</NavItem></LinkContainer>
          </Nav>
            <Nav pullRight className="nav-bar-right"/>
          </Navbar.Collapse>
        {this.props.children}
    </div>
      <Grid>
        <Row className="show-grid">
        <Login/>
        <CreateAccount/>
      </Row>
    </Grid>
  </div>
    );
  }
}

LoginCreateAccount.propTypes = {
  LoginUser: React.PropTypes.func,
  userStore:  React.PropTypes.object,
  children: React.PropTypes.object
};

export default inject("userStore")(observer(LoginCreateAccount));
