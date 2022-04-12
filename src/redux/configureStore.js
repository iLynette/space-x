import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dragonsReducer from './dragons/dragons';

const reducer = combineReducers({
  dragonsReducer,
});

const configureStore = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default configureStore;
