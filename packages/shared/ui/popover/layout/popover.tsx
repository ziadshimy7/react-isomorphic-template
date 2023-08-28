import { ClickAwayListener } from "@mui/base";
import clsx from "clsx";
import { FC, ReactNode } from "react";

import { PopoverContext } from "../context";

import styles from "./popover.module.scss";

export const PopoverLayout: FC<{
  className?: string;
  children?: ReactNode;
  onClose: () => void;
}> = ({ className, children, onClose: handleClose }) => (
  <ClickAwayListener onClickAway={handleClose} touchEvent={false}>
    <div
      className={clsx(styles.popover_layout, className)}
      // onClick={() => {
      //   setTimeout(() => {
      //     handleClose();
      //   }, 0);
      // }}
    >
      <PopoverContext.Provider
        // eslint-disable-next-line react/jsx-handler-names
        value={handleClose}
      >
        {children}
      </PopoverContext.Provider>
    </div>
  </ClickAwayListener>
);
