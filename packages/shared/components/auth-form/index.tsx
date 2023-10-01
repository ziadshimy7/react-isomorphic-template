import { TextField } from "@shared/ui/text-field";
import { MaskedTextField } from "@shared/ui/text-field/masked-text-filed";
import { getTextFieldProps } from "@shared/ui/text-field/get-text-field-props";
import { FC } from "react";
import { useForm } from "react-hook-form";
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
import styles from "./index.module.scss";
import { AuthFormFields, AuthFormProps } from "./types";

export const AuthForm: FC<AuthFormProps> = ({
  onFormSubmit,
  loadingStatus = "initial",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormFields>({
    mode: "onChange",
    resolver: zodResolver(authFormFieldsSchema),
  });

  return (
    <form className={styles.auth_form} onSubmit={handleSubmit(onFormSubmit)}>
      <TextField
        startElement={<LoginSharpIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Enter your username"
        {...getTextFieldProps("userName", { register, errors })}
        className={styles.auth_form__username_input}
      />
      <TextField
        variant="outline"
        startElement={<PersonSharpIcon className={styles.auth_form__icons} />}
        placeholder="Enter your first name"
        {...getTextFieldProps("firstName", { register, errors })}
        className={styles.auth_form__name_input}
      />
      <TextField
        variant="outline"
        startElement={<PersonSharpIcon className={styles.auth_form__icons} />}
        placeholder="Enter your last name"
        {...getTextFieldProps("lastName", { register, errors })}
        className={styles.auth_form__last_name_input}
      />
      <TextField
        startElement={<EmailIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Enter your email"
        {...getTextFieldProps("email", { register, errors })}
        className={styles.auth_form__email_input}
      />
      <MaskedTextField
        mask="+79999999999"
        placeholder="+7__________"
        startElement={<PhoneAndroidIcon className={styles.auth_form__icons} />}
        variant="outline"
        {...getTextFieldProps("phone", { register, errors })}
        className={styles.auth_form__phone_input}
      />
      <TextField
        startElement={<ShieldSharpIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Enter your password"
        type="password"
        {...getTextFieldProps("password", { register, errors })}
        className={styles.auth_form__password_input}
      />
      <div className={styles.auth_form__date_input}>
        <TextField
          startElement={<DateRangeIcon className={styles.auth_form__icons} />}
          variant="outline"
          placeholder="Your birth date"
          {...getTextFieldProps("date", { register, errors })}
        />
        <TextField
          startElement={
            <PasswordSharpIcon className={styles.auth_form__icons} />
          }
          variant="outline"
          placeholder="Card type"
          type="password"
          {...getTextFieldProps("confirmPassword", { register, errors })}
        />
      </div>
      <TextField
        startElement={<PasswordSharpIcon className={styles.auth_form__icons} />}
        variant="outline"
        placeholder="Confirm your password"
        type="password"
        {...getTextFieldProps("confirmPassword", { register, errors })}
        className={styles.auth_form__confirm_password_input}
      />
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
