import React from 'react';
import { useSelector } from 'react-redux';

import { AuthNav, Navigation, UserMenu } from 'components';
import { authSelectors } from 'store/auth/authSlice';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
