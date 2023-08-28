import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

import "./index.scss";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "medium" | "large";
  reverse?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { id, size = "medium", children, className, reverse = false, ...props },
  ref
) {
  return (
    <label
      htmlFor={id}
      className={clsx(
        className,
        "radio",
        `radio--${size}`,
        reverse && "radio--reverse"
      )}
    >
      {children}
      <input
        ref={ref}
        className="radio__hidden"
        type="radio"
        id={id}
        {...props}
      />
      <span className={clsx("radio__visible", `radio__visible--${size}`)} />
    </label>
  );
});
