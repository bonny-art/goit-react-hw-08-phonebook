import React from 'react';

import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import {
  ErrorMessageStyled,
  FormButton,
  FormField,
  FormInput,
  InputFormContainer,
} from 'components/PhoneInputForm/PhoneInputForm.styled';
import { authActions } from 'store/auth/authSlice';
import { useDispatch } from 'react-redux';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Write a valid e-mail')
    .required('E-mail is required'),
  password: yup.string().required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authActions.logInUserAction(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_STATE}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <InputFormContainer>
        <FormField>
          E-mail:
          <FormInput
            type="email"
            name="email"
            required
            placeholder="Enter your e-mail here"
          />
          <ErrorMessage name="email" component={ErrorMessageStyled} />
        </FormField>
        <FormField>
          E-mail:
          <FormInput
            type="password"
            name="password"
            required
            placeholder="Enter your password here"
          />
          <ErrorMessage name="password" component={ErrorMessageStyled} />
        </FormField>
        <FormButton type="submit">Login</FormButton>
      </InputFormContainer>
    </Formik>
  );
};
