import { forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";

import { LoadingStatus } from "@shared/store/loading/types";

import { TextareaProps } from "./utils/types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      helperText,
      error,
      required,
      wrapperClassNames,
      isLoading,
      textareaClassName,
      readOnly,
      label,
      rows = 4,
      placeholder = "Введите",
      ...props
    },
    ref
  ) {
    const id = useId();

    return (
      <div className={twMerge(wrapperClassNames)}>
        {label && (
          <label
            htmlFor={id}
            className={twMerge(
              "mb-2 block bg-gray-input text-sm font-medium text-black",
              error && "text-error"
            )}
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          rows={rows}
          className={twMerge(
            "block w-full rounded border border-gray-200 bg-fields-fill p-2.5 text-lg text-black focus:border-primary-blue placeholder:text-mid-grey-3 focus:shadow-[0_0_0_4px_rgba(62,125,254,0.20),0_0_4px_0_rgba(62,125,254,0.20)] focus:outline-none",
            error &&
              "rounded-lg border border-error text-error placeholder:text-error",
            isLoading === LoadingStatus.Pending && "bg-background",
            readOnly && "cursor-not-allowed !bg-background",
            textareaClassName
          )}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          {...props}
        />
        {helperText && <div className="mt-2">{helperText}</div>}
      </div>
    );
  }
);
