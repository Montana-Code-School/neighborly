import React from 'react';
import { Navbar, Nav, NavItem, Grid, Col, Row, Jumbotron } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link} from 'react-router';
import { inject, observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from 'react-dom';
import Browse from './Browse';



class Main extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
            <Navbar.Header>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <div>
                <Nav tabs className="sticky-top">
                  <h1 id="h1"><img src="../images/swpl.jpg" style={{marginTop: -7}} /></h1>
                  <LinkContainer to={{pathname: '/'}}><NavItem>Home</NavItem></LinkContainer>
                  <LinkContainer to={{pathname: '/Browse'}}><NavItem>Browse Items</NavItem></LinkContainer>
                  <LinkContainer to={{pathname: '/Activity'}}><NavItem>Activity</NavItem></LinkContainer>
                  <LinkContainer to={{pathname: '/Account'}}><NavItem>Your Account</NavItem></LinkContainer>
                  <LinkContainer to={{pathname: '/MyNeighbors'}}><NavItem>   My Neighbors   </NavItem></LinkContainer>
                  <LinkContainer to={{pathname: '/Login'}}><NavItem>Login</NavItem></LinkContainer>
                </Nav>
              </div>

              <Nav pullRight className="nav-bar-right"/>
            </Navbar.Collapse>

        {this.props.children}
        <div style={{color:"grey"}}>
          <div>
            <img style={{width:"100vw", height:"83.5vh", overflow:"hidden"}} src="../images/home.jpg"/>
          </div>
        </div>

      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object
};

export default inject('userStore', 'itemStore')(observer(Main));
