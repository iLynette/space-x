import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';
import { missionReducer } from './missions/missions';

const reducer = combineReducers({
  rocketReducer,
  missionReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
