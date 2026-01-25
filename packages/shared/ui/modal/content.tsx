/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  FC,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { twMerge } from "tailwind-merge";

import { modalManager } from "@shared/utils/modal-manager";
import { useForwardRef } from "@shared/utils/use-forward-ref";

import { Backdrop } from "../backdrop";

import { ModalProps } from "./types";

export const ModalContent: FC<ModalProps> = ({
  invisibleBackdrop = false,
  onClose: handleClose,
  children,
  onKeyDown,
  ...props
}) => {
  const forwardedModalRef = useRef<HTMLDivElement>();
  const handleForkRef = useForwardRef<HTMLDivElement>(forwardedModalRef);

  useEffect(() => {
    modalManager.mount(forwardedModalRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps -- Переменная копируется и остается в forwardedModalRef
      modalManager.unmount(forwardedModalRef.current);
    };
  }, []);

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      if (modalManager.isTopModal(forwardedModalRef.current)) {
        onKeyDown?.(event);

        if (event.key === "Escape") {
          handleClose?.(event);
        }
      }
    },
    [handleClose, onKeyDown]
  );

  return (
    <div
      ref={handleForkRef}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      className={twMerge(
        "fixed inset-0 z-[200] flex items-end justify-center overflow-hidden md:items-center",
        props.className
      )}
      {...props}
    >
      <Backdrop invisible={invisibleBackdrop} onClick={handleClose} />
      {children}
    </div>
  );
};
