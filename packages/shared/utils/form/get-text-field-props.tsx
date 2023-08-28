import { BaseTextFieldProps } from "@shared/ui/text-field/types";
import {
  FieldErrors,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

type GetTextFieldProps = <Values extends FieldValues>(
  name: FieldPath<Values>,
  options: {
    register: UseFormRegister<Values>;
    options?: RegisterOptions<Values, FieldPath<Values>>;
    errors?: FieldErrors<Values>;
  }
) => UseFormRegisterReturn<FieldPath<Values>> & BaseTextFieldProps;

export const getTextFieldProps: GetTextFieldProps = (
  name,
  { register, errors, options }
) => {
  const error = errors?.[name];

  return {
    ...register(name, options),
    error: Boolean(error),
    helperText: error?.message?.toString(),
  };
};
