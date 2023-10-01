import { FC, ReactElement, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthorized: boolean;
  redirectPath: string;
  children?: ReactElement;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAuthorized,
  redirectPath = "/",
  children,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(redirectPath, { replace: true });
    }
  }, [isAuthorized, redirectPath, navigate]);

  return children ?? <Outlet />;
};
