import { DivStyled } from 'components/UserMenu/UserMenu.styled';
import React from 'react';
import { LinkStyled, LoginStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <DivStyled>
      <LinkStyled to="/register">Register</LinkStyled>
      <LoginStyled to="/login">Login</LoginStyled>
    </DivStyled>
  );
};
