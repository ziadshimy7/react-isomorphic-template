import { LoadingStatus } from "@shared/store/loading/types";
import type { authFormFieldsSchema } from "@shared/utils/form/validation/register-form";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

export interface AuthFormProps {
  onFormSubmit: SubmitHandler<AuthFormFields>;
  loadingStatus: LoadingStatus;
}

export interface LoginAuthFormProps {
  onFormSubmit: SubmitHandler<LoginAuthFormFields>;
  loadingStatus: LoadingStatus;
}

export type AuthFormFields = z.infer<typeof authFormFieldsSchema>;
export type LoginAuthFormFields = z.infer<typeof authFormFieldsSchema>;
