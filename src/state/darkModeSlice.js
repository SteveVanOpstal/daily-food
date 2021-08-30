import {createSlice} from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'system',
  initialState: {
    value: localStorage.getItem('darkMode') === '1' ? true : false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
      localStorage.setItem('darkMode', state.value);
    },
  },
});

export const {toggle} = darkModeSlice.actions;

export default darkModeSlice.reducer;
