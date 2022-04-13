import React, { Component } from 'react';
import Caption from './caption/caption';
import MyMenu from './myMenu/myMenu';

class header extends Component {
  static contextTypes = {};

  render() {
    return (
      <div>
        <Caption />
        <MyMenu />
      </div>
    );
  }
}

export default header;
