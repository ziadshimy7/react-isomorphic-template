import { ReactNode, TextareaHTMLAttributes } from "react";

import { LoadingStatus } from "@shared/store/loading/types";

export interface BaseTextareaProps {
  error?: boolean;
  helperText?: ReactNode;
  wrapperClassNames?: string;
  isLoading?: LoadingStatus;
  textareaClassName?: string;
  label?: ReactNode;
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  BaseTextareaProps;
