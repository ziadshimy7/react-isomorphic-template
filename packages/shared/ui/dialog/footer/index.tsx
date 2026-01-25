import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const DialogFooter: FC<{ children?: ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={twMerge("p-5", className)}>{children}</div>;
