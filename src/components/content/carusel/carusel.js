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
import { useDispatch, useStore } from 'react-redux';

export default function Carusel() {
  const store = useStore();
  const dispatch = useDispatch();

  dispatch(fetchAllContentByType('groupTypes'));

  let { groupTypesArr } = store.getState().content;
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

      itemClasses.push(classes.mainItem);

      imgClasses.push(classes.mainImg);

      let itemKey = Math.random();

      return (
        <Carousel.Item className={itemClasses.join(' ')}>
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
