import { uiSlice } from "@shared/store/slices/ui";
import { Meta } from "@shared/store/types/ui";
import { useAppDispatch } from "@shared/store/use-app-dispatch";
import { useEffect } from "react";

export const useSetMeta = (meta: Meta) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(uiSlice.actions.setMeta(meta));
  }, [dispatch, meta]);
};
