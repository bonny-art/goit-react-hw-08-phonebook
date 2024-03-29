import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions, authSelectors } from 'store/auth/authSlice';

import { contactsActions } from 'store/contacts/contactsSlice';
import { DivStyled, LoginStyled, TextStyled } from './UserMenu.styled';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.selectUserName);

  const logOutUser = () => {
    dispatch(authActions.logOutUserAction());
    dispatch(contactsActions.logOutUserAction());
  };

  return (
    <DivStyled>
      <TextStyled>Welcome, {user}</TextStyled>
      <Link to="/profile">Profile</Link>
      <LoginStyled type="button" onClick={logOutUser}>
        Logout
      </LoginStyled>
    </DivStyled>
  );
};
