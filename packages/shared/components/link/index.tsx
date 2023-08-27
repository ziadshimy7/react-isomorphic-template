import { FC } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

interface LinkProps extends RouterLinkProps {
  className?: string;
  external?: boolean;
}

export const Link: FC<LinkProps> = ({ to, children, className, external }) => (
  <RouterLink
    className={className}
    {...(external && { target: "_blank", rel: "noreferrer" })}
    to={to}
  >
    {children}
  </RouterLink>
);
