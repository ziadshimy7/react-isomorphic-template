import { FC, useCallback } from "react";
import { AuthForm } from "@shared/components/auth-form";

import { useAppDispatch } from "@shared/store/use-app-dispatch";
import { AuthFormFields } from "@shared/components/auth-form/types";
import { authRegister } from "@shared/store/auth/actions";
import { useSelector } from "react-redux";
import { loadingSelector } from "@shared/store/loading/selectors";
import styles from "./index.module.scss";

export const AuthRegisterContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { loadingStatus } = useSelector(
    loadingSelector(authRegister.typePrefix)
  );

  const handleFormSubmit = useCallback(
    (values: AuthFormFields) => {
      dispatch(authRegister(values));
    },
    [dispatch]
  );

  return (
    <div className={styles.auth}>
      <div className={styles.auth__header}>
        <p>Registration</p>
      </div>
      <AuthForm loadingStatus={loadingStatus} onFormSubmit={handleFormSubmit} />
    </div>
  );
};
