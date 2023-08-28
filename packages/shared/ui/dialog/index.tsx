import clsx from "clsx";
import { FC, ReactNode } from "react";

import { Modal } from "../modal";
import { ModalProps } from "../modal/types";

import "./index.scss";

export interface DialogProps extends ModalProps {
  width?: number;
  height?: string | number;
  children: ReactNode;
  dialogClassName?: string;
}

export const Dialog: FC<DialogProps> = ({
  children,
  width,
  height,
  dialogClassName,
  ...props
}) => (
  <Modal {...props}>
    <div
      className={clsx("dialog", dialogClassName)}
      role="dialog"
      style={{ maxWidth: width, height }}
    >
      {children}
    </div>
  </Modal>
);
