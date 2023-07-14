import { UserLoginEntity } from '../../../domains';
import { loginUserRequest } from '../../../http';

export const mapToExternalLoginUser = (data: UserLoginEntity): loginUserRequest => ({
  username: data.name,
  password: data.password,
});
