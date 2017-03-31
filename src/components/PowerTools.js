import React from 'react';
import { browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Col, Grid, Row } from 'react-bootstrap';

class PowerTools extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Ryobi 2.6 Amp 5 in. Random Orbital Sander</h5>
                  <small>2 days ago</small>
                </div>
                <img src={'http://www.homedepot.com/catalog/productImages/1000/31/312f7ae1-7b43-4584-ab6d-78ce1664dcb0_1000.jpg'} style={{width:100}}/>
                <p className="mb-1">Crafted with an ergonomic design for comfort as you work, the sander accepts hook and loop sandpaper for fast and easy grit changes and comes with an array of sandpaper for convenience. To help prevent accidental workplace gouging during start-up, the sander also features a spin-control pad braking system for added safety.</p>
                <small>Good Condition</small>
              </a>
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Dewalt 15 Amp 10 in. Compact Job Site Table Saw</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <img src={'http://www.homedepot.com/catalog/productImages/1000/3f/3f75b59d-b153-45fd-ad06-052296e477f1_1000.jpg'} style={{width:100}}/>
                <p className="mb-1">The saw features a lightweight design for easy transportation on and off the job and an all-metal roll cage for protection during heavy-duty use.</p>
                <small className="text-muted">Fair Condition</small>
              </a>
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">ECHO 18 in. 40.2cc Gas Chainsaw</h5>
                  <small className="text-muted">6 days ago</small>
                </div>
                <img src={'http://www.homedepot.com/catalog/productImages/1000/15/15299e65-392a-42ef-98ab-ed480b8796b5_1000.jpg'} style={{width:100}}/>
                <p className="mb-1">Professional-grade, gas chainsaw with 18 in. is packed with commercial grade features that make saw use and maintenance easier.</p>
                <small className="text-muted">Nearly New</small>
              </a>
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Karcher K5 Premium 2,000 psi 1.4 GPM Electric Pressure Washer</h5>
                  <small>2 days ago</small>
                </div>
                <img src={'http://www.homedepot.com/catalog/productImages/1000/61/6113dcaf-6aab-4141-90c0-7daa0ab2783e_1000.jpg'} style={{width:100}}/>
                <p className="mb-1">high pressure cleaning for tough jobs. Pressurized hose reel conveniently protects and stores the hose. The patented induction motor is water cooled to increase life up to 5x.</p>
                <small>Good Condition</small>
              </a>
            </div>

    );
  }
}

export default PowerTools;
