import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, MouseEventHandler } from "react";

import "./index.scss";

const handlePrevent: MouseEventHandler = (event) => {
  event.stopPropagation();
};

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "medium" | "large";
  reverse?: boolean;
  prevent?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      id,
      size = "medium",
      reverse,
      children,
      className,
      style,
      prevent,
      ...props
    },
    ref
  ) {
    return (
      <label
        htmlFor={id}
        style={style}
        className={clsx(
          className,
          "checkbox",
          `checkbox--${size}`,
          reverse && "checkbox--reverse"
        )}
        {...(prevent && { onClick: handlePrevent })}
      >
        {children}
        <input
          className="checkbox__hidden"
          type="checkbox"
          id={id}
          ref={ref}
          {...props}
        />
        <span
          className={clsx("checkbox__visible", `checkbox__visible--${size}`)}
        />
      </label>
    );
  }
);
