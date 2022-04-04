import {LOAD_ALL_CONTENTS, SPORT_TYPES, GROUP_TYPES, COACHES, PRICES, START, ERROR} from '../actions/content';
import {OrderedMap, Record} from 'immutable'

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
})

const defaultState = new ReducerState()

const initialState = {
  loading: false,
  error: null,
  results: {},
  isFinished: false
}


export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_CONTENTS + START:
      return {
        ...state, loading: true
      }
    case LOAD_ALL_CONTENTS + SPORT_TYPES:
      return {
        ...state, loading: false, sportTypesArr: action.contentArr
      }
    case LOAD_ALL_CONTENTS + GROUP_TYPES:
      return {
        ...state, loading: false, groupTypesArr: action.contentArr
      }
    case LOAD_ALL_CONTENTS + COACHES:
      return {
        ...state, loading: false, coachesArr: action.contentArr
      }
    case LOAD_ALL_CONTENTS + PRICES:
      return {
        ...state, loading: false, pricesArr: action.contentArr
      }
    case LOAD_ALL_CONTENTS + ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    default:
        return state
    }
}