// Our classes convention around naming React Components has been to capitalize
// the file names as well as the class. Let's be consistent here, and make
// account.js be Account.js. Remember to git mv account.js Account.js, or
// git won't see your name change.
// Also- I turned on warnings for lines that are too long and variables and
// imports you don't use (in .eslintrc). It would make your code much healthier
// to minimize your warnings. This comment is for all your files, not just
// account. - Harold

import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, Image, Thumbnail, Button, Jumbotron } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { render } from 'react-dom';
import { Card, CardBlock, CardTitle, CardDeck, CardText, CardSubtitle, CardHeader, CardColumns, CardImg, Form, FormGroup, FormText, Input, Label, FormFeedback, ClassName, Modal, ModalHeader, ModalBody, ModalFooter, ButtonLabel, Media} from "reactstrap";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      description: "",
      condition: "",
      url: ""
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleConditionChange = this.handleConditionChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleNewItem = this.handleNewItem.bind(this);
  }


  handleCategoryChange(e) {
    this.setState({category: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  handleConditionChange(e) {
    this.setState({condition: e.target.value});
  }
  handleUrlChange(e) {
    this.setState({url: e.target.value});
  }

  handleNewItem(event) {
    event.preventDefault();
    this.props.itemStore.newItem(this.state);
  }


  render() {
    return(
      <div>

        <div>
          <Navbar.Header>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav tabs collapseOnSelect>
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
        <Jumbotron style={{backgroundColor:"transparent"}}>
          <Media>
            <Media left>
              <Media style={{width:"100%"}} object src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaxK-ShbagBr7eQdl9-OSyf05NUFAAUBn9n_OkH5uaTg_S8JRK" alt="minions!!!!!!"/>
            </Media>
            <Media body>
              <Media heading>
                <div>
                  <h2>{this.props.userStore.name}</h2>
                </div>
              </Media>
            </Media>
          </Media>
        </Jumbotron>

        <br/>

        <div>
          <Form>
            <Col sm={8}>
              <legend>Add Your Items!!</legend>

              <FormGroup>
                <input onChange={this.handleCategoryChange} value={this.state.category} className="form-control" id="category" placeholder="category"/>
              </FormGroup>

              <FormGroup>
                <input onChange={this.handleDescriptionChange} value={this.state.description} className="form-control" id="description" placeholder="description"/>
              </FormGroup>

              <FormGroup>
                <input onChange={this.handleConditionChange} value={this.state.condition} className="form-control" id="condition" placeholder="condition"/>
              </FormGroup>

              <FormGroup>
                <input onChange={this.handleUrlChange} value={this.state.url} className="form-control" id="url" placeholder="url"/>
              </FormGroup>

              <button onClick={this.handleNewItem} type="submit" className="btn btn-primary">Add Your Item!</button>
            </Col>
          </Form>
        </div>
      </div>

    );
  }
}

Account.propTypes = {
  children: React.PropTypes.object,
  newItem: React.PropTypes.func,
  itemStore: React.PropTypes.object,
  userStore: React.PropTypes.object
};

export default inject ('itemStore', 'userStore')(observer(Account));
