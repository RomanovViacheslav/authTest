import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserLoginEntity } from '../../../domains';
import { USER_LOCALSTORAGE_KEY } from '../../../shared/constants';
import { tokenActions } from '../../../shared';
import { UserAgentInstance } from '../../../http';
import { mapToExternalLoginUser } from '../helpers';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (data: UserLoginEntity, { dispatch }) => {
    try {
      const response = await UserAgentInstance.loginUser(mapToExternalLoginUser(data));
      localStorage.setItem(USER_LOCALSTORAGE_KEY, response.token);
      dispatch(tokenActions.setAuth());
      return response;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Ошибка');
    }
  },
);
