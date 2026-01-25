import React, { useState, useEffect, useRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { useClickAway } from "@shared/utils/use-click-away";
import { useDebounce } from "@shared/utils/use-debounce";

import { TextField } from "../text-field/input";

interface MultipleAutocompleteProps<T> {
  value: (string | number)[] | null;
  onChange: (value: (string | number)[] | null) => void;
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string | number;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  fetchOptions: (searchTerm: string) => Promise<T[]>;
  defaultValue?: string | number | (string | number)[] | null;
  endElement?: ReactNode;
  error?: string;
}

export const MultipleAutocomplete = <T,>({
  value,
  onChange,
  getOptionLabel,
  getOptionValue,
  placeholder,
  className = "",
  disabled = false,
  fetchOptions,
  defaultValue,
  endElement = <p>search icon</p>,
  error,
}: MultipleAutocompleteProps<T>): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<T[]>([]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const isOptionSelected = (option: T): boolean => {
    const optionValue = getOptionValue(option);

    if (Array.isArray(value)) {
      return value.includes(optionValue);
    }

    return false;
  };

  const debouncedSearch = useDebounce(async (term: string) => {
    if (term.length > 1) {
      try {
        const fetchedOptions = await fetchOptions(term);
        setFilteredOptions(fetchedOptions);
        setIsOpen(true);
      } catch (error) {
        setFilteredOptions([]);
      }
    } else {
      setFilteredOptions([]);
      setIsOpen(false);
    }
  }, 800);

  useEffect(() => {
    if (inputValue.trim().length > 1) {
      debouncedSearch(inputValue);
      setIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  useClickAway(wrapperRef.current, () => {
    setIsOpen(false);
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleOptionSelect = (option: T) => {
    const optionValue = getOptionValue(option);

    const currentValues = Array.isArray(value) ? [...value] : [];
    const index = currentValues.indexOf(optionValue);

    if (index === -1) {
      onChange([...currentValues, optionValue]);
    } else {
      const newValues = [...currentValues];
      newValues.splice(index, 1);
      onChange(newValues);
    }

    setInputValue("");
    setIsOpen(false);

    inputRef.current?.focus();
  };

  const renderDropdown = () => {
    if (!isOpen) return null;

    const content = (
      <ul
        ref={dropdownRef}
        className="absolute z-50 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-main-background shadow-lg"
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <li
              key={getOptionValue(option)}
              className={twMerge("cursor-pointer px-4 py-2")}
            >
              <button
                type="button"
                onMouseDown={() => handleOptionSelect(option)}
                className="flex w-full text-left"
              >
                {getOptionLabel(option)}
                {isOptionSelected(option) && " ✓"}
              </button>
            </li>
          ))
        ) : (
          <p className="w-full text-center">Нет данных</p>
        )}
      </ul>
    );

    return content;
  };

  return (
    <div ref={wrapperRef} className={twMerge("relative", className)}>
      <div className="relative">
        <TextField
          ref={inputRef}
          type="text"
          onClick={handleInputFocus}
          defaultValue={defaultValue?.toString()}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          disabled={disabled}
          endElement={endElement}
          error={error != null}
          helperText={error}
          className="w-full px-4 py-2"
        />
      </div>
      {renderDropdown()}
      {value != null && value.length > 0 && (
        <div className="mt-2">
          {value.map((label) => (
            <span
              key={label}
              className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {label}
              <button
                type="button"
                onClick={() => {
                  const newValues = value
                    .filter((value) => value !== label)
                    .map(String);
                  onChange(newValues);
                }}
                className="ml-2 focus:outline-none"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
