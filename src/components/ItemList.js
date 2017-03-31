import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import ItemStore from '../stores/ItemStore';
import BrowseTwo from './Browse';
import { Card, CardBlock, CardTitle, CardText, CardSubtitle, CardHeader, CardColumns, CardImg } from "reactstrap";
import { render } from 'react-dom';

ItemList.propTypes = {
  items: React.PropTypes.array.isRequired,
  account: React.PropTypes.object
};

function ItemList(props) {
  let addedItems = props.items.map(function(item) {
    return (
          <Card block key={item._id}>
            <CardImg top width="100%" src={item.url} rounded alt="Card image cap"/>
            <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
              <CardTitle>{item.category}</CardTitle>
              <CardSubtitle>{item.condition}</CardSubtitle>
              <CardText>{item.description}</CardText>
            </Card>
          </Card>
    );
  });

  return (
    <div>
      {addedItems}
    </div>
  );
}

export default ItemList;
