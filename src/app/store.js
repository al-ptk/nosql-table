import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './slices/tableSlice';

// Would've used zustand instead of redux, but redux can get me a job.

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

export default store;
