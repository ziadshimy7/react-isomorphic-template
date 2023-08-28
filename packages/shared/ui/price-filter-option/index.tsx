import { FC, useCallback, useState, useEffect, SyntheticEvent } from "react";

import { RangeSlider } from "../range-slider";

import { Input } from "./input";

import "./index.scss";

interface PriceFilterOptionProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange?: (range: [number, number]) => void;
}

export const PriceFilterOption: FC<PriceFilterOptionProps> = ({
  value,
  min,
  max,
  step = 99,
  onChange,
}) => {
  const [range, setRange] = useState<number[]>(value);

  useEffect(() => {
    setRange(value);
  }, [value]);

  const handleChangeRange = useCallback(
    (_: Event, newValue: number | number[]) => {
      if (Array.isArray(newValue)) {
        setRange(newValue);
      }
    },
    []
  );

  const handleChangeCommitted = useCallback(
    (_: Event | SyntheticEvent, newValue: number | number[]) => {
      if (onChange && Array.isArray(newValue)) {
        const [minValue, maxValue] = newValue;

        onChange([minValue, maxValue]);
      }
    },
    [onChange]
  );

  const handleChangeMin = (newValue: number) => {
    if (onChange) {
      const minValue = Math.min(newValue, value[1]);

      onChange([minValue, value[1]]);
    }
  };

  const handleChangeMax = (newValue: number) => {
    if (onChange) {
      const maxValue = Math.max(newValue, value[0]);

      onChange([value[0], maxValue]);
    }
  };

  return (
    <div className="price_filter_option">
      <div className="price_filter_option__inputs">
        <Input
          id="min"
          value={range[0]}
          defaultValue={min}
          min={min}
          max={max}
          onChange={handleChangeMin}
        >
          от
        </Input>
        <Input
          id="max"
          value={range[1]}
          defaultValue={max}
          min={min}
          max={max}
          onChange={handleChangeMax}
        >
          до
        </Input>
      </div>
      <RangeSlider
        value={range}
        step={step}
        min={min}
        max={max}
        onChange={handleChangeRange}
        onChangeCommitted={handleChangeCommitted}
      />
    </div>
  );
};
