import { FC, ReactNode } from "react";

interface FilterBlockItemsProps {
  children?: ReactNode;
}

export const FilterBlockItems: FC<FilterBlockItemsProps> = ({ children }) => (
  <ul className="filter_block__items">{children}</ul>
);
