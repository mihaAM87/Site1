import React, { useReducer } from 'react';
import classes from './schedule.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Carusel from '../../../carusel/carusel';
import Coaches from '../coaches/coaches';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export default function Schedule() {
  const dispatch = useDispatch();
  const params = useParams();
  const store = useStore();

  dispatch(fetchAllContentByType('schedule'));
  dispatch(fetchAllContentByType('sessions'));
  dispatch(fetchAllContentByType('coaches'));
  let { scheduleArr, sessionArr, coachesArr } = store.getState().content;

  let tableHead = scheduleArr.contents[0].contents.map(function (
    item,
    index,
    array
  ) {
    return <th>{item.name}</th>;
  });

  let tableBody = scheduleArr.contents.map(function (item, index, array) {
    return (
      <tr>
        <td>
          {item.from} - {item.to}
        </td>
        {item.contents.map(function (item, index, array) {
          let currentSessionArr = sessionArr.contents.filter((k) =>
            item.content.sessions.find((x) => x.sessionsIds.includes(k.id))
          );
          let currentCoacheArr = coachesArr.contents.filter((k) =>
            item.content.sessions.find((x) => x.coachesIds.includes(k.id))
          );

          return (
            <td>
              {currentSessionArr.map((x) => x.name).join(' / ')}
              <br />
              {currentCoacheArr.map((x) => x.content.header).join(' / ')}
            </td>
          );
        })}
      </tr>
    );
  });

  const navClass = [];

  navClass.push('text-white');

  return (
    <div className="row">
      <Carusel />
      <div className={navClass.join(' ')}>
        <h1 className="col-md-2">Расписание занятий</h1>
        <div className="row">
          <Table striped bordered hover className={classes.mainTable}>
            <thead>
              <tr>
                <th>Время</th>
                {tableHead}
              </tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
