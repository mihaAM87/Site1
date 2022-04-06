import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './contacts.module.scss';
import { connect } from 'react-redux';
import {
  METRO_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';

import Radium from 'radium';

class contacts extends Component {
  static contextTypes = {};

  state = {};

  componentWillMount() {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-md-12">КОНТАКТЫ КЛУБА</h1>
          <div className="col-md-12">
            <h3>
              <img
                src={IMG_DIRECTORY + MAIN_IMGES_DIR + METRO_IMG}
                className={classes.metroImg}
              ></img>
              <span>
                г. Москва, Краснодонская улица, 39, м. "Волжская", м. "Люблино"
              </span>
            </h3>
          </div>
          <div className="col-md-12">
            <h3>
              <span>MikhailAA1@yandex.ru</span>
              <br />
              <span>+7 (964) 763-21-29</span>
            </h3>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(contacts);
