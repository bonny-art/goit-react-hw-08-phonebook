import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from '../store';
import { authReducer } from './auth/authSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

const presistedAuthReducer = persistReducer(persistConfig, authReducer);

const reducer = {
  filter: filterReducer,
  contacts: contactsReducer,
  auth: presistedAuthReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
