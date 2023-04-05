export type Admin = {
  id?: number;
  email: string;
  password: string;
  status?: boolean;
};

export type State = {
  admin: Admin | {};
  error: undefined | string;
};

export type Message = {
  message: string;
};
