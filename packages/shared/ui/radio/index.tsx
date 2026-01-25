/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, InputHTMLAttributes, useId } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: "small" | "medium" | "large";
}

const sizes = {
  small: "w-3.5 h-3.5",
  medium: "w-5 h-5",
  large: "w-6 h-6",
};

const innerSizes = {
  small: "before:w-2 before:h-2",
  medium: "before:w-3 before:h-3",
  large: "before:w-4 before:h-4",
};

export const RadioInput: FC<Props> = ({ label, size = "medium", ...props }) => {
  const id = useId();

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full"
        htmlFor={id}
      >
        <input
          type="radio"
          className={twMerge(
            "before:content[''] peer",
            "relative cursor-pointer appearance-none",
            "rounded-full border border-primary-blue transition-all",
            "before:absolute before:left-2/4 before:top-2/4 before:block",
            "before:-translate-x-2/4 before:-translate-y-2/4",
            "before:rounded-full before:bg-primary-blue before:opacity-0",
            "before:transition-opacity checked:border-primary-blue checked:before:bg-primary-blue",
            `checked:before:opacity-100`,
            innerSizes[size],
            sizes[size]
          )}
          id={id}
          {...props}
        />
        {label && (
          <span
            className={twMerge(
              "ml-2 select-none",
              props.disabled ? "text-gray-400" : "text-gray-900"
            )}
          >
            {label}
          </span>
        )}
      </label>
    </div>
  );
};
