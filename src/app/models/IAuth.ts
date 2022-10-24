export interface IAuth {
  token: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
  expirationDate: Date;
  isAuthenticated: boolean,
  password: string
}
