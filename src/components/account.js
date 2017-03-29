import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, Image, Thumbnail, Button} from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { render } from 'react-dom';
import { Card, CardBlock, CardTitle, CardText, CardSubtitle, CardHeader, CardColumns, CardImg, CardDeck } from "reactstrap";

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
      <h1>
        <img src="../images/swpl.jpg" style={{width:270, height:150, marginTop: -7}}  />Welcome {this.props.userStore.name}!
      </h1>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/"/>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={{pathname: '/'}}><NavItem>Main</NavItem></LinkContainer>
                <LinkContainer to={{pathname: '/Activity'}}><NavItem>Activity</NavItem></LinkContainer>
                {/*<LinkContainer to={{pathname: '/MyNeighbors'}}><NavItem>My Neighbors</NavItem></LinkContainer>*/}
                <LinkContainer to={{pathname: '/Account'}}><NavItem>Your Account!</NavItem></LinkContainer>
              </Nav>
              <Nav pullRight className="nav-bar-right"/>
            </Navbar.Collapse>
          </Navbar>
          {this.props.children}
        </div>
        <CardDeck>
        <Card>
        <div style={{marginLeft:-250}}>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="http://cdn.playbuzz.com/cdn/cd6e17b1-162e-43cd-9f9d-ebe1c3401cb5/8189758a-afad-4250-9582-f81713f31366.jpg" circle />
                  <h3>Alex</h3>
                  <p>Bozeman, Montana</p>
              </Col>
              <Col xs={6} md={3}>
              <h4>Just a hard-working dude that has equipment Im happy to lend and hoping to borrow a few things for side projects</h4>
              </Col>
            </Row>
          </Grid>
        </div>
        </Card>
        </CardDeck>

        <br/>
        <div>

      <form method="" role="form">
        <Col sm={8}>
          <legend>Add Your Items!!</legend>
          <div className="form-group">
            <input onChange={this.handleCategoryChange} value={this.state.category} className="form-control" id="category" placeholder="category"/>
          </div>

          <div className="form-group">
            <input onChange={this.handleDescriptionChange} value={this.state.description} className="form-control" id="description" placeholder="description"/>
          </div>

          <div className="form-group">
            <input onChange={this.handleConditionChange} value={this.state.condition} className="form-control" id="condition" placeholder="condition"/>
          </div>
          <div className="form-group">
            <input onChange={this.handleUrlChange} value={this.state.url} className="form-control" id="url" placeholder="url"/>
          </div>

          <button onClick={this.handleNewItem} type="submit" className="btn btn-primary">Add Your Item!</button>
          </Col>
          </form>
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
