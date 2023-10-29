import { TextField } from "@shared/ui/text-field";
import { MaskedTextField } from "@shared/ui/text-field/masked-text-filed";
import { getTextFieldProps } from "@shared/ui/text-field/get-text-field-props";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EmailIcon from "@mui/icons-material/Email";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import ShieldSharpIcon from "@mui/icons-material/ShieldSharp";
import PasswordSharpIcon from "@mui/icons-material/PasswordSharp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { authFormFieldsSchema } from "@shared/utils/form/validation/register-form";

import { ButtonWithLoader } from "@shared/ui/button-with-loader";
import { AuthDatePicker } from "@shared/ui/date-picker";
import styles from "./index.module.scss";
import { AuthFormFields, AuthFormProps } from "./types";
import { Link } from "../link";

export const AuthForm: FC<AuthFormProps> = ({
  onFormSubmit,
  loadingStatus = "initial",
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormFields>({
    mode: "onChange",
    defaultValues: { date: "January 1, 2000" },
    resolver: zodResolver(authFormFieldsSchema),
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.auth_form}>
        <TextField
          startElement={<LoginSharpIcon className={styles.auth_form__icons} />}
          variant="outline"
          placeholder="Enter your username"
          {...getTextFieldProps("userName", { register, errors })}
        />
        <MaskedTextField
          mask="+79999999999"
          placeholder="+7__________"
          startElement={
            <PhoneAndroidIcon className={styles.auth_form__icons} />
          }
          variant="outline"
          {...getTextFieldProps("phone", { register, errors })}
        />
        <TextField
          variant="outline"
          startElement={<PersonSharpIcon className={styles.auth_form__icons} />}
          placeholder="Enter your first name"
          {...getTextFieldProps("firstName", { register, errors })}
        />
        <TextField
          variant="outline"
          startElement={<PersonSharpIcon className={styles.auth_form__icons} />}
          placeholder="Enter your last name"
          {...getTextFieldProps("lastName", { register, errors })}
        />
        <TextField
          startElement={<EmailIcon className={styles.auth_form__icons} />}
          variant="outline"
          placeholder="Enter your email"
          {...getTextFieldProps("email", { register, errors })}
        />
        <Controller
          name="date"
          control={control}
          render={({ field: { value, onChange: handleChange, ...fields } }) => (
            <AuthDatePicker onChange={handleChange} value={value} {...fields}>
              <TextField
                startElement={
                  <DateRangeIcon className={styles.auth_form__icons} />
                }
                variant="outline"
                placeholder="Your birth date"
                onChange={handleChange}
                value={value}
              />
            </AuthDatePicker>
          )}
        />
        <TextField
          startElement={<ShieldSharpIcon className={styles.auth_form__icons} />}
          variant="outline"
          placeholder="Enter your password"
          type="password"
          {...getTextFieldProps("password", { register, errors })}
        />

        <TextField
          startElement={
            <PasswordSharpIcon className={styles.auth_form__icons} />
          }
          variant="outline"
          placeholder="Confirm your password"
          type="password"
          {...getTextFieldProps("confirmPassword", { register, errors })}
        />
      </div>
      <Link className={styles.auth_form__register_link} to="/auth">
        Already have an account ? Sign in
      </Link>
      <ButtonWithLoader
        loadingStatus={loadingStatus}
        className={styles.auth_form__submit_button}
        type="submit"
      >
        Register
      </ButtonWithLoader>
    </form>
  );
};
