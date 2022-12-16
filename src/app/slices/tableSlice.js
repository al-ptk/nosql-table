import { createSlice } from '@reduxjs/toolkit';
import { counterGenerator } from '../../utils/helperFunctions';

const initialState = {
  instances: [
    { 'property 0': '', 'property 1': '' },
    { 'property 0': '', 'property 1': '' },
  ],
  schema: ['property 0', 'property 1'],
  clipboard: {},
  propCounter: counterGenerator(2),
  title: 'New Table',
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    // Cell Manager
    updateDataCell: (state, action) => {
      const { rowIndex, colIndex, data } = action.payload;
      state.instances[rowIndex][colIndex] = data;
    },
    updateHeadingCell: (state, action) => {
      const { colIndex, data } = action.payload;
      state.schema[colIndex] = data;
    },

    // Row Manager
    addRow: (state, action) => {},
    deleteRow: (state, action) => {},
    copyRow: (state, action) => {},
    cutRow: (state, action) => {},
    pasteRow: (state, action) => {},
    duplicateRow: (state, action) => {},

    // Column Manager
    addColumn: (state, action) => {},
    deleteColumn: (state, action) => {},
    copyColumn: (state, action) => {},
    cutColumn: (state, action) => {},
    pasteColumn: (state, action) => {},

    // Table Manager
    updateTitle: (state, action) => {},
    importTable: (state, action) => {},
    exportTable: (state, action) => {},
    newTable: (state, action) => {},
  },
});

export const {
  //Cell Manager
  updateDataCell,
  updateHeadingCell,

  // Row Manager
  addRow,
  deleteRow,
  copyRow,
  cutRow,
  pasteRow,
  duplicateRow,

  // Column Manager
  addColumn,
  deleteColumn,
  copyColumn,
  cutColumn,
  pasteColumn,

  // Table Manager
  updateTitle,
  importTable,
  exportTable,
  newTable,
} = tableSlice.actions;

const tableReducer = tableSlice.reducer;

export default tableReducer;
