import { useEffect } from "react";

import { GetInitialMeta } from "@shared/lib/dynamic";

import { uiSlice } from "./slice";
import { LoadingStatus } from "../loading/types";
import { useAppDispatch } from "../hooks";
import { useAppStore } from "../use-app-store";

export const useInitialMeta = (
  getInitialMeta: GetInitialMeta,
  loadingStatus: LoadingStatus = LoadingStatus.Fulfilled,
) => {
  const dispatch = useAppDispatch();
  const store = useAppStore();

  useEffect(() => {
    if (loadingStatus === LoadingStatus.Fulfilled) {
      const meta = getInitialMeta({ store });

      if (meta) {
        dispatch(uiSlice.actions.setMeta(meta));
      }
    }
  }, [dispatch, getInitialMeta, loadingStatus, store]);
};
