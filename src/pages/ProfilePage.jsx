import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from 'store/auth/authSlice';

export const ProfilePage = () => {
  const { name, email, avatarUrl } = useSelector(authSelectors.selectUser);

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      {/* Використання тернарного оператора для визначення URL аватара */}
      <img src={avatarUrl} alt="avatar" />
      <Link to="update">Update profile</Link>
    </div>
  );
};
