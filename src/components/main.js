import React from 'react';
import { Navbar, Nav, NavItem, Grid, Col, Row } from 'react-bootstrap';
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
      <link rel="stylesheet" href="../../public/style.css"/>
        <h1 id="h1">
          <img src="../images/logoSWPL.jpg" style={{width:100, marginTop: -7}} /> Welcome to SWPL {this.props.userStore.name}!
        </h1>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"/>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname: '/Browse'}}><NavItem>   Browse Items   </NavItem></LinkContainer>
              <LinkContainer to={{pathname: '/Activity'}}><NavItem>  Activity  </NavItem></LinkContainer>
              <LinkContainer to={{pathname: '/MyNeighbors'}}><NavItem>   My Neighbors   </NavItem></LinkContainer>
              <LinkContainer to={{pathname: '/Login'}}><NavItem>   Be Neighborly!   </NavItem></LinkContainer>
            </Nav>
            <Nav pullRight className="nav-bar-right"/>
          </Navbar.Collapse>
        </Navbar>

    {this.props.children}
      <div>
        <Grid>
        <Row>
        <img src={"https://coloradowatersports.com/images/com_hikashop/upload/canoe.jpg"} style={{width:200, height:200, padding:10}} />
        <img src={"http://www.homedepot.com/catalog/productImages/1000/79/79aab6e4-a7f0-43f8-ae80-739b428bfae3_1000.jpg"} style={{width:200, height:200, padding:10}} />
        <img src={"https://www.rei.com/media/product/875163"} style={{width:200, height:200, padding:10}} />
        <img src={"https://images-na.ssl-images-amazon.com/images/I/71L6KlixIXL._SL1500_.jpg"} style={{width:200, height:200, padding:10}} />
        <img src={"https://cloudfront.zoro.com/product/full/Z2oM8yqcpEx_.JPG"} style={{width:200, height:200, padding:10}} />
        </Row>
        <Row>
        <img src={"http://d3d71ba2asa5oz.cloudfront.net/53000671/images/mst5249a.jpg"} style={{width:200, height:200, padding:10}} />
        <img src={"https://smhttp-ssl-17653.nexcesscdn.net/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/d/gdo610.jpg"} style={{width:200, height:200, padding:10}} />
        <img src={"http://www.professional-power-tool-guide.com/wp-content/uploads/2008/08/women-orbital-sander.jpg"} style={{width:200, height:200, padding:10}} />
        <img src={"https://images-na.ssl-images-amazon.com/images/I/81LmkUY3lLL._SL1500_.jpg"} style={{width:200, height:200, padding:10}} />
        <img src={"https://cloudfront.zoro.com/product/full/Z0xGIvicpEx_.JPG"} style={{width:200, height:200, padding:10}} />
        </Row>
        </Grid>

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

export default inject('userStore')(observer(Main));
