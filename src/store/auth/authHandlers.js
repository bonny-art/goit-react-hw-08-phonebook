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
  state.isLoggedIn = true;
};

export const handlelogInUser = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handlelogOutUser = state => {
  state.isLoading = false;
  state.user = null;
  state.token = '';
  state.isLoggedIn = false;
};

export const handleIsLoggedIn = state => state.isLoggedIn;
export const handleUserName = state => state.user.name;
