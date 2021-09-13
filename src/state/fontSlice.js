import {createSlice} from '@reduxjs/toolkit';

const storage = typeof window === 'undefined' ? undefined : localStorage;

export const fontSlice = createSlice({
  name: 'font',
  initialState: {
    value: storage?.getItem('font') || 'marker',
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
      storage?.setItem('font', state.value);
    },
  },
});

export const {set} = fontSlice.actions;

export default fontSlice.reducer;
