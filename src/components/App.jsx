import React, { useEffect } from 'react';
// import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authActions, authSelectors } from 'store/auth/authSlice';

import { Layout, PrivateRoute, RestrictedRoute } from 'components';
import { ContactsPage, HomePage, LoginPage, RegisterPage } from 'pages';

// const LazyHomePage = lazy(() => import('../pages/HomePage'));
// const LazyRegisterPage = lazy(() => import('../pages/RegisterPage'));
// const LazyLoginPage = lazy(() => import('../pages/LoginPage'));
// const LazyContactsPage = lazy(() => import('../pages/ContactsPage'));

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
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    )
  );

  // return (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<LazyHomePage />} />
  //       <Route path="/register" element={<LazyRegisterPage />} />
  //       <Route path="/login" element={<LazyLoginPage />} />
  //       <Route path="/contacts" element={<LazyContactsPage />} />
  //     </Route>
  //   </Routes>
  // );
};
