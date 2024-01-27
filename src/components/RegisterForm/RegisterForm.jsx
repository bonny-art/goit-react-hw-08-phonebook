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
import { signUpUserAction } from 'store/auth/authSlice';
import { useDispatch } from 'react-redux';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const nameRegex = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegex, 'Name must contain only letters')
    .required('Name is required'),
  email: yup
    .string()
    .matches(emailRegex, 'Write a valid e-mail')
    .required('E-mail is required'),
  password: yup
    .string()
    .matches(
      passwordRegex,
      'A password must contain at least 8 characters, including Latin letters and digits'
    )
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(signUpUserAction(values));
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
          Name:
          <FormInput
            type="text"
            name="name"
            required
            placeholder="Enter your name here"
          />
          <ErrorMessage name="name" component={ErrorMessageStyled} />
        </FormField>
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
        <FormButton type="submit">Register</FormButton>
      </InputFormContainer>
    </Formik>
  );
};
