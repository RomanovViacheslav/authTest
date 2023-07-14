import { AxiosError } from 'axios';
import { BasicAgent } from './Basic.agent';
import { loginUserRequest, loginUserResponseSuccess } from '../model';

export class UserAgent extends BasicAgent {
  constructor() {
    super('https://dummyjson.com', {});
  }

  async loginUser(query: loginUserRequest): Promise<loginUserResponseSuccess> {
    try {
      const { data } = await this._http.post('/auth/login', query);
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response && 'message' in error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw new Error((error as Error).message);
    }
  }
}

export const UserAgentInstance = new UserAgent();
