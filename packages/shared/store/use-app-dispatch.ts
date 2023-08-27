import { AppDispatch } from "packages/global-types/types";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
