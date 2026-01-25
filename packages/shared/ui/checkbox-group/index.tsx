interface Option {
  label: string;
  value: string | number;
  sublabel?: string;
}

interface CheckboxGroupProps {
  options: Option[];
  label?: string;
  error?: string;
  className?: string;
  required?: boolean;
  color?: string;
  onChange: (value: (string | number)[]) => void;
  value: (string | number)[];
}

export const CheckboxGroup = ({
  options,
  label,
  error,
  className = "",
  required = false,
  onChange: handleChange,
  value,
  color = "#316D86",
}: CheckboxGroupProps) => (
  <div className={`space-y-2 ${className}`}>
    {label && (
      <p className="block text-lg font-medium text-gray-dark">
        {label}
        {required && <span>*</span>}
      </p>
    )}
    <div className="flex flex-col gap-6">
      {options.map((option) => (
        <div className="flex flex-col gap-2" key={`${option.value}`}>
          <label
            htmlFor={`${option.value}`}
            key={option.value}
            className="group mr-4 inline-flex cursor-pointer items-center"
          >
            <div className="relative">
              <input
                id={`${option.value}`}
                type="checkbox"
                checked={value?.includes(option.value)}
                onChange={(event) => {
                  const newValue = event.target.checked
                    ? [...(value || []), option.value]
                    : (value || []).filter(
                        (v: string | number) => v !== option.value
                      );
                  handleChange(newValue);
                }}
                className="peer hidden"
              />
              <div
                className="h-5 w-5 rounded-md border-2 border-gray-dark transition-all duration-200 group-hover:border-current peer-checked:border-0 peer-checked:bg-current peer-checked:bg-checked"
                style={{ color }}
              >
                <svg
                  className="h-full w-full scale-0 transition-transform duration-200 peer-checked:scale-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17L4 12" />
                </svg>
              </div>
            </div>
            <span className="ml-2 text-base">{option.label}</span>
          </label>
          {option.sublabel && (
            <span className="text-sm">{option.sublabel}</span>
          )}
        </div>
      ))}
    </div>
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);
