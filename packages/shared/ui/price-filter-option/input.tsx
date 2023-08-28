import {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useState,
  WheelEventHandler,
} from "react";

interface InputProps {
  id: string;
  value: number;
  min: number;
  max: number;
  defaultValue?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  children?: ReactNode;
}

const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
  if (/[+,.-]$/.test(event.key)) {
    event.preventDefault();
  }

  if (event.key === "Enter") {
    event.currentTarget.blur();
  }
};

const handleWheel: WheelEventHandler<HTMLInputElement> = (event) => {
  event.currentTarget.blur();
};

export const Input: FC<InputProps> = ({
  id,
  value,
  min,
  max,
  children,
  defaultValue = 0,
  onChange,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState(String(value));

  useEffect(() => {
    setInputValue(String(value));
    // onChange Необходимо для вызова повторного рендера, в том случае, если значение не изменилось
  }, [value, onChange]);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setInputValue(event.target.value);
    },
    []
  );

  const handleBlur = useCallback(() => {
    const newValue = Number(inputValue) || defaultValue;

    if (newValue === defaultValue) {
      return;
    }

    if (newValue < min || newValue > max) {
      setInputValue(String(defaultValue));
      onChange(defaultValue);
    } else {
      onChange(newValue);
    }
  }, [defaultValue, inputValue, max, min, onChange]);

  return (
    <label className="price_filter_option__inputs__input" htmlFor={id}>
      {children && (
        <span className="price_filter_option__inputs__input__text">
          {children}
        </span>
      )}
      <input
        className="price_filter_option__inputs__input__input"
        type="number"
        inputMode="numeric"
        id={id}
        min={min}
        max={max}
        disabled={disabled}
        value={inputValue}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onWheel={handleWheel}
      />
    </label>
  );
};
