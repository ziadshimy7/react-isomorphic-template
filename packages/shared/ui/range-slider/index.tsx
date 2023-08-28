import Slider, { SliderProps } from "@mui/base/Slider";
import { FC } from "react";

import styles from "./index.module.scss";

export const RangeSlider: FC<SliderProps> = (props) => (
  <Slider
    slotProps={{
      root: { className: styles.slider__root },
      rail: { className: styles.slider__rail },
      track: { className: styles.slider__track },
      thumb: { className: styles.slider__thumb },
    }}
    {...props}
  />
);
