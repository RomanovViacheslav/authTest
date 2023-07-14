import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../modules';
import { tokenSlice } from '../shared';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    token: tokenSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
