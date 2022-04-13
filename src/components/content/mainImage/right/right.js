import React, { Component } from 'react';
import classes from './right.module.scss';
import {
  MAIN_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../store/actions/content';

class right extends Component {
  static contextTypes = {};

  render() {
    const imgClass = [];

    imgClass.push(classes.mainImg);
    return (
      <div className="col-md-6">
        <img
          alt="Главное изображение"
          src={IMG_DIRECTORY + MAIN_IMGES_DIR + MAIN_IMG}
          className={imgClass.join(' ')}
        ></img>
      </div>
    );
  }
}

export default right;
