export interface loginUserRequest {
  username: string;
  password: string;
}

export interface loginUserResponseSuccess {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}
