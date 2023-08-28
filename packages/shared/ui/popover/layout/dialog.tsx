import { ClickAwayListener } from "@mui/base";
import clsx from "clsx";
import { FC, ReactNode, useEffect, useRef } from "react";

import { useForwardRef } from "@shared/utils/hooks/use-forward-ref";
import { modalManager } from "@shared/utils/modal-manager";

import { PopoverContext } from "../context";

import styles from "./dialog.module.scss";

export const DialogLayout: FC<{
  className?: string;
  children?: ReactNode;
  onClose: () => void;
}> = ({ className, children, onClose: handleClose }) => {
  const forwardedModalRef = useRef<HTMLDivElement>();
  const popoverRef = useForwardRef<HTMLDivElement>(forwardedModalRef);

  useEffect(() => {
    modalManager.mount(forwardedModalRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps -- Переменная копируется и остается в forwardedModalRef
      modalManager.unmount(forwardedModalRef.current);
    };
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClose} touchEvent={false}>
      <div ref={popoverRef} className={clsx(styles.dialog_layout, className)}>
        <PopoverContext.Provider
          // eslint-disable-next-line react/jsx-handler-names
          value={handleClose}
        >
          {children}
        </PopoverContext.Provider>
      </div>
    </ClickAwayListener>
  );
};
