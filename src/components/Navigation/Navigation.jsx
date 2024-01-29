import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'store/auth/authSlice';
import { NavLinkStyled, NavStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <NavStyled>
      <NavLinkStyled to={'/'}>Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to={'/contacts'}>Contacts</NavLinkStyled>}
    </NavStyled>
  );
};
