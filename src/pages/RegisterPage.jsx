import React from 'react';
import { Helmet } from 'react-helmet';

import { RegisterForm } from 'components';
import { Header } from 'components/Section/Section.styled';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration Page</title>
      </Helmet>
      <Header>Register a new account</Header>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
