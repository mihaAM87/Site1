import {
  LOAD_ALL_CONTENTS,
  SPORT_TYPES,
  GROUP_TYPES,
  SPORT_TYPES_ITEM,
  COACHES,
  PRICES,
  START,
  ERROR,
  SEND_USER_INFO,
  OPEN_MODAL_VIEW,
  CLOSE_MODAL_VIEW,
  SCHEDULE,
  SESSIONS,
  CONTACTS,
} from './content';
import { useDispatch } from 'react-redux';

import React from 'react';
import emailjs from 'emailjs-com';

import coachesSource from '../source/coachesSource.json';
import groupTypesSource from '../source/groupTypesSource.json';
import pricesSource from '../source/pricesSource.json';
import scheduleSource from '../source/scheduleSource.json';
import sessionsSource from '../source/sessionsSource.json';
import sportTypesSource from '../source/sportTypesSource.json';
import contactsSource from '../source/contactsSource.json';

export function fetchContentStart(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + START,
    contentArr,
  };
}

export function fetchContentError(e) {
  return {
    type: LOAD_ALL_CONTENTS + ERROR,
    error: e,
  };
}

export function getSportTypeContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + SPORT_TYPES,
    contentArr,
  };
}

export function getSportTypeItemContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + SPORT_TYPES_ITEM,
    contentArr,
  };
}

export function getGroupTypesContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + GROUP_TYPES,
    contentArr,
  };
}

export function onSendContent(userName, userEmail, userPhone) {
  return {
    type: SEND_USER_INFO,
    userName,
    userEmail,
    userPhone,
  };
}

export function getCoachesContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + COACHES,
    contentArr,
  };
}

export function getPricesContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + PRICES,
    contentArr,
  };
}

export function onOpenContent() {
  return {
    type: OPEN_MODAL_VIEW,
  };
}

export function onCloseContent() {
  return {
    type: CLOSE_MODAL_VIEW,
  };
}

export function getScheduleContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + SCHEDULE,
    contentArr,
  };
}

export function getSessionsContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + SESSIONS,
    contentArr,
  };
}

export function contactsContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + CONTACTS,
    contentArr,
  };
}

export function fetchAllContentByType(type) {
  return async () => {
    const dispatch = useDispatch();
    dispatch(fetchContentStart());

    try {
      switch (type) {
        case 'sportTypes': {
          dispatch(getSportTypeContent(sportTypesSource));
          break;
        }
        case 'coaches': {
          dispatch(getCoachesContent(coachesSource));
          break;
        }
        case 'groupTypes': {
          dispatch(getGroupTypesContent(groupTypesSource));
          break;
        }
        case 'prices': {
          dispatch(getPricesContent(pricesSource));
          break;
        }
        case 'schedule': {
          dispatch(getScheduleContent(scheduleSource));
          break;
        }
        case 'sessions': {
          dispatch(getSessionsContent(sessionsSource));
          break;
        }
        case 'contacts': {
          dispatch(contactsContent(contactsSource));
          break;
        }
      }
    } catch (e) {
      dispatch(fetchContentError(e));
    }
  };
}

export function onSend(userName, userEmail, contact_number) {
  return async (dispatch) => {
    dispatch(fetchContentStart());

    try {
      dispatch(sendEmail(userName, userEmail, contact_number));
      dispatch(onClose());
    } catch (e) {
      dispatch(fetchContentError(e));
    }
  };
}

function sendEmail(from_name, userEmail, userPhone) {
  emailjs
    .sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { from_name, userEmail, userPhone },
      'YOUR_USER_ID'
    )
    .then(
      (result) => {
        window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export function onOpen() {
  return async (dispatch) => {
    dispatch(fetchContentStart());

    try {
      dispatch(onOpenContent());
    } catch (e) {
      dispatch(fetchContentError(e));
    }
  };
}

export function onClose() {
  return async (dispatch) => {
    dispatch(fetchContentStart());

    try {
      dispatch(onCloseContent());
    } catch (e) {
      dispatch(fetchContentError(e));
    }
  };
}
