import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from 'store/auth/authSlice';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      {isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}
    </nav>
  );
};
