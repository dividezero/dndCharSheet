import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appInfoReducer from './reducers/appInfo';
import characterReducer from './reducers/characterSheet';

const defaultState = {
  characterSheet: {
    character: { abilityScore: [], health: {} },
  },
};

const store = createStore(
  combineReducers({
    appInfo: appInfoReducer,
    characterSheet: characterReducer,
  }),
  defaultState,
  applyMiddleware(thunk),
);

export default store;
