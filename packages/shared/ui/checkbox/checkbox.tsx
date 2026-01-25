/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, FC, InputHTMLAttributes, useId } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "title" | "onChange"> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  title?: string;
}

export const Checkbox: FC<Props> = ({
  checked,
  onChange: handleChange,
  defaultChecked,
  className,
  title,
  ...props
}) => {
  const id = useId();

  return (
    <div className="inline-flex items-center gap-2">
      <label
        className={twMerge(
          "relative flex cursor-pointer items-center rounded-full p-2",
          className
        )}
        htmlFor={id}
        data-ripple-dark="true"
      >
        <input
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={handleChange}
          id={id}
          type="checkbox"
          className={twMerge(`before:h-[18px]:w-[18px]
             peer relative h-[18px] w-[18px]
              cursor-pointer appearance-none 
              rounded border-1 border-light-grey-1 
              transition-all before:absolute 
              before:left-2/4 before:top-2/4 before:block before:-translate-x-2/4 
              before:-translate-y-2/4 before:rounded-full before:bg-fields-fill 
              before:opacity-0 before:transition-opacity checked:border-primary-blue
            checked:bg-light-blue hover:before:bg-primary-blue hover:before:opacity-10
            disabled:border-background disabled:bg-fields-fill disabled:cursor-not-allowed`)}
          {...props}
        />
        <span
          className={twMerge(
            `pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary-blue opacity-0 transition-opacity peer-checked:opacity-100 peer-disabled:text-light-grey-1`
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>
      {title && (
        <label
          className="cursor-pointer text-base text-main-black"
          htmlFor={id}
        >
          {title}
        </label>
      )}
    </div>
  );
};
