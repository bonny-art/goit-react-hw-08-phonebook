export const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const handleFetchContacts = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = payload;
  state.contacts.error = '';
};

export const handleAddContact = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(payload);
};

export const handleDeleteContact = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(c => c.id !== payload.id);
};

export const handleLogOutUser = state => {
  state.contacts.items = [];
  state.contacts.isLoading = false;
  state.contacts.error = '';
};

export const handleContacts = state => state.contacts.items;
export const handleIsLoading = state => state.contacts.isLoading;
export const handleError = state => state.contacts.error;
