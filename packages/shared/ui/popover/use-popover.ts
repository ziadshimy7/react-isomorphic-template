import { useContext } from "react";

import { PopoverContext } from "./context";

export const usePopover = () => {
  const value = useContext(PopoverContext);

  return value;
};
