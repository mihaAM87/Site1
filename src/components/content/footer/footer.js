import React, { Component } from 'react';
import classes from './footer.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { fetchAllContentByType } from '../../../store/actions/contentSrc';

export default function Footer() {
  const dispatch = useDispatch();
  const store = useStore();

  dispatch(fetchAllContentByType('contacts'));

  let { phones } = store.getState().content.contacts;

  const mainClass = [];

  mainClass.push('container');
  mainClass.push(classes.blackBackground);
  mainClass.push(classes.whiteColor);
  return (
    <div className={mainClass.join(' ')}>
      <h4>{phones?.join(', ')}</h4>
      <h5>
        <span className={classes.redColor}>Тренировка</span> (с) 2022. Все права
        защищены.
      </h5>
    </div>
  );
}
