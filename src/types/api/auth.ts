export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  access_token: string;
  access_token_expired_at: string;
  refresh_token_expired_at: string;
  user_id: string;
}

export interface ErrorLoginResponse {
  message?: string;
}
