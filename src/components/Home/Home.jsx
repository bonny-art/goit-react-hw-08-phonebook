import React from 'react';
import heroImg from '../../images/hero.webp';
import { useSelector } from 'react-redux';
import { authSelectors } from 'store/auth/authSlice';
import { AuthNav } from 'components';
import {
  AuthNavWrapper,
  ItemsStyled,
  TextStyled,
  TitleStyled,
} from './Home.styled';

export const Home = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <div>
      <img src={heroImg} alt="old telephone and old books" />
      <TitleStyled>PhoneBook</TitleStyled>
      <TextStyled>
        Welcome to PhoneBook, the ultimate app for managing your contacts.
      </TextStyled>
      <TextStyled>With PhoneBook, you can:</TextStyled>
      <ul>
        <ItemsStyled>
          Store and organize your contacts in a convenient and secure way.
        </ItemsStyled>
        <ItemsStyled>
          Sync your contacts across all your devices and access them anytime,
          anywhere.
        </ItemsStyled>
        <ItemsStyled>Search for contacts by name.</ItemsStyled>
        <ItemsStyled>Add, or delete contacts easily and quickly.</ItemsStyled>
        <TextStyled>
          PhoneBook is more than just a phone book. It is a smart and reliable
          app that helps you stay connected with your friends, family, and
          colleagues. Register to PhoneBook today and enjoy the benefits of
          having a powerful and user-friendly app for your communication needs.
        </TextStyled>
      </ul>
      <AuthNavWrapper>{!isLoggedIn && <AuthNav />}</AuthNavWrapper>
    </div>
  );
};
