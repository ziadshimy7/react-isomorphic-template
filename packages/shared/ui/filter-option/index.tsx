import { FC } from "react";
import { To } from "react-router-dom";

import { Link } from "@shared/components/link";
import { CatalogFilterType } from "@shared/interfaces/catalog";

import { Checkbox, CheckboxProps } from "../checkbox";
import { Radio, RadioProps } from "../radio";

import {
  FilterOptionLabel,
  FilterOptionLabelProps,
} from "./filter-option-label";

import "./index.scss";

interface FilterOptionProps extends CheckboxProps, RadioProps {
  FilterOptionProps: FilterOptionLabelProps;
  to: To;
  type?: CatalogFilterType.Checkbox | CatalogFilterType.Radio;
}

export const FilterOption: FC<FilterOptionProps> = ({
  to,
  FilterOptionProps,
  type = CatalogFilterType.Checkbox,
  ...props
}) => {
  if (type === CatalogFilterType.Checkbox) {
    return (
      <li className="filter_option">
        <Link className="filter_option__link" to={to}>
          <Checkbox className="filter_option__link__input" {...props}>
            <FilterOptionLabel {...FilterOptionProps} />
          </Checkbox>
        </Link>
      </li>
    );
  }

  return (
    <li className="filter_option">
      <Link className="filter_option__link" to={to}>
        <Radio className="filter_option__link__input" {...props}>
          <FilterOptionLabel {...FilterOptionProps} />
        </Radio>
      </Link>
    </li>
  );
};
