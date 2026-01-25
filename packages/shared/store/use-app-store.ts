import { useStore } from "react-redux";

import { RootStore } from "./types";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const useAppStore = (): RootStore => useStore() as RootStore;
