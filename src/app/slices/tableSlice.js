import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    instances: [],
    schema: [],
  },
  reducers: {},
});

export const {} = tableSlice.actions;

const tableReducer = tableSlice.reducer;

export default tableReducer;
