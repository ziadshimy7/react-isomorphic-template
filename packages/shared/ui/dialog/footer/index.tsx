import { FC, ReactNode } from "react";

export const DialogFooter: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="dialog__footer">{children}</div>
);
