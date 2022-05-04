import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import classes from './sportTypes.module.scss';
import { useDispatch, useStore } from 'react-redux';
import {
  IMG_DIRECTORY,
  SPORTTYPES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Carusel from '../../../carusel/carusel';
import Coaches from '../coaches/coaches';
import { useParams } from 'react-router-dom';

export default function SportTypes() {
  const dispatch = useDispatch();
  const params = useParams();
  const store = useStore();

  dispatch(fetchAllContentByType('sportTypes'));
  let sportTypeItem = store
    .getState()
    .content.sportTypesArr.contents.find(
      (item) => item.name.toLowerCase() === params.name.toLowerCase()
    );

  const navClass = [];

  navClass.push('text-white');

  return (
    <div className="row">
      <Carusel />
      {sportTypeItem ? (
        <div className={navClass.join(' ')}>
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
          <Coaches sportType={sportTypeItem.name} />
        </div>
      ) : (
        <Coaches sportType={''} />
      )}
    </div>
  );
}
