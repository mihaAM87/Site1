import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import classes from './sportTypes.module.scss';
import { useDispatch, useStore } from 'react-redux';
import {
  IMG_DIRECTORY,
  SPORTTYPES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Carusel from '../../../carusel/carusel';
import Coaches from '../coaches/coaches';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export default function schedule() {
  const dispatch = useDispatch();
  const params = useParams();
  const store = useStore();

  dispatch(fetchAllContentByType('schedule'));
  dispatch(fetchAllContentByType('sessions'));
  let { schedule, sessions } = store.getState().content;

  const navClass = [];

  navClass.push('text-white');

  return (
    <div className="row">
      <Carusel />
      {sportTypeItem ? (
        <div className={navClass.join(' ')}>
          <h1 className="col-md-2">Расписание занятий</h1>
          <div className="row">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Время</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <br />
      )}
    </div>
  );
}
