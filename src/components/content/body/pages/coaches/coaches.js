import React, { Component } from 'react';
import {
  IMG_DIRECTORY,
  COACHES_IMGES_DIR,
} from '../../../../../store/actions/content';
import {
  fetchAllContentByType,
  onOpen,
} from '../../../../../store/actions/contentSrc';
import Card from 'react-bootstrap/Card';
import Carusel from '../../../carusel/carusel';
import classes from './coaches.module.scss';
import { useDispatch, useStore } from 'react-redux';

export default function Coaches({ sportType }) {
  const store = useStore();
  const dispatch = useDispatch();

  dispatch(fetchAllContentByType('coaches'));

  let { coachesArr } = store.getState().content;
  coachesArr = coachesArr || [];

  const itemClass = [];

  itemClass.push('col-md-4');
  itemClass.push(classes.itemClass);

  if (sportType && sportType != '') {
    coachesArr = coachesArr?.contents?.filter(
      (item) => item.content.type.toLowerCase() === sportType?.toLowerCase()
    );
  } else {
    coachesArr = coachesArr?.contents;
  }

  if (coachesArr && coachesArr.length > 0) {
    coachesArr = coachesArr.map((element) => {
      let elementContent = element.content;
      let itemKey = Math.random();
      return (
        <div className={itemClass.join(' ')} key={itemKey}>
          <Card>
            <Card.Img
              variant="top"
              src={IMG_DIRECTORY + COACHES_IMGES_DIR + elementContent.img}
            />
            <Card.Body>
              <Card.Title>{elementContent.header}</Card.Title>
              <Card.Text>{elementContent.content}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <button
                className="form-control btn btn-primary"
                variant="primary"
                onClick={onOpen}
              >
                Записаться
              </button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  return (
    <div className="row">
      {!sportType || sportType == '' ? <Carusel /> : <br />}

      <div className="conteiner">
        <div className="row">{coachesArr ? coachesArr : <br />}</div>
      </div>
    </div>
  );
}
