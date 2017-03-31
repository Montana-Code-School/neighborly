import React from 'react';
import { browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Col } from 'react-bootstrap';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      email: "",
      loginMsg: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleLoginUser(event) {
    event.preventDefault();
    this.props.userStore.LoginUser(this.state.email, this.state.password);
    this.setState({email: "", password: ""});
  }

  render() {
    return (
        <Col md={5} mdPush={5}>
          <form method="" role="form">
            <legend>{this.state.loginMsg == "" ? "Please Log In!": this.state.loginMsg}</legend>

            <div className="form-group">
              <input onChange={this.handleEmailChange} value={this.state.email} type="text" className="form-control" id="email" placeholder="email address"/>
            </div>

            <div className="form-group">
              <input onChange={this.handlePasswordChange} value={this.state.password}type="password" className="form-control" id="password" placeholder="password"/>
            </div>

            <button onClick={this.handleLoginUser} type="submit" className="btn btn-primary">Submit</button><br/>
          </form>
        </Col>
    );
  }
}

Login.propTypes = {
  LoginUser: React.PropTypes.func,
  userStore:  React.PropTypes.object
};

export default inject("userStore")(observer(Login));
