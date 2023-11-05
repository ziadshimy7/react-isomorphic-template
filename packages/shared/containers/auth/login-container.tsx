import { FC, useCallback } from "react";

import { useAppDispatch } from "@shared/store/use-app-dispatch";
import { LoginAuthFormFields } from "@shared/components/auth-form/types";
import { authLogin } from "@shared/store/auth/actions";
import { useSelector } from "react-redux";
import { loadingSelector } from "@shared/store/loading/selectors";
import { AuthLoginForm } from "@shared/components/auth-form/login-form";
import clsx from "clsx";
import styles from "./index.module.scss";

export const AuthLoginContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { loadingStatus } = useSelector(loadingSelector(authLogin.typePrefix));

  const handleFormSubmit = useCallback(
    (values: LoginAuthFormFields) => {
      dispatch(authLogin(values));
    },
    [dispatch],
  );

  return (
    <div className={clsx(styles.auth, styles.auth__login)}>
      <h2 style={{ color: "black" }}>Welcome asdasdasd !</h2>
      <p className={styles.auth__helper_text}>Please enter your info to login</p>
      <AuthLoginForm loadingStatus={loadingStatus} onFormSubmit={handleFormSubmit} />
    </div>
  );
};
