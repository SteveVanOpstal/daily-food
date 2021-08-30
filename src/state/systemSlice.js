import {createSlice} from '@reduxjs/toolkit';

export const systemSlice = createSlice({
  name: 'system',
  initialState: {
    value: localStorage.getItem('system') === 'imperial' ? 'imperial' : 'metric',
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('system', state.value);
    },
  },
});

export const {set} = systemSlice.actions;

export default systemSlice.reducer;
