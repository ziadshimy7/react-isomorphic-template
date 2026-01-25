import { forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";

import { LoadingStatus } from "@shared/store/loading/types";

import { TextFieldProps } from "./utils/types";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      helperText,
      className,
      error,
      required,
      wrapperClassNames,
      isLoading,
      startElement,
      endElement,
      inputClassName,
      readOnly,
      label,
      ...props
    },
    ref
  ) {
    const id = useId();

    return (
      <div className={twMerge(wrapperClassNames)}>
        {label && <label htmlFor={id}>{label}</label>}
        <div
          className={twMerge(
            "flex items-center gap-2 rounded border border-light-grey-2 bg-fields-fill p-2 text-lg text-black placeholder:text-gray-dark focus-within:border-primary-blue focus-within:shadow-[0_0_0_4px_rgba(62,125,254,0.20),0_0_4px_0_rgba(62,125,254,0.20)]",
            error &&
              "rounded-lg border border-error placeholder:text-error focus-within:border-error",
            isLoading === LoadingStatus.Pending && "bg-background",
            readOnly && "bg-background  focus-within:border-light-grey-2",
            className
          )}
        >
          {startElement}
          <input
            id={id}
            ref={ref}
            type="text"
            className={twMerge(
              "block w-full text-black placeholder:text-mid-grey-3 read-only:cursor-not-allowed focus:outline-none disabled:text-light-grey-1 disabled:placeholder:text-light-grey-1",
              isLoading === LoadingStatus.Pending && "bg-background",
              readOnly && "bg-background border-none",
              error && "placeholder:text-error",
              inputClassName
            )}
            required={required}
            readOnly={readOnly}
            {...props}
          />
          {endElement}
        </div>
        {helperText && <div className="mt-2">{helperText}</div>}
      </div>
    );
  }
);
