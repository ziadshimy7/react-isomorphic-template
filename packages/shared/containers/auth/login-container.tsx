import { FC, useCallback } from "react";
import { AuthForm } from "@shared/components/auth-form";

import { useAppDispatch } from "@shared/store/use-app-dispatch";
import { AuthFormFields } from "@shared/components/auth-form/types";
import styles from "./index.module.scss";

export const AuthLoginContainer: FC = () => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = useCallback((values: AuthFormFields) => {
    console.log(values);
  }, []);

  return (
    <div className={styles.auth__form}>
      <h2 className={styles.auth__form__title}>
        Please complete the registration form below. <br />
        All fields are required.
      </h2>
      <AuthForm onFormSubmit={handleFormSubmit} />
    </div>
  );
};
