import React from 'react';
import { useSelector } from 'react-redux';

import { AuthNav, Navigation, UserMenu } from 'components';
import { selectIsLoggedIn } from 'store/auth/authSlice';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
