import ClickAwayListener from "@mui/base/ClickAwayListener";
import clsx from "clsx";
import {
  ChangeEventHandler,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { TextField } from "../text-field";
import { TextFieldProps } from "../text-field/types";

import { AutocompleteOptions } from "./options";

import "./index.scss";

interface AutocompleteProps<Option>
  extends Omit<TextFieldProps, "value" | "onChange"> {
  isLoading?: boolean;
  value?: Option | null;
  inputValue?: string;
  options: Option[];
  getOptionValue: (option: Option) => string;
  renderOption?: (option: Option) => ReactNode;
  onChangeInputValue?: (value: string) => void;
  onChange?: (option: Option | null) => void;
}

type AutocompleteInnerType = <Option>(
  props: AutocompleteProps<Option>,
  ref: ForwardedRef<HTMLInputElement>
) => ReactElement<Option>;

export const AutocompleteInner: AutocompleteInnerType = (
  {
    isLoading = false,
    inputValue = "",
    onChangeInputValue,
    value = null,
    options,
    getOptionValue,
    renderOption = getOptionValue,
    className,
    onChange,
    ...props
  },
  ref
) => {
  const [open, setOpen] = useState(false);
  const [innerInputValue, setInnerInputValue] = useState(inputValue);
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerInputValue(inputValue);
  }, [inputValue]);

  useEffect(() => {
    setInnerValue(value);
    setInnerInputValue(value ? getOptionValue(value) : "");
  }, [getOptionValue, value]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleChangeValue = (newValue: (typeof options)[number] | null) => {
    const newInputValue = newValue == null ? "" : getOptionValue(newValue);

    onChange?.(newValue);
    onChangeInputValue?.(newInputValue);
    setInnerValue(newValue);
    setInnerInputValue(newInputValue);

    handleClose();
  };

  const handleClickAwayClick = () => {
    handleChangeValue(innerInputValue === "" ? null : innerValue);
  };

  const handleChangeInputValue: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    onChangeInputValue?.(event.target.value);
    setInnerInputValue(event.target.value);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAwayClick}>
      <div className={clsx("autocomplete", className)}>
        <TextField
          variant="outline"
          ref={ref}
          className="autocomplete__text_field"
          value={innerInputValue}
          onClick={handleOpen}
          onFocus={handleOpen}
          onChange={handleChangeInputValue}
          {...props}
        />
        {open && (
          <AutocompleteOptions
            options={options}
            getOptionValue={getOptionValue}
            renderOption={renderOption}
            isLoading={isLoading}
            onChangeOption={handleChangeValue}
          />
        )}
      </div>
    </ClickAwayListener>
  );
};

type AutocompleteType = <Option>(
  props: AutocompleteProps<Option> & { ref: ForwardedRef<HTMLInputElement> }
) => ReactElement<Option>;

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- Переопределение типа
export const Autocomplete = forwardRef(AutocompleteInner) as AutocompleteType;
