import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import classes from './carusel.module.scss';
import { connect } from 'react-redux';
import {
  IMG_DIRECTORY,
  GROUPTYPES_IMGES_DIR,
} from '../../../store/actions/content';
import { fetchAllContentByType } from '../../../store/actions/contentSrc';

class carusel extends Component {
  static contextTypes = {
    type: PropTypes.string,
    groupTypesArr: PropTypes.array,
  };

  state = {
    groupTypesArr: [],
  };

  UNSAFE_componentWillMount() {
    this.props.groupTypesInit('groupTypes', this.state.groupTypesArr);
  }

  render() {
    let { groupTypesArr } = this.props;
    groupTypesArr = groupTypesArr || [];
    if (
      groupTypesArr &&
      groupTypesArr.contents &&
      groupTypesArr.contents.length > 0
    ) {
      groupTypesArr = groupTypesArr.contents.map((element) => {
        let itemClasses = [];
        let imgClasses = [];
        itemClasses.push('carousel-item');

        if (element.name.toLowerCase() === 'женщины') {
          itemClasses.push('active');
        }

        imgClasses.push(classes.mainImg);
        imgClasses.push('d-block w-100');
        // imgClasses.push('img-fluid mw-100 mh-100');

        let itemKey = Math.random();

        return (
          <Carousel.Item>
            <img
              key={itemKey}
              className={imgClasses.join(' ')}
              src={IMG_DIRECTORY + GROUPTYPES_IMGES_DIR + element.content.img}
              alt={element.content.header}
            />
            <Carousel.Caption>
              <h3>{element.content.header}</h3>
              <p>{element.content.content}.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    }

    return <Carousel>{groupTypesArr}</Carousel>;
  }
}
function mapStateToProps(state) {
  return {
    groupTypesArr: state.content.groupTypesArr,
    loading: state.content.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    groupTypesInit: (type, groupTypesArr) =>
      dispatch(fetchAllContentByType(type)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(carusel);
