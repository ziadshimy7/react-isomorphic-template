import { forwardRef, ForwardRefRenderFunction, RefAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { LoadingStatus } from "@shared/store/loading/types";

import { ButtonProps } from "./types";

const ButtonInner: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps & RefAttributes<HTMLButtonElement>
> = (
  {
    color = "primary",
    size = "large",
    startElement,
    isLoading,
    disabled,
    endElement,
    onClick: handleClick,
    className,
    hideTextOnMobile = false,
    children,
    ...props
  },
  ref
) => {
  const buttonSize = {
    small: "text-base tracking-normal rounded-lg px-5 py-2.5",
    medium: "text-lg tracking-normal rounded-lg px-5 py-3",
    large: "text-xl tracking-wide rounded-xl px-5 py-4",
  };

  const buttonColor = {
    primary:
      "text-white bg-primary-blue disabled:bg-light-grey-2 disabled:text-light-grey-1",
    secondary:
      "bg-light-blue text-primary-blue disabled:bg-fields-fill disabled:text-light-grey-1",
    plain:
      "text-primary-blue bg-white disabled:text-light-grey-1 disabled:border-light-grey-1",
  };

  const elementColor = {
    primary: "fill-white disabled:fill-light-grey-1",
    secondary: "fill-primary-blue disabled:fill-light-grey-1",
    plain: "fill-primary-blue disabled:fill-light-grey-1",
  };

  const isDisabled = disabled || isLoading === LoadingStatus.Pending;

  return (
    <button
      type="button"
      ref={ref}
      disabled={isDisabled}
      onClick={handleClick}
      className={twMerge(
        "flex items-center justify-center gap-1 rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed cursor-pointer",
        buttonSize[size],
        buttonColor[color],
        className
      )}
      {...props}
    >
      {startElement && (
        <span
          className={twMerge(
            elementColor[color],
            isDisabled && "fill-light-grey-1"
          )}
        >
          {startElement}
        </span>
      )}
      {children != null && (
        <span className={twMerge(hideTextOnMobile && "hidden lg:block")}>
          {children}
        </span>
      )}
      {endElement && (
        <span
          className={twMerge(
            elementColor[color],
            isDisabled && "fill-light-grey-1"
          )}
        >
          {endElement}
        </span>
      )}
    </button>
  );
};

export const Button = forwardRef(ButtonInner);
