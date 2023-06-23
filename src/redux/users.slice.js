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
    editUser: (state, action) => {
      state = state.map((employee) => {
        if (employee.id === action.payload.id) {
          employee.first_name = action.payload.first_name;
          employee.last_name = action.payload.last_name;
          employee.dateOfBirth = action.payload.dateOfBirth;
          employee.startDate = action.payload.startDate;
          employee.department = action.payload.department;
          employee.address = action.payload.address;
          employee.city = action.payload.city;
          employee.state = action.payload.state;
          employee.zipCode = action.payload.zipCode;
          return employee;
        } else {
          return employee;
        }
      });
    },
  },
});

export const { getUsers, addUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
