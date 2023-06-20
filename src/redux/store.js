import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users.slice';

export default configureStore({
  reducer: {
    employees: usersSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
