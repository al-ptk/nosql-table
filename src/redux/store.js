import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './slices/tableSlice';
import uiKnobsReducer from './slices/uiKnobsSlice';

// Would've used zustand instead of redux, but redux can get me a job.

const store = configureStore({
  reducer: {
    table: tableReducer,
    uiKnobs: uiKnobsReducer,
  },
});

export default store;
