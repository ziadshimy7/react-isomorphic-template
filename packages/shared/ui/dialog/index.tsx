import { ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { Modal } from "../modal";
import { ModalProps } from "../modal/types";

export interface DialogProps extends ModalProps {
  width?: string;
  height?: string | number;
  children: ReactNode;
  dialogClassName?: string;
  onClose: () => void;
}

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ children, width, height, dialogClassName, ...props }, ref) => (
    <Modal {...props}>
      <div
        ref={ref}
        className={twMerge(
          "z-20 box-border flex h-full w-full max-w-full flex-col overflow-hidden rounded bg-white md:h-fit md:max-h-full md:w-1/2",
          dialogClassName
        )}
        role="dialog"
        style={{ maxWidth: width, height }}
      >
        {children}
      </div>
    </Modal>
  )
);
Dialog.displayName = "Dialog";
