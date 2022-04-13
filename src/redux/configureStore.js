import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';
import { missionReducer } from './missions/missions';
import dragonsReducer from './dragons/dragons';

const reducer = combineReducers({
  rocketReducer,
  missionReducer,
  dragonsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
