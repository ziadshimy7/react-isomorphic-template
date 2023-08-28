import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { isWhiteColor } from "@shared/utils/is-white-color";

import "./index.scss";

interface ColorProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
  size?: "small" | "medium" | "large";
}

export const Color: FC<ColorProps> = ({
  color,
  size = "medium",
  className,
  style,
  ...props
}) => (
  <span
    className={clsx(
      className,
      "color",
      `color--${size}`,
      isWhiteColor(color) && "color--border"
    )}
    style={{
      ...style,
      background: color,
    }}
    {...props}
  />
);
