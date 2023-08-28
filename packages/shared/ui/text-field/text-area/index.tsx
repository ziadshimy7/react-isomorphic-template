import clsx from "clsx";
import { forwardRef } from "react";

import { TextAreaProps } from "../types";

import styles from "./index.module.scss";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      className,
      textAreaClassName,
      helperText,
      error,
      resize = false,
      required = false,
      ...props
    },
    ref
  ) {
    return (
      <div className={clsx(styles.text_field, className)}>
        <div
          className={clsx(
            styles.text_field__wrapper,
            error && styles.text_field__wrapper__error,
            required && styles.text_field__wrapper__star
          )}
        >
          <textarea
            ref={ref}
            className={clsx(
              styles.text_field__wrapper__text_area,
              textAreaClassName,
              resize && styles.text_field__wrapper__text_area__resizable
            )}
            required={required}
            {...props}
          />
        </div>
        <span
          className={clsx(
            styles.text_field__helper_text,
            error && styles.text_field__helper_text__error
          )}
        >
          {helperText}
        </span>
      </div>
    );
  }
);
