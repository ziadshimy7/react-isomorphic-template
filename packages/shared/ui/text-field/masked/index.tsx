import { forwardRef } from "react";
import ReactInputMask from "react-input-mask";
import { twJoin } from "tailwind-merge";

import { LoadingStatus } from "@shared/store/loading/types";

import { TextFieldMaskedProps } from "../utils/types";

export const TextFieldMasked = forwardRef<ReactInputMask, TextFieldMaskedProps>(
  function TextFieldMasked(
    {
      helperText,
      mask,
      maskChar,
      alwaysShowMask,
      className,
      error,
      placeholder,
      isLoading,
      readOnly,
      required,
      type,
      value,
      defaultValue,
      ...props
    },
    ref
  ) {
    // Ensure defaultValue is never null/undefined
    const safeDefaultValue = defaultValue ?? "";

    return (
      <div className={className}>
        <ReactInputMask
          ref={ref}
          type={type}
          className={twJoin(
            "block w-full rounded border border-gray-light bg-gray-input px-2 py-3 text-lg text-main-black placeholder:text-gray-dark focus:outline-none",
            error && "rounded-lg border border-error-main focus:outline-none",
            readOnly && "cursor-not-allowed !bg-disabled-input"
          )}
          placeholder={placeholder}
          required={required}
          mask={mask}
          readOnly={isLoading === LoadingStatus.Pending || readOnly}
          alwaysShowMask={alwaysShowMask}
          maskChar={maskChar}
          value={value}
          defaultValue={safeDefaultValue}
          {...props}
        />
        {helperText && (
          <p className="mt-1 text-sm text-error-main">{helperText}</p>
        )}
      </div>
    );
  }
);
