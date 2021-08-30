import {createSlice} from '@reduxjs/toolkit';

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    value: parseInt(localStorage.getItem('people'), 10) || 2,
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('people', state.value);
    },
  },
});

export const {set} = peopleSlice.actions;

export default peopleSlice.reducer;
