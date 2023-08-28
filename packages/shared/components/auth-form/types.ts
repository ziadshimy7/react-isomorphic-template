import { SubmitHandler } from "react-hook-form";

export interface AuthFormProps {
  onFormSubmit: SubmitHandler<AuthFormFields>;
}

export interface AuthFormFields {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}
