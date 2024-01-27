import React from 'react';
import { Helmet } from 'react-helmet';

import { LoginForm } from 'components';

export const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};
