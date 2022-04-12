import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
    rocketReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk),
);

export default store;