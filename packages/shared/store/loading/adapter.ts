import { createEntityAdapter } from "@reduxjs/toolkit";
import { LoadingItem } from "./types";

export const loadingEntityAdapter = createEntityAdapter<LoadingItem>({
  selectId: (loadingItem) => loadingItem.typePrefix,
});
