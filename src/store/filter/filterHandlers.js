export const handleFilter = state => state.filter;

export const handleChangeFiler = (state, { payload }) => {
  state.filter = payload;
};
