import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from '../store';
import { authReducer } from './auth/authSlice';

const reducer = {
  filter: filterReducer,
  contacts: contactsReducer,
  auth: authReducer,
};

// const customMiddleware = store => {
//   return next => {
//     return action => {
//       if (typeof action === 'function') {
//         action(store.dispatch);
//         return;
//       }
//       return next(action);
//     };
//   };
// };

export const store = configureStore({
  reducer,
  //   middleware: () => [customMiddleware],
});
