import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Link} from 'react-router';
import UserStore from './stores/UserStore';
import ItemStore from './stores/ItemStore';
import { Provider } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import Account from './components/account';
import LoginCreateAccount from './components/loginCreateAccount';
import Browse from './components/Browse';
import Activity from './components/activity';
import Neighbors from './components/myNeighbors';
import Main from './components/main';

let userStore = new UserStore();

render((
  <Provider userStore={userStore}>
    <Router history={browserHistory}>
      <Route>
        <Route path="/Login" component={LoginCreateAccount}/>
        <Route path="/" component={Main}>
          <Route path="/Browse" component={Browse}/>
          <Route path="/Activity" component={Activity}/>
          <Route path="/MyNeighbors" component={Neighbors}/>
          <Route path="/Account" component={Account}/>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
