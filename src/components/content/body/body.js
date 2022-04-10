import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './body.module.scss';
import { connect } from 'react-redux';
import { IMG_DIRECTORY } from '../../../store/actions/content';
import { fetchAllContentByType } from '../../../store/actions/contentSrc';
import SportTypes from './pages/sportTypes/sportTypes';
import Coaches from './pages/coaches/coaches';
import Prices from './pages/prices/prices';
import Contacts from './pages/contacts/contacts';
import Home from './pages/home/home';
import Radium from 'radium';

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
        <Switch>
          <Route path="/sportTypes/:name" component={SportTypes} />
          <Route path="/coaches" component={Coaches} />
          <Route path="/prices" component={Prices} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/" component={Home} />
        </Switch>
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
