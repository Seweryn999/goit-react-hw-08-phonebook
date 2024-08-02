import React, { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import SharedLayout from './sharedLayout/SharedLayout';
import PrivateRoute from 'js/PrivateRoute';
import RestrictedRoute from 'js/RestricredRoute';
import { useDispatch } from 'react-redux';
import opAuth from 'redux/auth/opAuth';
import { useAuthRoute } from 'hook/useAuthRoute';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

const Appv2 = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuthRoute();

  useEffect(() => {
    const getUser = async () => await dispatch(opAuth.refresh());
    getUser().catch(console.error);
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user</b>
  ) : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<SharedLayout />}>
        <Route index element={<Welcome />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<Register />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<Login />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<Contacts />}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/goit-react-hw-08-phonebook" />} />
    </Routes>
  );
};

export default Appv2;
