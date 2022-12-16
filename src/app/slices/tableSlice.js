import { createSlice } from '@reduxjs/toolkit';
import { counterGenerator } from '../../utils/helperFunctions';

const initialState = {
  instances: [
    { 'property 0': '', 'property 1': '' },
    { 'property 0': '', 'property 1': '' },
  ],
  schema: [{ name: 'property 0' }, { name: 'property 1' }],
  clipboard: { type: null, data: null },
  // The clipboard may contain: instances, properties
  // They are identified by the "type" filed
  propCounter: counterGenerator(2),
  title: 'New Table',
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    // Cell Manager
    updateDataCell: (state, action) => {
      const { instanceIndex, propertyIndex, data } = action.payload;
      state.instances[instanceIndex][propertyIndex] = data;
    },
    updateHeadingCell: (state, action) => {
      const { propertyIndex, data } = action.payload;
      state.schema[propertyIndex] = data;
    },

    // Instance Manager
    addInstance: (state) => {
      let newInstance = state.schema.map((property) => [property.name, '']);
      newInstance = Object.fromEntries(newInstance);
      state.instances.push(newInstance);
    },
    deleteInstance: (state, action) => {
      const { instanceIndex } = action.payload;
      state.instances.splice(instanceIndex, 1);
    },
    copyInstance: (state, action) => {
      const { instanceIndex } = action.payload;
      state.clipboard = {
        type: 'instance',
        data: state.instances[instanceIndex],
      };
    },
    cutInstance: (state, action) => {
      const { instanceIndex } = action.payload;
      // splice removes element from array and returns it as array
      let cutInstance = state.instances.splice(instanceIndex, 1)[0];
      state.clipboard = { type: 'instance', data: cutInstance };
    },
    pasteInstance: (state, action) => {
      if (state.clipboard.type !== 'instance') return;
      const { instanceIndex } = action.payload;
      state.instances.splice(instanceIndex, 0, state.clipboard);
    },
    duplicateInstance: (state, action) => {
      const { instanceIndex } = action.payload;
      state.instances.splice(
        instanceIndex + 1,
        0,
        state.instances[instanceIndex]
      );
    },

    // Property Manager
    addProperty: (state, action) => {},
    deleteProperty: (state, action) => {},
    copyProperty: (state, action) => {},
    cutProperty: (state, action) => {},
    pasteProperty: (state, action) => {},

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

  // Instance Manager
  addInstance,
  deleteInstance,
  copyInstance,
  cutInstance,
  pasteInstance,
  duplicateInstance,

  // Property Manager
  addProperty,
  deleteProperty,
  copyProperty,
  cutProperty,
  pasteProperty,

  // Table Manager
  updateTitle,
  importTable,
  exportTable,
  newTable,
} = tableSlice.actions;

const tableReducer = tableSlice.reducer;

export default tableReducer;
