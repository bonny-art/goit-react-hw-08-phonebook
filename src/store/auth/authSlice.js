import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import { authAPI } from '../../api';
import * as authHandlers from './authHandlers';

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
  isAuthenticated: false,
  user: null,
  token: '',
  errorMessage: '',
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: creator => ({
    signUpUserAction: creator.asyncThunk(
      async (body, { rejectWithValue }) => {
        try {
          return await authAPI.signUpUser(body);
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: authHandlers.handlePending,
        fulfilled: authHandlers.handleSignUpUser,
        rejected: authHandlers.handleRejected,
      }
    ),

    logInUserAction: creator.asyncThunk(
      async (body, { rejectWithValue }) => {
        try {
          return await authAPI.logInUser(body);
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: authHandlers.handlePending,
        fulfilled: authHandlers.handlelogInUser,
        rejected: authHandlers.handleRejected,
      }
    ),
  }),
});

export const authReducer = authSlice.reducer;
export const { signUpUserAction, logInUserAction } = authSlice.actions;
