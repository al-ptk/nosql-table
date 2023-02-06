import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVertical: false,
  modal: null,
  user: null,
};

const uiKnobsSlice = createSlice({
  name: 'uiKnobs',
  initialState,
  reducers: {
    toggleIsVertical: (state) => {
      state.isVertical = !state.isVertical;
    },
    setModal: (state, action) => {
      const newModal = action.payload.modal ?? null;
      state.modal = newModal;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    }
  },
});

export const { toggleIsVertical, setModal, setUser } =
  uiKnobsSlice.actions;

export default uiKnobsSlice.reducer;
