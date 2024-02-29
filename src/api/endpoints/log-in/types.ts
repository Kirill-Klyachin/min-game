export type LoginParams = {
  login: string;
  password: string;
};

export type LoginResponse = {
  id: number;
};

export type LogoutParams = {
  id: number;
};

export type LogoutResponse = {
  message: string;
};
