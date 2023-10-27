import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@shared/ui/text-field";
import { authLoginFormFieldsSchema } from "@shared/utils/form/validation/register-form";
import { FC } from "react";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import PasswordSharpIcon from "@mui/icons-material/PasswordSharp";

import { useForm } from "react-hook-form";
import { getTextFieldProps } from "@shared/utils/form/get-text-field-props";
import { ButtonWithLoader } from "@shared/ui/button-with-loader";
import clsx from "clsx";
import styles from "./index.module.scss";
import { LoginAuthFormFields, LoginAuthFormProps } from "./types";
import { Link } from "../link";

export const AuthLoginForm: FC<LoginAuthFormProps> = ({
  onFormSubmit,
  loadingStatus,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginAuthFormFields>({
    mode: "onChange",
    resolver: zodResolver(authLoginFormFieldsSchema),
  });

  return (
    <form
      className={clsx(styles.auth_form, styles.auth_form__login)}
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <TextField
        startElement={<LoginSharpIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Enter your email"
        {...getTextFieldProps("email", { register, errors })}
      />
      <TextField
        startElement={<PasswordSharpIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Enter your password"
        type="password"
        {...getTextFieldProps("password", { register, errors })}
      />
      <Link className={styles.auth_form__register_link} to="/auth/register">
        Don&apos;t have an account? Register
      </Link>
      <ButtonWithLoader
        loadingStatus={loadingStatus}
        className={styles.auth_form__submit_button}
        type="submit"
      >
        Login
      </ButtonWithLoader>
    </form>
  );
};
