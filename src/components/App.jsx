import React, { useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authActions, authSelectors } from 'store/auth/authSlice';

import { Layout, PrivateRoute, RestrictedRoute } from 'components';
// import { ContactsPage, HomePage, LoginPage, RegisterPage } from 'pages';
import { ProfilePage } from '../pages/ProfilePage';
import { UpdateProfilePage } from 'pages/UpdateProfilePage';

const LazyHomePage = lazy(() => import('../pages/HomePage'));
const LazyRegisterPage = lazy(() => import('../pages/RegisterPage'));
const LazyLoginPage = lazy(() => import('../pages/LoginPage'));
const LazyContactsPage = lazy(() => import('../pages/ContactsPage'));
// const LazyProfilePage = lazy(() => import('../pages/ProfilePage'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(authActions.getCurrentUserAction());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LazyHomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LazyRegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LazyLoginPage />}
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<LazyContactsPage />}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
            }
          />

          <Route
            path="/profile/update"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<UpdateProfilePage />}
              />
            }
          />
        </Route>
      </Routes>
    )
  );
};
