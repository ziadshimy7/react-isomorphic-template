import { FC, HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  className?: string;
  children: ReactNode;
  onClick: MouseEventHandler;
}

export const IconButton: FC<IconButtonProps> = ({
  className,
  children,
  onClick: handleClick,
  ...props
}) => (
  <button
    onClick={handleClick}
    className={twMerge(
      "rounded-md border cursor-pointer border-transparent p-2.5 text-center text-sm shadow-sm transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
      className
    )}
    type="button"
    {...props}
  >
    {children}
  </button>
);
