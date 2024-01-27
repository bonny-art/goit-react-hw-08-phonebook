import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import { authAPI } from '../../api';
import * as authHandlers from './authHandlers';

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
  isLoggedIn: false,
  user: null,
  token: '',
  error: '',
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: creator => ({
    signUpUserAction: creator.asyncThunk(
      async (body, { rejectWithValue }) => {
        try {
          const data = await authAPI.signUpUser(body);
          authAPI.token.set(data.token);
          return data;
        } catch (error) {
          return rejectWithValue(error.response.data.message);
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
          const data = await authAPI.logInUser(body);
          authAPI.token.set(data.token);
          return data;
        } catch (error) {
          return rejectWithValue(error.response.data.message);
        }
      },
      {
        pending: authHandlers.handlePending,
        fulfilled: authHandlers.handlelogInUser,
        rejected: authHandlers.handleRejected,
      }
    ),

    logOutUserAction: creator.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const data = await authAPI.logOutUser();
          authAPI.token.unset();
          return data;
        } catch (error) {
          return rejectWithValue(error.response.data.message);
        }
      },
      {
        pending: authHandlers.handlePending,
        fulfilled: authHandlers.handlelogOutUser,
        rejected: authHandlers.handleRejected,
      }
    ),
  }),
  selectors: {
    selectIsLoggedIn: authHandlers.handleIsLoggedIn,
    selectUserName: authHandlers.handleUserName,
  },
});

export const authReducer = authSlice.reducer;
export const { signUpUserAction, logInUserAction, logOutUserAction } =
  authSlice.actions;
export const { selectIsLoggedIn, selectUserName } = authSlice.selectors;
