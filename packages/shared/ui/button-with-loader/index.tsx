import { LoadingStatus } from "@shared/store/loading/types";
import { ButtonHTMLAttributes, FC } from "react";
import { Loader } from "../loader";

interface ButtonWithLoaderProps {
  loadingStatus?: LoadingStatus;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonWithLoaderProps;

export const ButtonWithLoader: FC<ButtonProps> = ({
  loadingStatus = "initial",
  children,
  ...props
}) => {
  if (loadingStatus === "pending") {
    return (
      <button type="button" {...props}>
        <Loader />
      </button>
    );
  }

  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};
