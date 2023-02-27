export interface FirebaseLogin {
  email: string;
  password: string;
}

export interface FirebaseRegister {
  name?: string;
  email: string;
  password: string;
}

export interface FirebaseResetPassword {
  email: string;
}
