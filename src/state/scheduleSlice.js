import {createSlice} from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {
    value: undefined,
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {set} = scheduleSlice.actions;

export default scheduleSlice.reducer;
