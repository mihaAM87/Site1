import React, { Component, useState } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classes from './sportTypes.module.scss';
import { connect } from 'react-redux';
import {
  IMG_DIRECTORY,
  SPORTTYPES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';

import Radium from 'radium';

class sportTypes extends Component {
  static contextTypes = {
    type: PropTypes.string,
    sportType: PropTypes.object,
  };

  state = {
    sportType: [],
  };

  UNSAFE_componentWillMount() {
    this.props.sportTypeInit(
      'sportTypes',
      this.state.sportType,
      this.props.match.params.name
    );
  }

  componentDidMount() {}

  render() {
    let { sportType } = this.props;

    const navClass = [];

    navClass.push('col-md-12');
    navClass.push('text-white');

    var mainItem = {};

    if (sportType) {
      mainItem = (
        <div
          className={classes.mainContent}
          style={{
            backgroundImage:
              'url(' +
              IMG_DIRECTORY +
              SPORTTYPES_IMGES_DIR +
              sportType.img +
              ')',
          }}
        >
          <h2>{sportType.header}</h2>
          <h3>{sportType.content}</h3>
        </div>
      );
    } else {
      mainItem = <br />;
    }
    return <div className={navClass.join(' ')}>{mainItem}</div>;
  }
}

function mapStateToProps(state) {
  return {
    sportType: state.content.sportType,
    loading: state.content.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sportTypeInit: (type, sportType, id) =>
      dispatch(fetchAllContentByType(type, sportType, id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(sportTypes);
