import {createSlice} from '@reduxjs/toolkit';

const storage = typeof window === 'undefined' ? undefined : localStorage;

export const systemSlice = createSlice({
  name: 'system',
  initialState: {
    value: storage?.getItem('system') === 'imperial' ? 'imperial' : 'metric',
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
      storage?.setItem('system', state.value);
    },
  },
});

export const {set} = systemSlice.actions;

export default systemSlice.reducer;
