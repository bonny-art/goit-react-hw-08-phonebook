import { createSlice } from '@reduxjs/toolkit';

const handleFilter = state => state.filter;

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
  selectors: {
    getFilter: handleFilter,
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilterAction } = filterSlice.actions;
export const { getFilter } = filterSlice.selectors;
