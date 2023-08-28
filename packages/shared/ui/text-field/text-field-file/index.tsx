import { AttachmentIcon } from "@kari/icons";
import clsx from "clsx";
import { forwardRef } from "react";

import { TextFieldProps } from "../types";

import styles from "./index.module.scss";

export const TextFieldFile = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextFieldFile({ className, helperText, error, ...props }, ref) {
    return (
      <div className={clsx(styles.text_field, className)}>
        <label htmlFor="attachments" className={styles.text_field__file}>
          <input ref={ref} id="attachments" type="file" {...props} />
          <AttachmentIcon /> Прикрепить файл
        </label>
        {helperText && (
          <span
            className={clsx(
              styles.text_field__helper_text,
              error && styles.text_field__helper_text__error
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);
