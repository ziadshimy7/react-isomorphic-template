import { Fragment } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export interface RadioOption {
  label: string;
  value?: number | string;
  subText?: string;
}

interface RadioButtonGroupProps<T extends FieldValues> {
  name: Path<T>;
  options: RadioOption[];
  label?: string;
  register: UseFormRegister<T>;
  error?: string;
  className?: string;
  required?: boolean;
  defaultValue?: number | string;
  disabled?: boolean;
  itemsClassName?: string;
  labelPosition?: "left" | "right";
  layout?: "horizontal" | "vertical";
}

export const RadioButtonGroup = <T extends FieldValues>({
  name,
  options,
  label,
  register,
  error,
  className = "",
  required = false,
  defaultValue,
  disabled = false,
  itemsClassName,
  labelPosition = "right",
  layout = "horizontal",
}: RadioButtonGroupProps<T>) => (
  <div className={twMerge("flex flex-col gap-2", className)}>
    {label && (
      <label htmlFor={name} className="text-lg font-medium">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    )}
    <div
      className={twMerge(
        "flex",
        layout === "horizontal" ? "flex-row flex-wrap gap-4" : "flex-col gap-4",
        itemsClassName
      )}
    >
      {options.map((option) => {
        const inputId = `${name}-${option.value}`;

        return (
          <Fragment key={option.value}>
            <div className="min-w-fit">
              <label
                htmlFor={inputId}
                className={twMerge(
                  "group flex touch-none select-none items-center gap-3",
                  disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                )}
              >
                {labelPosition === "left" && (
                  <span className="text-sm">{option.label}</span>
                )}
                <div className="relative h-5 w-5 shrink-0">
                  <input
                    id={inputId}
                    type="radio"
                    value={option.value}
                    disabled={disabled}
                    checked={
                      disabled ? defaultValue === option.value : undefined
                    }
                    defaultChecked={
                      !disabled ? defaultValue === option.value : undefined
                    }
                    {...(!disabled ? register(name) : {})}
                    className={twMerge(
                      "peer h-full w-full cursor-pointer appearance-none rounded-full border-2 border-main-primary outline-none transition-all",
                      "checked:border-main-primary checked:bg-white",
                      !disabled &&
                        "hover:border-main-primary hover:bg-main-secondary/10",
                      "focus-visible:ring-2 focus-visible:ring-main-primary focus-visible:ring-offset-2",
                      disabled &&
                        "border-[#64748B4D] checked:border-[#64748B4D]"
                    )}
                  />
                  <div
                    className={twMerge(
                      "pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
                      "opacity-0 transition-opacity peer-checked:opacity-100",
                      disabled ? "bg-[#64748B4D]" : "bg-main-primary"
                    )}
                  />
                </div>
                {labelPosition === "right" && <span>{option.label}</span>}
              </label>
              {option.subText && (
                <p className="mt-1 pl-8 text-sm text-gray-500">
                  {option.subText}
                </p>
              )}
            </div>
          </Fragment>
        );
      })}
    </div>
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);
