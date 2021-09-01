import {createSlice} from '@reduxjs/toolkit';

export const unitsSlice = createSlice({
  name: 'units',
  initialState: {
    value: {},
  },
  reducers: {
    setUnit: (state, action) => {
      state.value[action.payload.id] = action.payload.unit;
    },
  },
});

export const {setUnit} = unitsSlice.actions;

export default unitsSlice.reducer;
