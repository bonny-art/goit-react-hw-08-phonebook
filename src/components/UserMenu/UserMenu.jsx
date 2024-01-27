import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logOutUserAction, selectUserName } from 'store/auth/authSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUserName);

  return (
    <div>
      <p>Welcome, {user}</p>
      <button type="button" onClick={() => dispatch(logOutUserAction())}>
        Logout
      </button>
    </div>
  );
};
