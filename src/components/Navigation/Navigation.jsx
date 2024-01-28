import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from 'store/auth/authSlice';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      {isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}
    </nav>
  );
};
