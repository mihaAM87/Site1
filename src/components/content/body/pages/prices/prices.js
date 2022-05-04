import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './prices.module.scss';
import { connect } from 'react-redux';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Card from 'react-bootstrap/Card';
import Carusel from '../../../carusel/carusel';
import { useDispatch, useStore } from 'react-redux';

export default function Prices() {
  const store = useStore();
  const dispatch = useDispatch();

  dispatch(fetchAllContentByType('prices'));

  let { pricesArr } = store.getState().content;
  pricesArr = pricesArr || [];

  const itemClass = [];

  itemClass.push('col-md-3');
  itemClass.push(classes.itemImg);

  if (pricesArr && pricesArr.contents && pricesArr.contents.length > 0) {
    pricesArr = pricesArr.contents.map((element) => {
      let itemKey = Math.random();
      return (
        <div key={itemKey} className={itemClass.join(' ')}>
          <Card className={classes.itemImg}>
            <Card.Body>
              <Card.Title>
                <h3>{element.header}</h3>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {element.content.conditions ? (
                  <p>{element.content.conditions}</p>
                ) : (
                  <div>
                    <p></p>
                    <br />
                  </div>
                )}
              </Card.Subtitle>
              <Card.Text>
                <h2>{element.content.price}.</h2>
              </Card.Text>
              <button className="btn btn-light">Купить</button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  return (
    <div className="row">
      <Carusel />
      <div className="conteiner">
        <div className="row">
          <h1>Стоимость тренировок</h1>
          {pricesArr}
        </div>
      </div>
    </div>
  );
}
