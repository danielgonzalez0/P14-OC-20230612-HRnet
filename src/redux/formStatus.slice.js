import { createSlice } from '@reduxjs/toolkit';

export const formStatusSlice = createSlice({
  name: 'employees',
  initialState: {
    isSelected: false,
    isDeleted: false,
    isModified: false,
    isSuccessfull: false,
  },
  reducers: {
    setIsSelected: (state, action) => {
      return (state = { ...state, isSelected: action.payload });
    },
    setIsDeleted: (state, action) => {
      return (state = { ...state, isDeleted: action.payload });
    },
    setIsModified: (state, action) => {
      return (state = { ...state, isModified: action.payload });
    },
    setIsSuccessfull: (state, action) => {
      return (state = { ...state, isSuccessfull: action.payload });
    },
  },
});

export const { setIsSelected, setIsDeleted, setIsModified, setIsSuccessfull } =
  formStatusSlice.actions;

export default formStatusSlice.reducer;
