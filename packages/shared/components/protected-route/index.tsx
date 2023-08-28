import { FC, ReactElement } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children?: ReactElement;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAllowed,
  redirectPath = "/",
  children,
}) => {
  const navigate = useNavigate();
  if (!isAllowed) {
    navigate(redirectPath, { replace: true });
  }

  return children ?? <Outlet />;
};
