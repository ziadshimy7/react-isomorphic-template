import { FC, MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DialogTitleProps {
  children?: ReactNode;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const DialogTitle: FC<DialogTitleProps> = ({
  children,
  onClose: handleClose,
  className,
}) => (
  <div
    className={twMerge(
      "flex items-center justify-between gap-x-2 border-b px-5 py-4",
      className
    )}
  >
    <div className="m-0 w-full">{children}</div>
    {handleClose && (
      <button
        aria-label="close"
        type="button"
        className="flex p-1"
        onClick={handleClose}
      >
        X
      </button>
    )}
  </div>
);
