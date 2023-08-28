import clsx from "clsx";
import { forwardRef, useCallback } from "react";
import ReactCodeInput from "react-code-input";

import { CodeTextFieldProps } from "./types";

import "./index.scss";

export const CodeTextField = forwardRef<ReactCodeInput, CodeTextFieldProps>(
  function CodeTextField(
    { helperText, className, error, onChange, name = "code", ...props },
    ref
  ) {
    const handleChange = useCallback(
      (value: string) => {
        onChange?.({ target: { name, value } });
      },
      [onChange, name]
    );

    return (
      <div className={clsx("text_field", className)}>
        <ReactCodeInput
          ref={ref}
          name={name}
          type="number"
          fields={4}
          className={clsx(
            "text_field__code_input",
            error && "text_field__code_input--error"
          )}
          onChange={handleChange}
          {...props}
          inputMode="numeric"
        />
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
