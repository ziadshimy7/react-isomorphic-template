/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from "clsx";
import { FC, MouseEventHandler } from "react";

import "./index.scss";

interface BackdropProps {
  invisible?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Backdrop: FC<BackdropProps> = ({
  invisible = false,
  onClick: handleClick,
}) => (
  <div
    className={clsx("backdrop", invisible && "backdrop--invisible")}
    onClick={handleClick}
  />
);
