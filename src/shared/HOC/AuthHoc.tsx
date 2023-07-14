/* eslint-disable react/jsx-no-useless-fragment */
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../helpers/hooks';
import { PATHS, USER_LOCALSTORAGE_KEY } from '../constants';
import { Loader } from '../../components';

export const AuthHoc: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const isAuth = useAppSelector((state) => state.token.isAuth);

  useEffect(() => {
    setIsCheckingAuth(false);
  }, [isAuth]);

  if (isCheckingAuth) {
    return <Loader />;
  }

  if (isAuth) {
    return <>{children}</>;
  }

  return <Navigate to={PATHS.AUTH} />;
};
