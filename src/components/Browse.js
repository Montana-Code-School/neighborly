import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
// import 'bootstrap/dist/css/bootstrap.css';
import { render } from 'react-dom';
import Checkbox from './Checkbox';
import PowerTools from './PowerTools';
import Gardening from './Gardening';


class Browse extends React.Component {
  constructor() {
    super();
    this.state = {
      category: ""
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.createCheckbox = this.createCheckbox.bind(this);
    this.createCheckboxes = this.createCheckboxes.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount ()  {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox (label)  {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      // console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox(label) {
    render(
      <Checkbox
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
      />
    );
  }

  createCheckboxes () {
    const items = [
      'Power Tools',
      'Kitchen Appliances',
      'Gardening',
      'Hobby',
      'Outdoor Gear'
    ];
    items.map(this.createCheckbox);
  } //look up map function

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
      <h1>
        <img src="../images/swpl.jpg" style={{width:100, marginTop: -7}} />
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
                {/*<LinkContainer to={{pathname: '/Activity'}}><NavItem>Activity</NavItem></LinkContainer>*/}
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
          <div className="row">
            <Col md={1} mdPull={2}>
              <form onSubmit={this.searchCategory}>
                <div>
                  {this.createCheckboxes}
                </div>
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
            <PowerTools/>
          </div>
        </div>
      </div>
    );
  }
 }


Browse.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object
};

export default inject('userStore')(observer(Browse));
