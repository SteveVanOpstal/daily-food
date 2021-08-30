import {createSlice} from '@reduxjs/toolkit';

export const fontSlice = createSlice({
  name: 'font',
  initialState: {
    value: localStorage.getItem('font') || 'cursive',
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('font', state.value);
    },
  },
});

export const {set} = fontSlice.actions;

export default fontSlice.reducer;
