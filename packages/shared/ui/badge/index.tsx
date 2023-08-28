import { FC, ReactNode } from "react";

import "./index.scss";

interface BadgeProps {
  badgeContent?: ReactNode;
  children?: ReactNode;
}

export const Badge: FC<BadgeProps> = ({ children, badgeContent }) => (
  <span className="badge">
    {children}
    {badgeContent != null && (
      <span className="badge__content">{badgeContent}</span>
    )}
  </span>
);
