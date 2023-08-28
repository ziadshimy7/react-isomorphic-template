import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { ReactCodeInputProps } from "react-code-input";
import { ChangeHandler } from "react-hook-form";

export type TextFieldVariants = "default" | "outline";

export interface BaseTextFieldProps {
  variant?: TextFieldVariants;
  error?: boolean;
  helperText?: ReactNode;
  startElement?: ReactNode;
  endElement?: ReactNode;
}
export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  BaseTextFieldProps;

export interface BaseMaskedTextFieldProps {
  mask: string;
  maskChar?: string;
  alwaysShowMask?: boolean;
}

export type MaskedTextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  BaseTextFieldProps &
  BaseMaskedTextFieldProps;

export type CodeTextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> &
  BaseTextFieldProps &
  Omit<ReactCodeInputProps, "inputMode" | "name" | "onChange"> & {
    onChange?: ChangeHandler;
  };

export type BaseTextAreaProps = Pick<
  BaseTextFieldProps,
  "error" | "helperText"
> & { resize?: boolean; textAreaClassName?: string };

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  BaseTextAreaProps;
