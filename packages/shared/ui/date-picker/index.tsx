import { ReactNode, forwardRef, useState } from "react";
import DatePicker, { ReactDatePicker } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface AuthDatePickerProps {
  children?: ReactNode;
  onChange: (value: string) => void;
  value: string;
}

export const AuthDatePicker = forwardRef<ReactDatePicker, AuthDatePickerProps>(
  function AuthDatePicker({ children, onChange, value }, ref) {
    const [dateValue, setDateValue] = useState<Date | undefined>(
      new Date(value)
    );

    const handleChange = (value: Date) => {
      setDateValue(value);
      const formatDate = new Intl.DateTimeFormat("ru-RU").format(value);
      onChange(formatDate);
    };

    return (
      <DatePicker
        selected={dateValue}
        placeholderText="Select date"
        onChange={handleChange}
        showYearDropdown
        maxDate={new Date()}
        dateFormat="dd-MM-yyyy"
        customInput={children}
        yearDropdownItemNumber={50}
        scrollableYearDropdown
        showMonthDropdown
        ref={ref}
      />
    );
  }
);
