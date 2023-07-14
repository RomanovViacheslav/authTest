import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../ui';
import { AuthPageAsync, MainPageAsync, NotFoundPageAsync } from '../page';
import { AuthHoc, PATHS, tokenActions, useAppDispatch, useAppSelector } from '../shared';
import { Loader } from '../components';

export const Router = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.token.isAuth);
  useEffect(() => {
    dispatch(tokenActions.initAuth());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={PATHS.MAIN} element={<MainLayout />}>
          <Route
            index
            element={
              <AuthHoc>
                <MainPageAsync />
              </AuthHoc>
          }
          />
          <Route
            path={PATHS.AUTH}
            element={!isAuth ? <AuthPageAsync /> : <Navigate to={PATHS.MAIN} />}
          />
          <Route path={PATHS.NOT_FOUND} element={<NotFoundPageAsync />} />
        </Route>
      </Routes>
    </Suspense>

  );
};
