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
    fetchContactsAction: creator.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          return await contactsAPI.getContacts();
        } catch (error) {
          console.log('🚀 ~ error:', error);
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
    getContacts: contactsHandlers.handleContacts,
    getIsLoading: contactsHandlers.handleIsLoading,
    getError: contactsHandlers.handleError,
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { fetchContactsAction, addContactAction, deleteContactAction } =
  contactsSlice.actions;
export const { getContacts, getIsLoading, getError } = contactsSlice.selectors;
