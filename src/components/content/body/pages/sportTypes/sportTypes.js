import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './sportTypes.module.scss';
import { connect } from 'react-redux';
import {
  IMG_DIRECTORY,
  SPORTTYPES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Carusel from '../../../carusel/carusel';
import Coaches from '../coaches/coaches';

class sportTypes extends Component {
  static contextTypes = {
    type: PropTypes.string,
    sportTypeItem: PropTypes.object,
  };

  state = {
    sportTypeItem: [],
  };

  UNSAFE_componentWillMount() {
    this.props.sportTypeInit(
      'sportTypes',
      this.state.sportTypeItem,
      this.props.match.params.name
    );
  }

  componentDidMount() {}

  render() {
    let { sportTypeItem } = this.props;

    const navClass = [];

    navClass.push('text-white');

    var mainItem = {};
    var sportTypeName = '';

    if (sportTypeItem) {
      sportTypeName = sportTypeItem.name;
      mainItem = () => {
        return (
          <div
            className={classes.mainContent}
            style={{
              backgroundImage:
                'url(' +
                IMG_DIRECTORY +
                SPORTTYPES_IMGES_DIR +
                sportTypeItem.img +
                ')',
            }}
          >
            <h2>{sportTypeItem.header}</h2>
            <h3>{sportTypeItem.content}</h3>
          </div>
        );
      };
    } else {
      mainItem = mainItem = () => {
        return <br />;
      };
    }
    return (
      <div className="row">
        <Carusel />
        <div className={navClass.join(' ')}>{mainItem}</div>
        <Coaches sportType={sportTypeName} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sportTypeItem: state.content.sportTypeItem,
    loading: state.content.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sportTypeInit: (type, sportTypeItem, id) =>
      dispatch(fetchAllContentByType(type, sportTypeItem, id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(sportTypes);
