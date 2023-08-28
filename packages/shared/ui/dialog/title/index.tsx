import { CloseIcon } from "@kari/icons";
import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode } from "react";

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
  <div className={clsx("dialog__title", className)}>
    <h3 className="dialog__title__title">{children}</h3>
    {handleClose && (
      <button
        type="button"
        className="dialog__title__close_button"
        onClick={handleClose}
      >
        <CloseIcon className="dialog__title__close_button__icon" />
      </button>
    )}
  </div>
);
