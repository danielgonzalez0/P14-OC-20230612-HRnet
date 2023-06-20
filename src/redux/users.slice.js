import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    getUsers: (state, action) => {
      return (state = action.payload);
    },
    addUser: (state, action) => {
      return (state = [...state, action.payload]);
    },
  },
});

export const { getUsers, addUser } = usersSlice.actions;

export default usersSlice.reducer;
