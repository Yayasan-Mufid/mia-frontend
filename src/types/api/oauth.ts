export interface BindOuathRequest {
  scopes: string;
  terminal_type: string;
  lang: string;
  chat_commerce_user_id: number;
}

export interface UnbindOauthRequest {
  user_id: string;
}

export interface ErrorUnbindingResponse {
  message?: string;
}
