import React from 'react';
import { Helmet } from 'react-helmet';

import { LoginForm } from 'components';
import { Header } from 'components/Section/Section.styled';

export const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Header>Log in to your account</Header>
      <LoginForm />
    </div>
  );
};
