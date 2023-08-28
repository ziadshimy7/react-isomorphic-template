import clsx from "clsx";
import { forwardRef } from "react";
import ReactInputMask from "react-input-mask";

import { MaskedTextFieldProps } from "./types";

import "./index.scss";

export const MaskedTextField = forwardRef<ReactInputMask, MaskedTextFieldProps>(
  function MaskedTextField(
    { helperText, mask, maskChar, alwaysShowMask, className, error, ...props },
    ref
  ) {
    return (
      <div className={clsx("text_field", className)}>
        <div
          className={clsx(
            "text_field__input",
            error && "text_field__input--error"
          )}
        >
          <ReactInputMask
            ref={ref}
            mask={mask}
            maskChar={maskChar}
            alwaysShowMask={alwaysShowMask}
            className="text_field__input__input"
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
