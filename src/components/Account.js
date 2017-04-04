import React from 'react';
import { Col, Jumbotron } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import { Form, FormGroup, Media } from "reactstrap";
import Navigation from './Navigation';
import { Flex, Box  } from 'reflexbox';

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
        <Navigation/>
        {this.props.children}
        <div style={{paddingTop:"200px"}}>
          <Jumbotron style={{backgroundColor:"transparent"}}>
            <Flex align="left">
              <Box>
                <Media>
                  <Media style={{width:"2%", paddingRight:"20"}} object src="../images/profile.png"
                  alt="Profile Picture"/>
                  <Media body>
                    <Media heading>
                      <div>
                        <h2>Name:</h2><h3>{this.props.userStore.name}</h3>
                      </div>
                    </Media>
                    <h2>Neighborhood:</h2><h3>{this.props.userStore.neighborhood}</h3>
                  </Media>
                </Media>
              </Box>
            </Flex>
          </Jumbotron>
        </div>

          <br/>

        <div>
          <Form>
            <Col sm={8}>
              <legend>Add Your Items to Loan!!</legend>

              <FormGroup>
                <input onChange={this.handleCategoryChange} value={this.state.category}
                className="form-control" id="category" placeholder="category"/>
              </FormGroup>

              <FormGroup>
                <input onChange={this.handleDescriptionChange} value={this.state.description}
                className="form-control" id="description" placeholder="description"/>
              </FormGroup>

              <FormGroup>
                <input onChange={this.handleConditionChange} value={this.state.condition}
                className="form-control" id="condition" placeholder="condition"/>
              </FormGroup>

              <FormGroup>
                <input onChange={this.handleUrlChange} value={this.state.url}
                  className="form-control"
                id="url" placeholder="url"/>
              </FormGroup>

              <button onClick={this.handleNewItem} type="submit"
                className="btn btn-primary">Add Your Item!
              </button>
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
