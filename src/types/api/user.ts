export interface UserResponse {
  id: string;
  username: string;
  created: string;
  role: string;
}

export interface UserRequest {
  username: string;
  password: string;
  password_confirmation: string;
}
