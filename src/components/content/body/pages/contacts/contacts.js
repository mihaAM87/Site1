import React, { Component } from 'react';
import classes from './contacts.module.scss';
import { connect } from 'react-redux';
import {
  METRO_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../../store/actions/content';
import { useDispatch, useStore } from 'react-redux';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';

export default function Contacts() {
  const store = useStore();
  const dispatch = useDispatch();

  dispatch(fetchAllContentByType('contacts'));

  let { header, city, street, home, undergrounds, phones, emails } =
    store.getState().content.contacts;

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-md-12">{header?.toUpperCase()}</h1>
        <div className="col-md-12">
          <h3>
            <strong>Адрес: </strong>
            <img
              alt="Знак Метрополитена"
              src={IMG_DIRECTORY + MAIN_IMGES_DIR + METRO_IMG}
              className={classes.metroImg}
            ></img>
            <strong>
              {city}, {street}, {home}, м. {undergrounds?.join(', м. ')}
            </strong>
          </h3>
        </div>
        <div className="col-md-12">
          <h3>
            <span>Электронная почта: {emails?.join(', ')}</span>
            <br />
            <span>Номер телефона: {phones?.join(', ')}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
