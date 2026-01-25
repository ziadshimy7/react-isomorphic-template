import { FC } from "react";

import Portal from "../portal";

import { ModalContent } from "./content";
import { ModalProps } from "./types";

export const Modal: FC<ModalProps> = ({ open, ...props }) => (
  <Portal open={open}>
    <ModalContent {...props} />
  </Portal>
);
