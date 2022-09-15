import {createSlice} from '@reduxjs/toolkit';

const storage = typeof window === 'undefined' ? undefined : localStorage;

export const darkModeSlice = createSlice({
  name: 'system',
  initialState: {
    value: storage?.getItem('darkMode') === 'true' ? true : false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
      storage?.setItem('darkMode', state.value);
    },
  },
});

export const {toggle} = darkModeSlice.actions;

export default darkModeSlice.reducer;
