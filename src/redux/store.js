import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSlice from './users.slice';
import formStatusSlice from './formStatus.slice';

const rootReducer = combineReducers({
  employees: usersSlice,
  status: formStatusSlice,
});

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
