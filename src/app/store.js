import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './slices/tableSlice';

const store = configureStore({
  reducers: {
    table: tableReducer,
  },
});

export default store;
