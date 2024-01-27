import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components';
import { ContactsPage, HomePage, LoginPage, RegisterPage } from 'pages';

export const App = () => {
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
