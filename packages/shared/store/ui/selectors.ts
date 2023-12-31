import { RootSelector } from "packages/global-types/types";
import { Meta } from "./types";

export const metaSelector: RootSelector<Meta | undefined> = (state) =>
  state.ui.meta;
