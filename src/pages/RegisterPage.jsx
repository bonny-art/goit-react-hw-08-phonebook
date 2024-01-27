import React from 'react';
import { Helmet } from 'react-helmet';

import { RegisterForm } from 'components';

export const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration Page</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};
