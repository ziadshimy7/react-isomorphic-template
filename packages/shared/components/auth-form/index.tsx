import { TextField } from "@shared/ui/text-field";
import { getTextFieldProps } from "@shared/ui/text-field/get-text-field-props";
import { FC } from "react";
import { useForm } from "react-hook-form";
import EmailIcon from "@mui/icons-material/Email";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import ShieldSharpIcon from "@mui/icons-material/ShieldSharp";
import PasswordSharpIcon from "@mui/icons-material/PasswordSharp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import styles from "./index.module.scss";
import { AuthFormFields, AuthFormProps } from "./types";

export const AuthForm: FC<AuthFormProps> = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormFields>({
    mode: "onChange",
    resolver: (values) => {
      console.log(values);
    },
  });

  return (
    <form className={styles.auth_form} onSubmit={handleSubmit(onFormSubmit)}>
      <TextField
        startElement={<LoginSharpIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Enter your username"
        {...getTextFieldProps("userName", { register, errors })}
      />
      <TextField
        variant="outline"
        startElement={<PersonSharpIcon className={styles.auth_form__icons} />}
        placeholder="Enter your full name"
        {...getTextFieldProps("fullName", { register, errors })}
      />
      <TextField
        startElement={<EmailIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Enter your email"
        {...getTextFieldProps("email", { register, errors })}
      />
      <TextField
        startElement={<PhoneAndroidIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Enter your phone number"
        {...getTextFieldProps("phoneNumber", { register, errors })}
      />
      <TextField
        startElement={<ShieldSharpIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Enter your password"
        type="password"
        {...getTextFieldProps("password", { register, errors })}
      />
      <TextField
        startElement={<PasswordSharpIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Confirm your password"
        type="password"
        {...getTextFieldProps("confirmPassword", { register, errors })}
      />
      <button className={styles.auth_form__submit_button} type="submit">
        Login
      </button>
    </form>
  );
};
