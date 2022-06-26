import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NamesModal } from 'types/modals';

type Modals = {
  [k in NamesModal]?: boolean;
};

export interface ModalsState {
  modals: Modals;
}

const initialState: ModalsState = {
  modals: {},
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    handleShowModal(state, { payload }: PayloadAction<NamesModal>) {
      state.modals = {
        ...state.modals,
        [payload]: true,
      };
    },
    handleHideModal(state, { payload }: PayloadAction<NamesModal>) {
      state.modals = {
        ...state.modals,
        [payload]: false,
      };
    },
    handleHideAllModals(state) {
      const keys = Object.keys(state.modals);
      state.modals = keys.reduce((accumulator: Modals, key) => {
        return {
          ...accumulator,
          [key]: false,
        };
      }, {});
    },
  },
});

export const { handleShowModal, handleHideModal, handleHideAllModals } =
  modalsSlice.actions;
export default modalsSlice.reducer;
