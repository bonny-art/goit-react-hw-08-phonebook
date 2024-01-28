import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions, authSelectors } from 'store/auth/authSlice';

import { contactsActions } from 'store/contacts/contactsSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.selectUserName);

  const logOutUser = () => {
    dispatch(authActions.logOutUserAction());
    dispatch(contactsActions.logOutUserAction());
  };

  return (
    <div>
      <p>Welcome, {user}</p>
      <button type="button" onClick={() => logOutUser()}>
        Logout
      </button>
    </div>
  );
};
