import {
  LOAD_ALL_CONTENTS,
  SPORT_TYPES,
  GROUP_TYPES,
  SPORT_TYPES_ITEM,
  COACHES,
  PRICES,
  START,
  ERROR,
} from './content';
import axios from 'axios';

import source from '../source/source.json';

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

export function fetchAllContentByType(type, contentArr, name = null) {
  return async (dispatch) => {
    dispatch(fetchContentStart());

    try {
      contentArr = source;

      contentArr = contentArr.find((item) => item.type === type);

      switch (type) {
        case 'sportTypes': {
          if (name) {
            contentArr = contentArr.contents.find(
              (item) => item.name.toLowerCase() === name.toLowerCase()
            );
            dispatch(getSportTypeItemContent(contentArr));
          }
          dispatch(getSportTypeContent(contentArr));
          break;
        }
        case 'coaches': {
          dispatch(getCoachesContent(contentArr));
          break;
        }
        case 'groupTypes': {
          dispatch(getGroupTypesContent(contentArr));
          break;
        }
        case 'prices': {
          dispatch(getPricesContent(contentArr));
          break;
        }
      }
    } catch (e) {
      dispatch(fetchContentError(e));
    }
  };
}
