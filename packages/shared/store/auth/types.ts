import type {
  authFormFieldsSchema,
  authLoginFormFieldsSchema,
} from "@shared/utils/form/validation/register-form";
import { z } from "zod";

export type AuthFormFields = z.infer<typeof authFormFieldsSchema>;

export type LoginAuthFormFields = z.infer<typeof authLoginFormFieldsSchema>;

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export type AuthRegisterUser = (formData: AuthFormFields) => Promise<User>;

export type AuthLoginUser = (formData: LoginAuthFormFields) => Promise<User>;

export type AuthGetUser = () => Promise<User>;

export interface AuthState {
  userInfo?: Partial<User>;
}
