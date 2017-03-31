import { extendObservable } from 'mobx';
import {browserHistory} from 'react-router';


export default class ItemStore {
  constructor  () {
    extendObservable(this, {
      items: []
    });
    this.newItem = this.newItem.bind(this);
  }

  setItems(items) {
    this.items = items;
  }

  newItem(item) {
    fetch('/item', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        condition: item.condition,
        description: item.description,
        category: item.category,
        url: item.url
      })
    })
    .then(function(result) {
      return result.json();})
    .then(resultItem => {
      this.items.push(resultItem);
      browserHistory.push('/Browse');
    });
  }
}
