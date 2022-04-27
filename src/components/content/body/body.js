import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import classes from './body.module.scss';
import { connect } from 'react-redux';
import SportTypes from './pages/sportTypes/sportTypes';
import Coaches from './pages/coaches/coaches';
import Prices from './pages/prices/prices';
import Contacts from './pages/contacts/contacts';
import Home from './pages/home/home';

class body extends Component {
  static contextTypes = {};

  state = {};

  componentWillMount() {}

  render() {
    let myBody = [];
    myBody.push('container');
    myBody.push(classes.myBody);

    return (
      <div className={myBody.push(' ')}>
        <Routes>
          <Route path="/sportTypes/:name" element={<SportTypes />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(body);
