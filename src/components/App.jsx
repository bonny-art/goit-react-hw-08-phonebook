import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components';
import { ContactsPage, HomePage, LoginPage, RegisterPage } from 'pages';
import { useDispatch } from 'react-redux';
import { authActions } from 'store/auth/authSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.getCurrentUserAction());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
