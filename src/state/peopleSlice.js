import {createSlice} from '@reduxjs/toolkit';

const storage = typeof window === 'undefined' ? undefined : localStorage;

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    value: parseInt(storage?.getItem('people'), 10) || 2,
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
      storage?.setItem('people', state.value);
    },
  },
});

export const {set} = peopleSlice.actions;

export default peopleSlice.reducer;
