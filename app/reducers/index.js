import { combineReducers } from 'redux';

import nav from './nav';
import todosReducer from './todos'
import usersReducer from './users'
import loginReducer from './login'
import eventReducer from './event'
const reducers = combineReducers({
  nav,
  todosReducer,
  usersReducer,
  loginReducer,
  eventReducer,
});

export default reducers;
