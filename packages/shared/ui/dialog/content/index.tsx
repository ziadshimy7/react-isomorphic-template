import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const DialogContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(
      "flex grow flex-col overflow-y-auto overflow-x-hidden px-4 py-2 md:px-8 md:py-4",
      className
    )}
    {...props}
  />
);
