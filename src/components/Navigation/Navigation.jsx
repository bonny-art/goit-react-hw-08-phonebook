import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = false;
  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      {isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}
    </nav>
  );
};
