export interface SignUpFormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface ForgotPasswordFormData {
  email: string;
}
