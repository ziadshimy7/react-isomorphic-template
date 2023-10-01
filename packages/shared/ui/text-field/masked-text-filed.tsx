import clsx from "clsx";
import { forwardRef } from "react";
import ReactInputMask from "react-input-mask";

import { MaskedTextFieldProps } from "./types";

import "./index.scss";

export const MaskedTextField = forwardRef<ReactInputMask, MaskedTextFieldProps>(
  function MaskedTextField(
    {
      helperText,
      mask,
      maskChar,
      alwaysShowMask,
      className,
      error,
      variant,
      required,
      startElement,
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
          <ReactInputMask
            ref={ref}
            mask={mask}
            maskChar={maskChar}
            alwaysShowMask={alwaysShowMask}
            className={clsx(
              "text_field__input__input",
              `text_field__input__input--${variant}`
            )}
            {...props}
          />
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
