import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVertical: false,
  showPreview: false,
  modal: null,
};

const uiKnobsSlice = createSlice({
  name: 'uiKnobs',
  initialState,
  reducers: {
    togglePreview: (state) => {
      state.showPreview = !state.showPreview;
    },
    toggleIsVertical: (state) => {
      state.isVertical = !state.isVertical;
    },
    setModal: (state, action) => {
      const newModal = action.payload.modal ?? null;
      state.modal = newModal;
    },
  },
});

export const { togglePreview, toggleIsVertical, setModal } =
  uiKnobsSlice.actions;

export default uiKnobsSlice.reducer;
