import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, Jumbotron } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { render } from 'react-dom';
import Checkbox from './Checkbox';
import PowerTools from './PowerTools';
import Account from './account';
import ItemList from './ItemList';
import { Card, CardBlock, CardTitle, CardText, CardSubtitle, CardHeader, CardColumns, CardImg } from "reactstrap";

class BrowseTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loadItemsFromServer = this.loadItemsFromServer.bind(this);
  }

  componentWillMount ()  {
    this.selectedCheckboxes = new Set();
  }
  componentDidMount() {
    this.loadItemsFromServer();
  }

  loadItemsFromServer() {
    fetch('/item')
      .then(function(result) {return result.json();})
      .then(items=> this.props.itemStore.setItems(items));
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
  }

  searchCategory () {
    const categories = [
      'Power Tools',
      'Gardening',
      'Hobby',
      'Outdoor'
    ];
  }

  render() {
    return(
      <div>
        <h1><img src="../images/swpl.jpg" style={{width:270, height: 150, marginTop: -7}} /></h1>
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
                <LinkContainer to={{pathname: '/Login'}}><NavItem>Be Neighborly!</NavItem></LinkContainer>
              </Nav>
              <Nav pullRight className="nav-bar-right"/>
            </Navbar.Collapse>
          </Navbar>
          {this.props.children}
        </div>
        <h1>Browse the Neighborhood!</h1>
        <div className="row">
          <Col md={3} mdPush={1}>
            <form method="" role="form">
              <div className="form-group">
                <input type="text" className="form-control" id="Item" placeholder="Search for an item..."/>
              </div>
            </form>
          </Col>
        </div>


        <div className="container">
          <Jumbotron>
            <div className="row">
              <Col sm={2}>
                <form onSubmit={this.searchCategory}>
                  <button className="btn btn-success" smPull={2} type="warning">Power Tools</button><br/>
                    <br/>
                  <button className="btn btn-success" smPull={2} type="warning">Gardening</button><br/>
                    <br/>
                  <button className="btn btn-success" smPull={2} type="warning">Kitchen</button><br/>
                    <br/>
                  <button className="btn btn-success" smPull={2} type="warning">Outdoor</button><br/>
                    <br/>
                  <button className="btn btn-success" smPull={2} type="warning">Hobby</button><br/>
                    <br/>
                  <button className="btn btn-default" smPull={2} type="submit">Search</button>
                </form>
              </Col>
              <div>
                <Grid>
                  <CardColumns>
                    <Col sm={6}>
                    <ItemList items={this.props.itemStore.items}/>
                    </Col>
                  </CardColumns>
                </Grid>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

BrowseTwo.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object,
  items: React.PropTypes.object,
  user: React.PropTypes.object
};

export default inject('itemStore', 'userStore')(observer(BrowseTwo));
