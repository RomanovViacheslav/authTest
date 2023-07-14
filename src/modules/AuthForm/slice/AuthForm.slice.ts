import { createSlice } from '@reduxjs/toolkit';
import { AuthFormState } from '../AuthFrom.types';

import { loginUser } from './AuthFrom.thunk';

const initialState: AuthFormState = {
  isLoading: false,
  error: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginReset: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Ошибка';
      });
  },
});

export default loginSlice.reducer;
