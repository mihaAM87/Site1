import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
