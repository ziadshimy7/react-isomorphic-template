import {
  FieldErrors,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

import { LoadingStatus } from "@shared/models/types";

import { BaseTextFieldProps } from "./types";

type GetTextFieldProps = <Values extends FieldValues>(
  name: FieldPath<Values>,
  options: {
    register: UseFormRegister<Values>;
    loadingStatus?: LoadingStatus;
    options?: RegisterOptions<Values, FieldPath<Values>>;
    errors?: FieldErrors<Values>;
  }
) => UseFormRegisterReturn<FieldPath<Values>> & BaseTextFieldProps;

export const getTextFieldProps: GetTextFieldProps = (
  name,
  { register, errors, options, loadingStatus }
) => {
  const error = errors?.[name];

  return {
    ...register(name, options),
    error: Boolean(error),
    helperText: error?.message?.toString(),
    disabled: loadingStatus === "pending",
  };
};
