import React, { useContext } from 'react';
import classes from './caption.module.scss';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  LOGOTYPE,
  METRO_IMG,
  IMG_DIRECTORY,
  MAIN_IMGES_DIR,
} from '../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../store/actions/contentSrc';
import { useDispatch, useStore } from 'react-redux';
import { ModalContext } from '../../../../context/modal/modalContext';

export default function Caption() {
  const { show } = useContext(ModalContext);
  const dispatch = useDispatch();
  const store = useStore();

  dispatch(fetchAllContentByType('contacts'));

  let { city, street, home, undergrounds, phones, emails } =
    store.getState().content.contacts;

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
              {city}, {street}, {home}, м. {undergrounds?.join(', м. ')}
            </span>
          </div>
          <div className="col-md-2">
            <div>
              <span>{emails?.join(', ')}</span>
              <br />
              <span>{phones?.join(', ')}</span>
            </div>
          </div>
          <div className="col-md-2">
            <button className="form-control btn btn-dark" onClick={show}>
              Заказать Звонок
            </button>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}
