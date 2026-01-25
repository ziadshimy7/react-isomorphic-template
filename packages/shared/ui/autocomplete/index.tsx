import { useEffect, useRef, useState, KeyboardEvent, ChangeEvent } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { notificationsStore } from "@shared/external-stores/notifications";
import { useClickAway } from "@shared/utils/use-click-away";
import { useDebounce } from "@shared/utils/use-debounce";

interface HasItemId {
  itemId: number;
  title?: string;
}

export interface AutocompleteOption<T> {
  name: string;
  value: T;
}

interface AutocompleteProps<T extends FieldValues, K> {
  options?: AutocompleteOption<K>[];
  value?: K | null;
  onChange?: (value: K | null) => void;
  onSearch?: (term: string) => Promise<AutocompleteOption<K>[]>;
  placeholder?: string;
  label?: string;
  name: Path<T>;
  register?: UseFormRegister<T>;
  className?: string;
  error?: string;
  required?: boolean;
  isClearable?: boolean;
  noOptionsMessage?: string;
}

export const Autocomplete = <T extends FieldValues, K>({
  options: initialOptions = [],
  value,
  onChange,
  onSearch,
  placeholder = "Выберите...",
  label,
  name,
  register,
  className = "",
  error,
  required = false,
  isClearable = true,
  noOptionsMessage = "Нет Резултата",
}: AutocompleteProps<T, K>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] =
    useState<AutocompleteOption<K>[]>(initialOptions);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<AutocompleteOption<K> | null>(null);
  const isInitialMount = useRef(true);
  const inputId = useRef(`autocomplete-${name}`);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const performSearch = async (term: string) => {
    if (!term || !onSearch) return;

    setLoading(true);
    try {
      const results = await onSearch(term);
      setOptions(results);
    } catch (error) {
      notificationsStore.actions.push({
        variant: "error",
        message: "что-то пошло не так",
        title: "",
      });
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useDebounce(performSearch, 300);

  const isItemWithId = (value: unknown): value is HasItemId =>
    typeof value === "object" && value !== null && "itemId" in value;

  const compareValues = (opt: AutocompleteOption<K>, value_: K): boolean => {
    if (isItemWithId(opt.value) && isItemWithId(value_)) {
      return opt.value.itemId === value_.itemId;
    }

    return opt.value === value_;
  };

  useEffect(() => {
    const handleInitialValue = async () => {
      if (!value || !onSearch) return;

      setLoading(true);
      try {
        const initialSearchTerm =
          isItemWithId(value) && value.title ? value.title : "";
        const results = await onSearch(initialSearchTerm);
        const matchingOption = results.find((opt) => compareValues(opt, value));

        if (matchingOption) {
          setSelectedOption(matchingOption);
          setSearchTerm(matchingOption.name);
        }
      } catch (error) {
        notificationsStore.actions.push({
          variant: "error",
          title: "",
          message: "что-то пошло не так",
        });
      } finally {
        setLoading(false);
      }
    };

    if (isInitialMount.current) {
      handleInitialValue();
      isInitialMount.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSearch]);

  useEffect(() => {
    if (!isInitialMount.current && value === null) {
      setSelectedOption(null);
      setSearchTerm("");
    }
  }, [value]);

  const handleClickOutside = () => {
    if (containerRef.current) {
      setIsOpen(false);

      if (selectedOption) {
        setSearchTerm(selectedOption.name);
      }
    }
  };

  useClickAway(containerRef.current, handleClickOutside);

  const handleSelect = (option: AutocompleteOption<K>) => {
    setSelectedOption(option);
    setSearchTerm(option.name);
    onChange?.(option.value);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedOption(null);
    setSearchTerm("");
    onChange?.(null);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setIsOpen(true);
    setSearchTerm(term);

    if (!term) {
      handleClear();
    } else if (!onSearch) {
      const filtered = initialOptions.filter((option) =>
        option.name.toLowerCase().includes(term.toLowerCase())
      );
      setOptions(filtered);
    } else {
      debouncedSearch(term);
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    option: AutocompleteOption<K>
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSelect(option);
    }
  };

  const registerProps = register ? register(name) : {};

  return (
    <div className={twMerge("relative w-full", className)} ref={containerRef}>
      {label && (
        <label
          htmlFor={inputId.current}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId.current}
          type="text"
          ref={inputRef}
          {...registerProps}
          className={twMerge(
            "w-full rounded-lg border px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500",
            error ? "border-red-500" : "border-gray-300"
          )}
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => {
            if (searchTerm) {
              setIsOpen(true);
            }
          }}
        />

        {isClearable && selectedOption && !isOpen && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {isOpen && (
        <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white shadow-lg">
          {(() => {
            if (loading) {
              return <li className="px-4 py-2 text-gray-500">Загрузка...</li>;
            }

            if (options.length > 0) {
              return options.map((option) => (
                <li
                  key={option.name}
                  className={twMerge(
                    "w-full cursor-pointer px-4 py-2 hover:bg-gray-100",
                    selectedOption?.name === option.name && "bg-blue-50"
                  )}
                >
                  <button
                    type="button"
                    tabIndex={0}
                    className="w-full text-left"
                    onClick={() => handleSelect(option)}
                    onKeyDown={(event) => handleKeyDown(event, option)}
                  >
                    {option.name}
                  </button>
                </li>
              ));
            }

            return (
              <li className="px-4 py-2 text-gray-500">{noOptionsMessage}</li>
            );
          })()}
        </ul>
      )}
    </div>
  );
};
