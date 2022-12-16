import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './slices/tableSlice';

// Would've used zustand instead of redux, but redux 

const store = configureStore({
  reducers: {
    table: tableReducer,
  },
});

export default store;
