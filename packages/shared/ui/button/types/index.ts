import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { LoadingStatus } from "@shared/store/loading/types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "plain";
  size?: "medium" | "large" | "small";
  startElement?: ReactNode;
  endElement?: ReactNode;
  label?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: LoadingStatus;
  disabled?: boolean;
  hideTextOnMobile?: boolean;
  className?: string;
}
