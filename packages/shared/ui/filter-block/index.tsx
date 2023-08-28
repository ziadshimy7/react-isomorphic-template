import clsx from "clsx";
import { FC } from "react";

import { FilterBlockItems } from "./filter-block-items";
import { FilterBlockProps } from "./types";

import "./index.scss";

export const FilterBlock: FC<FilterBlockProps> = ({
  footer,
  header,
  className,
  ...props
}) => (
  <li className={clsx("filter_block", className)}>
    {header}
    <FilterBlockItems {...props} />
    {footer}
  </li>
);
