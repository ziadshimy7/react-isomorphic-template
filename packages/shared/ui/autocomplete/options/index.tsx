import { Key, ReactNode, ReactElement } from "react";

interface AutocompleteProps<Option> {
  isLoading?: boolean;
  options: Option[];
  getOptionValue: (option: Option) => Key;
  renderOption: (option: Option) => ReactNode;
  onChangeOption: (option: Option) => void;
}

type AutocompleteOptionsType = <Option>(
  props: AutocompleteProps<Option>
) => ReactElement<Option> | null;

export const AutocompleteOptions: AutocompleteOptionsType = ({
  options,
  isLoading,
  getOptionValue,
  renderOption,
  onChangeOption,
}) => {
  const handleChangeOption = (option: (typeof options)[number]) => () => {
    onChangeOption(option);
  };

  if (isLoading) {
    return (
      <div className="autocomplete__options">
        <span className="autocomplete__options__loader">Подождите...</span>
      </div>
    );
  }

  if (options.length === 0) {
    return null;
  }

  return (
    <div className="autocomplete__options">
      <ul className="autocomplete__options__list">
        {options.map((option) => (
          <li
            key={getOptionValue(option)}
            className="autocomplete__options__list__item"
          >
            <button
              type="button"
              className="autocomplete__options__list__item__button"
              onClick={handleChangeOption(option)}
            >
              {renderOption(option)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
