import React from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Flex, Box } from 'reflexbox';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navBar navbar-fixed-top">
        <Navbar collapseOnSelect id="nav-margin">
          <Navbar.Header>
            <Flex align="center" gutter={2} justify="space-between" wrap>
              <Box col={4} p={2}>
                <span id="logo"><img src="../images/swpl.jpg" style={{marginTop: -7}} /></span>
              </Box>
            </Flex>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <Flex align="flex-end" justify="flex-end">

                <Box auto col={3} p={3}>
                  <LinkContainer to={{pathname: '/'}}>
                    <NavItem className="navHome">HOME</NavItem>
                  </LinkContainer>
                </Box>

                <Box auto col={3} p={3}>
                  <LinkContainer to={{pathname: '/Browse'}}>
                    <NavItem className="navBrowse">BROWSE</NavItem>
                  </LinkContainer>
                </Box>

                <Box auto col={3} p={3}>
                  <LinkContainer to={{pathname: '/Activity'}}>
                    <NavItem className="navActivity">ACTIVITY</NavItem>
                  </LinkContainer>
                </Box>

                <Box auto col={3} p={3}>
                  <LinkContainer to={{pathname: '/Account'}}>
                    <NavItem className="navAccount">ACCOUNT</NavItem>
                  </LinkContainer>
                </Box>

                <Box auto col={3} p={3}>
                  <LinkContainer to={{pathname: '/Login'}}>
                    <NavItem className="navLogin">LOGIN</NavItem>
                  </LinkContainer>
                </Box>

              </Flex>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  logUserOut: React.PropTypes.func
};

export default inject("userStore")(observer(Navigation));
