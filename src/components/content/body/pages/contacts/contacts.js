import React, { Component } from 'react';
import classes from './contacts.module.scss';
import { connect } from 'react-redux';
import {
  METRO_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../../store/actions/content';

export default function contacts() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-md-12">КОНТАКТЫ КЛУБА</h1>
        <div className="col-md-12">
          <h3>
            <strong>Адрес: </strong>
            <img
              alt="Знак Метрополитена"
              src={IMG_DIRECTORY + MAIN_IMGES_DIR + METRO_IMG}
              className={classes.metroImg}
            ></img>
            <strong>
              г. Москва, Краснодонская улица, 39, м. "Волжская", м. "Люблино"
            </strong>
          </h3>
        </div>
        <div className="col-md-12">
          <h3>
            <span>Электронная почта: MikhailAA1@yandex.ru</span>
            <br />
            <span>Номер телефона: +7 (964) 763-21-29</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
