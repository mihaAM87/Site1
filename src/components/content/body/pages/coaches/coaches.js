import React, { useContext } from 'react';
import {
  IMG_DIRECTORY,
  COACHES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Card from 'react-bootstrap/Card';
import Carusel from '../../../carusel/carusel';
import classes from './coaches.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { ModalContext } from '../../../../../context/modal/modalContext';

export default function Coaches({ sportType }) {
  const store = useStore();
  const dispatch = useDispatch();
  const { show } = useContext(ModalContext);

  dispatch(fetchAllContentByType('coaches'));

  let { coachesArr } = store.getState().content;
  coachesArr = coachesArr || [];

  const header = coachesArr?.header;

  const itemClass = [];
  const mainDiv = [];

  mainDiv.push('container');
  mainDiv.push(classes.mainDiv);

  itemClass.push('col-md-4');

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
                onClick={show}
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

      <div className={mainDiv.join(' ')}>
        <h1>{header}</h1>
        <div className="row">{coachesArr ? coachesArr : <br />}</div>
      </div>
    </div>
  );
}
