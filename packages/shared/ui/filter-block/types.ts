import { ChangeEventHandler, LiHTMLAttributes, ReactNode } from "react";

export interface FilterBlockProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, "onChange"> {
  footer?: ReactNode;
  children?: ReactNode;
  header?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
