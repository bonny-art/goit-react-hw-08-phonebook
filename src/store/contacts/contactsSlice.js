import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';
import { contactsAPI } from '../../api';
import * as contactsHandlers from './contactsHandlers';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: '',
  },
};

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: creator => ({
    logOutUserAction: creator.reducer(contactsHandlers.handleLogOutUser),

    fetchContactsAction: creator.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const data = await contactsAPI.getContacts();
          return data;
        } catch (error) {
          return rejectWithValue(error.response.data.message);
        }
      },
      {
        pending: contactsHandlers.handlePending,
        fulfilled: contactsHandlers.handleFetchContacts,
        rejected: contactsHandlers.handleRejected,
      }
    ),

    addContactAction: creator.asyncThunk(
      async (contact, { rejectWithValue }) => {
        try {
          return await contactsAPI.postContact(contact);
        } catch (error) {
          return rejectWithValue(error.response.data.message);
        }
      },
      {
        pending: contactsHandlers.handlePending,
        fulfilled: contactsHandlers.handleAddContact,
        rejected: contactsHandlers.handleRejected,
      }
    ),

    deleteContactAction: creator.asyncThunk(
      async (id, { rejectWithValue }) => {
        try {
          return await contactsAPI.deleteContact(id);
        } catch (error) {
          return rejectWithValue(error.response.data.message);
        }
      },
      {
        pending: contactsHandlers.handlePending,
        fulfilled: contactsHandlers.handleDeleteContact,
        rejected: contactsHandlers.handleRejected,
      }
    ),
  }),
  selectors: {
    selectContacts: contactsHandlers.handleContacts,
    selectIsLoading: contactsHandlers.handleIsLoading,
    selectError: contactsHandlers.handleError,
  },
});

export const contactsReducer = contactsSlice.reducer;

export const contactsActions = contactsSlice.actions;
export const contactsSelectors = contactsSlice.selectors;
