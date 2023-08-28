import { FC, ReactNode } from "react";

import { Color } from "../color";

export interface FilterOptionLabelProps {
  label: ReactNode;
  secondaryLabel?: ReactNode;
  color?: string;
}

export const FilterOptionLabel: FC<FilterOptionLabelProps> = ({
  label,
  secondaryLabel,
  color,
}) => (
  <div className="filter_option__link__input__label">
    {color && (
      <Color
        className="filter_option__link__input__label__color"
        color={color}
      />
    )}
    <span className="filter_option__link__input__label__label">{label}</span>
    {secondaryLabel && (
      <span className="filter_option__link__input__label__secondary_label">
        {secondaryLabel}
      </span>
    )}
  </div>
);
