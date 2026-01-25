import {
  ChangeEvent,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

import { useClickAway } from "@shared/utils/use-click-away";

interface Option {
  label: ReactNode;
  value: string | number;
}

interface SelectProps {
  options: Option[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  isSearchable?: boolean;
  className?: string;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  selectClassNames?: string;
  containerRef?: RefObject<HTMLElement>;
  defaultValue?: Option;
  isClearable?: boolean;
}

const usePosition = (
  triggerRef: RefObject<HTMLElement>,
  isOpen: boolean,
  containerRef?: RefObject<HTMLElement>
) => {
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (!isOpen || !triggerRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const containerRect = containerRef?.current?.getBoundingClientRect() || {
        top: 0,
        left: 0,
      };

      setPosition({
        top: triggerRect.bottom + window.scrollY - containerRect.top,
        left: triggerRect.left - containerRect.left,
        width: triggerRect.width,
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, triggerRef, containerRef]);

  return position;
};

export const Select = ({
  options,
  value,
  onChange,
  error,
  placeholder = "Выберите",
  isSearchable = false,
  className = "",
  disabled = false,
  containerRef,
  fullWidth = false,
  isClearable = true,
  selectClassNames,
  defaultValue,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const position = usePosition(triggerRef, isOpen);

  const selectedOption =
    options.find((opt) => String(opt.value) === String(value)) ?? defaultValue;
  const filteredOptions = options.filter((option) =>
    option?.label?.toString()?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useClickAway(dropdownRef.current, () => setIsOpen(false));

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionSelect = (optionValue: string | number) => {
    onChange(typeof value === "number" ? Number(optionValue) : optionValue);
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    onChange(typeof value === "number" ? 0 : "");
    setSearchTerm("");
  };

  const renderDropdown = () => {
    if (!isOpen) return null;

    const dropdown = (
      <ul
        ref={dropdownRef}
        className="absolute z-50 max-h-60 w-full overflow-auto rounded-md bg-main-background py-1 shadow-lg ring-black"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: `${position.width}px`,
        }}
      >
        {isSearchable && (
          <li className="px-4 py-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="поиск..."
              className="w-full border-none bg-transparent p-0 focus:outline-none"
            />
          </li>
        )}

        {filteredOptions.length === 0 ? (
          <li className="px-4 py-2 text-gray-400">Не найдено</li>
        ) : (
          filteredOptions.map((option) => (
            <li
              key={option.value}
              className={twMerge("cursor-pointer px-4 py-2 hover:bg-gray-300")}
            >
              <button
                onClick={() => handleOptionSelect(option.value)}
                type="button"
                className="w-full text-left"
              >
                {option.label}
              </button>
            </li>
          ))
        )}
      </ul>
    );

    return createPortal(dropdown, containerRef?.current || document.body);
  };

  return (
    <div className={twMerge("relative", fullWidth && "w-full", className)}>
      <button
        ref={triggerRef}
        type="button"
        className={twMerge(
          "flex w-full items-center justify-between rounded border border-gray-light bg-gray-input px-2 py-3 text-lg leading-none",
          error && "border-red-600",
          disabled ? "cursor-not-allowed bg-gray-50" : "cursor-pointer",
          selectClassNames,
          className
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span
          className={twMerge(
            "text-main-black",
            !selectedOption && "text-gray-dark",
            error && "text-red-600"
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <div className="flex items-center gap-2">
          {selectedOption && !disabled && isClearable && (
            <button
              aria-label="close list"
              type="button"
              onClick={handleClear}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              X
            </button>
          )}
          <p>{">"}</p>
          {/* <SwitcherIcon
            width={16}
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          /> */}
        </div>
      </button>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      {renderDropdown()}
    </div>
  );
};
