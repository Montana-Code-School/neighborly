import React from 'react';
import { inject, observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Navigation';



class Main extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Navigation/>
        {this.props.children}
        <div style={{color:"grey", paddingTop:"133px"}}>
          <div>
            <img style={{width:"100vw", height:"83.5vh", overflow:"hidden"}}
            src="http://www.eralandmark.com/files/imagecache/slideshow_large/large_images/4_1.jpg"/>
          </div>
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

export default inject('userStore', 'itemStore')(observer(Main));
