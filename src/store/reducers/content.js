import { act } from '@testing-library/react';
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
} from '../actions/content';

const initialState = {
  loading: false,
  error: null,
  results: {},
  isFinished: false,
  visibleModel: false,
};

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_CONTENTS + START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ALL_CONTENTS + SPORT_TYPES:
      return {
        ...state,
        loading: false,
        sportTypesArr: action.contentArr,
      };
    case LOAD_ALL_CONTENTS + SPORT_TYPES_ITEM:
      return {
        ...state,
        loading: false,
        sportTypeItemsArr: action.contentArr,
      };
    case LOAD_ALL_CONTENTS + GROUP_TYPES:
      return {
        ...state,
        loading: false,
        groupTypesArr: action.contentArr,
      };
    case LOAD_ALL_CONTENTS + COACHES:
      return {
        ...state,
        loading: false,
        coachesArr: action.contentArr,
      };
    case LOAD_ALL_CONTENTS + PRICES:
      return {
        ...state,
        loading: false,
        pricesArr: action.contentArr,
      };
    case LOAD_ALL_CONTENTS + SCHEDULE:
      return {
        ...state,
        loading: false,
        scheduleArr: action.contentArr,
      };
    case LOAD_ALL_CONTENTS + SESSIONS:
      return {
        ...state,
        loading: false,
        sessionArr: action.contentArr,
      };
    case LOAD_ALL_CONTENTS + ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case OPEN_MODAL_VIEW:
      return {
        ...state,
        loading: false,
        visibleModel: true,
      };
    case CLOSE_MODAL_VIEW:
      return {
        ...state,
        loading: false,
        visibleModel: false,
      };
    case LOAD_ALL_CONTENTS + CONTACTS:
      return {
        ...state,
        loading: false,
        contacts: action.contentArr,
      };
    case SEND_USER_INFO:
      return {
        ...state,
        loading: false,
        userName: action.userName,
        userEmail: action.userEmail,
        userPhone: action.userPhone,
      };
    default:
      return state;
  }
}
