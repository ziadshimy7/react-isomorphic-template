import clsx from "clsx";
import { forwardRef } from "react";

import { TextFieldProps } from "./types";

import "./index.scss";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      className,
      helperText,
      endElement,
      startElement,
      error,
      variant = "default",
      required = false,
      ...props
    },
    ref
  ) {
    return (
      <div className={clsx("text_field", className)}>
        <div
          className={clsx(
            "text_field__input",
            `text_field__input--${variant}`,
            error && "text_field__input--error",
            required && "text_field__input--star"
          )}
        >
          {startElement && (
            <div
              className={clsx(
                "text_field__input__start_element",
                `text_field__input__start_element--${variant}`
              )}
            >
              {startElement}
            </div>
          )}
          <input
            ref={ref}
            className={clsx(
              "text_field__input__input",
              `text_field__input__input--${variant}`
            )}
            required={required}
            {...props}
          />
          {endElement && (
            <div
              className={clsx(
                "text_field__input__end_element",
                `text_field__input__end_element--${variant}`
              )}
            >
              {endElement}
            </div>
          )}
        </div>
        <span
          className={clsx(
            "text_field__helper_text",
            error && "text_field__helper_text--error"
          )}
        >
          {helperText}
        </span>
      </div>
    );
  }
);
