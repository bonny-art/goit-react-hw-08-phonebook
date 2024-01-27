import { createSlice } from '@reduxjs/toolkit';

import * as filterHandlers from './filterHandlers';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    changeFilterAction: filterHandlers.handleChangeFiler,
  },

  selectors: {
    getFilter: filterHandlers.handleFilter,
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilterAction } = filterSlice.actions;
export const { getFilter } = filterSlice.selectors;
