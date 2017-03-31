import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Grid, Col } from 'react-bootstrap';


class SearchCategories extends React.Component {

  constructor() {
    super();
    this.state = {
      keyword: "",
      foundCategories: []
    };
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeywordChange(e) {
    this.setState({keyword: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/items'${this.state.keyword}`)
      .then(function(result) {return result.json();})
      .then(data => this.setState({
        foundCategories: this.showCategory(this.state.keyword, data.data)}));

  }

  showCategory(keyword, foundCategories) {
    return foundCategories.map(item => ({
      name: item.keyword,
      description: keyword
    }));
  }

  render() {
    return (
      <div>
      <form method="" role="form">
          <legend>Categories</legend>

          <div className="form-group">
            <input onChange={this.handleKeywordChange} value={this.state.keyword}
            type="text" className="form-control" id="keyword" placeholder="keyword"/>
          </div>

          <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

    );
  }
}

SearchCategories.propTypes = {
  addNewImage: React.PropTypes.func,
  itemStore: React.PropTypes.object
};

export default inject ("itemStore")(observer(SearchCategories));
