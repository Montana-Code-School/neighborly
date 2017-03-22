import React from 'react';
import {browserHistory, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';

class LoginCreateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      admin: false,
      email: "",
      loginMsg: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleAdminChange = this.handleAdminChange.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleAdminChange(e) {
    this.setState({admin: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleLoginUser(event) {
    event.preventDefault();
    this.props.userStore.LoginUser(this.state.name, this.state.password);
    this.setState({name: "", password: ""});
  }

  render() {
    return (
      <div>
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
        <img src={"http://medicalboard.co.ke/images/collabo.png"} style={{width:100, marginTop: -7}} />
          <Navbar.Brand>
            <Link to="/"/>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={{pathname: '/Browse'}}><NavItem>Browse Items</NavItem></LinkContainer>
            <LinkContainer to={{pathname: '/Activity'}}><NavItem>Activity</NavItem></LinkContainer>
            <LinkContainer to={{pathname: '/MyNeighbors'}}><NavItem>My Neighbors</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight className="nav-bar-right"/>
        </Navbar.Collapse>
      </Navbar>
      {this.props.children}
  </div>
  <Grid>
    <Row className="show-grid">
      <Col md={5} mdPush={5}>
  <form method="" role="form">
      <legend>{this.state.loginMsg == "" ? "Please Log In!": this.state.loginMsg}</legend>

  <div className="form-group">
    <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" id="username" placeholder="username"/>
  </div>

  <div className="form-group">
    <input onChange={this.handlePasswordChange} value={this.state.password}type="text" className="form-control" id="password" placeholder="password"/>
  </div>

  <button onClick={this.handleLoginUser} type="submit" className="btn btn-primary">Submit</button>
    </form>
      </Col>
        <Col md={5} mdPull={5}>
    <form method="" role="form">
        <legend>{this.state.loginMsg == "" ? "Be Neighborly and Create an Account!": this.state.loginMsg}</legend>

    <div className="form-group">
      <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" id="username" placeholder="username"/>
    </div>

    <div className="form-group">
      <input onChange={this.handlePasswordChange} value={this.state.password}type="text" className="form-control" id="password" placeholder="password"/>
    </div>

    <button onClick={this.handleLoginUser} type="submit" className="btn btn-primary">Submit</button>
      </form>
      <button onClick={this.handleLoginUser} type="submit" className="btn btn-primary">Continue with Facebook</button>
      </Col>
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
