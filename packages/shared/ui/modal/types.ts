import { HTMLAttributes, KeyboardEvent, MouseEvent } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: (
    event: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>
  ) => void;
  invisibleBackdrop?: boolean;
}
