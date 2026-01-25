import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

import { LoadingStatus } from "@shared/store/loading/types";

export type TextFieldVariants = "default" | "outline";

export interface BaseTextFieldProps {
  variant?: TextFieldVariants;
  error?: boolean;
  helperText?: ReactNode;
  startElement?: ReactNode;
  wrapperClassNames?: string;
  endElement?: ReactNode;
  isLoading?: LoadingStatus;
  inputClassName?: string;
  label?: ReactNode;
}
export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  BaseTextFieldProps;

export interface BaseMaskedTextFieldProps {
  mask: string;
  maskChar?: string;
  alwaysShowMask?: boolean;
}

export type TextFieldMaskedProps = InputHTMLAttributes<HTMLInputElement> &
  BaseTextFieldProps &
  BaseMaskedTextFieldProps;

export type BaseTextAreaProps = Pick<
  BaseTextFieldProps,
  "error" | "helperText"
> & { resize?: boolean; textAreaClassName?: string };

export type TextFieldAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  BaseTextAreaProps;
