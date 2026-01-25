/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface BackdropProps {
  invisible?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Backdrop: FC<BackdropProps> = ({
  invisible = false,
  onClick: handleClick,
}) => (
  <div
    className={twMerge(
      "fixed inset-0 z-20 bg-black opacity-40",
      invisible && "bg-transparent"
    )}
    onClick={handleClick}
  />
);
