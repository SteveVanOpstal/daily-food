import {configureStore} from '@reduxjs/toolkit';
import systemReducer from './systemSlice';
import darkModeReducer from './darkModeSlice';
import peopleReducer from './peopleSlice';
import fontReducer from './fontSlice';
import unitsReducer from './unitsSlice';

export default configureStore({
  reducer: {
    system: systemReducer,
    darkMode: darkModeReducer,
    people: peopleReducer,
    font: fontReducer,
    units: unitsReducer,
  },
});
