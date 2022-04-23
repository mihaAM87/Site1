import React, { Component } from 'react';
import classes from './caption.module.scss';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  LOGOTYPE,
  METRO_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../store/actions/content';

class caption extends Component {
  static contextTypes = {
    visibleModel: PropTypes.bool,
  };

  state = {
    visibleModel: false,
  };

  render() {
    let mainClass = [];

    mainClass.push('row');
    mainClass.push(classes.mainClass);

    return (
      <div className={mainClass.join(' ')}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <NavbarBrand as={NavLink} to="/">
                <img
                  alt="Логотип"
                  src={IMG_DIRECTORY + MAIN_IMGES_DIR + LOGOTYPE}
                  className={classes.logotype}
                ></img>
              </NavbarBrand>
            </div>
            <div className="col-md-3">
              <img
                alt="Знак метрополитена"
                src={IMG_DIRECTORY + MAIN_IMGES_DIR + METRO_IMG}
                className={classes.metroImg}
              ></img>
              <span>
                г. Москва, Краснодонская улица, 39, м. "Волжская", м. "Люблино"
              </span>
            </div>
            <div className="col-md-2">
              <div>
                <span>MikhailAA1@yandex.ru</span>
                <br />
                <span>+7 (964) 763-21-29</span>
              </div>
            </div>
            <div className="col-md-2">
              <button
                className="form-control btn btn-dark"
                onClick={this.setState({ visibleModel: true })}
              >
                Заказать Звонок
              </button>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default caption;
