export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleSignUpUser = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isAuthenticated = true;
};

export const handlelogInUser = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isAuthenticated = true;
};
