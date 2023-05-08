export interface Users {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
  address?: string;
  city?: string;
  country?: string;
  phone?: string;

}

export interface ResUsers {
  success?: boolean;
  users: Users[]
}

export interface ResOneUser {
  success?: boolean;
  users: Users;
}
