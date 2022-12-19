import { createSlice } from '@reduxjs/toolkit';
import { getAllKeys } from '../../utils/helperFunctions';

/*
  Some conceptual definitions:

  Table: Data type meant to encapsulate two other types (instances and schema). A table is a json file to be used by other appplications, like database-populating scripts.
  
  Schema: Describes the name and type of all possible fields found in each element of instances. Types can be primitives, like strings, date and numbers; composed, like arrays and objects; or even custom, like user-made widgets.

  Instances: An array of objects that populate the table based on the fields each instance possesses. Instance here is can be read the same as "instance of an object." Not all instances have all schema properties, but schema properties describe all possible fields of an instance.
*/

const initialState = {
  instances: [
    { 'property 0': '', 'property 1': '' },
    { 'property 0': '', 'property 1': '' },
  ],
  schema: [{ name: 'property 0' }, { name: 'property 1' }],
  // The clipboard may contain: instances, properties
  // They are identified by the "type" filed
  clipboard: { type: null, data: null },
  title: 'New Table',
  selected: { type: null, index: null },
};

const tableSlice = createSlice({
  name: 'table',
  initialState,

  reducers: {
    // Cell Manager
    updateDataCell: (state, action) => {
      const { instanceIndex, propertyName, data } = action.payload;
      state.instances[instanceIndex][propertyName] = data;
    },
    updateHeadingCell: (state, action) => {
      const { propertyIndex, data } = action.payload;
      const oldProp = state.schema[propertyIndex].name;
      const newProp = data;
      state.schema[propertyIndex].name = data;
      state.instances.forEach((instance) => {
        instance[newProp] = instance[oldProp];
        delete instance[oldProp];
      });
    },

    // Instance Manager
    addInstance: (state, action) => {
      let { targetIndex } = action?.payload;
      targetIndex = targetIndex ?? state.instances.length - 1;
      let newInstance = state.schema.map((property) => [property.name, '']);
      newInstance = Object.fromEntries(newInstance);
      state.instances.splice(targetIndex, 0, newInstance);
    },
    deleteInstance: (state, action) => {
      const { instanceIndex } = action.payload;
      state.instances.splice(instanceIndex, 1);
    },
    swapInstances: (state, action) => {
      const { selectedIndex, targetIndex } = action.payload;
      if (targetIndex < 0 || targetIndex >= state.instances.length) return;
      [state.instances[selectedIndex], state.instances[targetIndex]] = [
        state.instances[targetIndex],
        state.instances[selectedIndex],
      ];
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
    addProperty: (state, action) => {
      let { propertyIndex } = action?.payload;
      propertyIndex = propertyIndex || state.schema.length;
      const propertyName = `property ${state.schema.length}`;
      state.instances.map((instance) => (instance[propertyName] = ''));
      state.schema.splice(propertyIndex, 0, {
        type: 'any',
        name: propertyName,
      });
    },
    deleteProperty: (state, action) => {
      const { propertyIndex } = action.payload;
      state.instances.forEach(
        (instance) => delete instance[state.schema[propertyIndex].name]
      );
      state.schema.splice(propertyIndex, 1);
    },
    swapProperties: (state, action) => {
      const { selectedIndex, targetIndex } = action.payload;
      if (targetIndex < 0 || targetIndex >= state.schema.length) return;
      [state.schema[selectedIndex], state.schema[targetIndex]] = [
        state.schema[targetIndex],
        state.schema[selectedIndex],
      ];
    },
    copyProperty: (state, action) => {
      const { propertyIndex } = action.payload;
      const propertyName = state.schema[propertyIndex].name;
      const propertySlice = state.instances.map(
        (instance) => instance[propertyName]
      );
      state.clipboard = {
        type: 'property',
        data: propertySlice,
      };
    },
    cutProperty: (state, action) => {
      const { propertyIndex } = action.payload;
      const property = state.schema[propertyIndex];
      const propertySlice = state.instances.map((instance) => {
        // propertySlice is a copy of all instances' values
        // under same property name
        let value = instance[property.name];
        delete instance[property.name];
        return value;
      });
      state.schema.splice(propertyIndex, 1);
      state.clipboard = {
        type: 'property',
        data: {
          property,
          propertySlice,
        },
      };
    },
    pasteProperty: (state, action) => {
      if (state.clipboard.type !== 'property') return;
      const { propertyIndex } = action.payload;
      const { property, name, propertySlice } = state.clipboard.data;
      this.instances.forEach((instance, instanceIndex) => {
        instance[(property, name)] = propertySlice[instanceIndex];
      });
      this.schema.splice(propertyIndex, 0, property);
    },
    repeatToAllInstances: (state, action) => {
      const { value, propertyIndex } = action.payload;
      const propName = state.schema[propertyIndex].name;
      state.instances.forEach((instance) => {
        instance[propName] = value;
      });
    },

    // Table Manager
    updateTitle: (state, action) => {
      const { newTitle } = action.payload;
      state.title = newTitle;
    },
    importTable: (state, action) => {
      const { newTable, fileName } = action.payload;
      state.instances = newTable?.instances ?? newTable;
      state.schema = newTable?.schema ?? generateSchema(newTable);
      state.title = newTable?.title ?? fileName;
      state.clipboard = { type: null, data: null };
    },
    newTable: (state) => {
      state = initialState;
    },
    setSelected: (state, action) => {
      const { index, type } = action.payload;
      // I deestructure the payload before assinging it to state
      // in order to be more readable.
      state.selected = { index, type };
    },
  },
});

export const {
  //Cell Manager
  updateDataCell,
  updateHeadingCell,

  // Instance Manager
  addInstance,
  deleteInstance,
  swapInstances,
  copyInstance,
  cutInstance,
  pasteInstance,
  duplicateInstance,

  // Property Manager
  addProperty,
  deleteProperty,
  swapProperties,
  copyProperty,
  cutProperty,
  pasteProperty,
  repeatToAllInstances,

  // Table Manager
  updateTitle,
  importTable,
  makeExportFile,
  newTable,
  setSelected,
} = tableSlice.actions;

export default tableSlice.reducer;

function generateSchema(instances) {
  const propArray = getAllKeys(instances);
  const schema = propArray.map((prop) => {
    return { name: prop, type: 'string' };
  });
  return schema;
}
