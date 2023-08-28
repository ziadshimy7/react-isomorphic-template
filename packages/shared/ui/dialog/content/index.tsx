import clsx from "clsx";
import { FC, ReactNode } from "react";

export const DialogContent: FC<{
  children?: ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={clsx("dialog__content", className)}>{children}</div>
);
