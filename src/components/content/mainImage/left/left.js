import React, { Component } from 'react';
import classes from './left.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { onOpen } from '../../../../store/actions/contentSrc';

class left extends Component {
  static contextTypes = {
    visibleModel: PropTypes.bool,
  };

  state = {
    visibleModel: false,
  };

  render() {
    const mainClass = [];

    mainClass.push(classes.mainClass);
    mainClass.push('col-md-6 d-flex align-items-center justify-content-center');

    return (
      <div className={mainClass.join(' ')}>
        <div>
          <h1 className="text-white d-flex justify-content-start col-md-12">
            Спорт
          </h1>
          <h2 className="text-white d-flex justify-content-start col-md-12">
            Первая тренировка
          </h2>
          <h2 className="text-white d-flex justify-content-start col-md-12">
            Бесплатно
          </h2>
          <div className="row d-flex justify-content-start col-md-12">
            <div className="col-md-6">
              <button type="button" className="btn btn-light" onClick={onOpen}>
                Записаться
              </button>
            </div>
            <div className="col-md-6 text-white">
              <Link to="/coaches">Тренеры</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default left;
