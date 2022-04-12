import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';
import dragonsReducer from './dragons/dragons';

const reducer = combineReducers({
  rocketReducer,
  dragonsReducer,
});

const configureStore = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default configureStore;
