import React from 'react';
import { useSelector } from 'react-redux';

import { AuthNav, Navigation, UserMenu } from 'components';
import { authSelectors } from 'store/auth/authSlice';
import { CointainerStyled, HeaderStyled } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <HeaderStyled>
      <CointainerStyled>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </CointainerStyled>
    </HeaderStyled>
  );
};
