import { uiSlice } from "@shared/store/ui/slice";
import { Meta } from "@shared/store/ui/types";
import { useAppDispatch } from "@shared/store/use-app-dispatch";
import { useEffect } from "react";

export const useSetMeta = (meta: Meta) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(uiSlice.actions.setMeta(meta));
  }, [dispatch, meta]);
};
