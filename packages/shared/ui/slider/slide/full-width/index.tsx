import { FC } from "react";

import { Banner } from "@shared/interfaces/banners";

import { SlideProps } from "../../types";
import { SliderSlideImage } from "../image";
import { SliderSlideVideo } from "../video";

export const SliderSlideFullWidth: FC<SlideProps<Banner>> = ({
  slide,
  isActive,
  className,
  onNextSlide: handleNextSlide,
}) => {
  const { isVideo } = slide;

  if (isVideo) {
    return (
      <SliderSlideVideo
        lazy
        slide={slide}
        isActive={isActive}
        className={className}
        onNextSlide={handleNextSlide}
      />
    );
  }

  return (
    <SliderSlideImage
      slide={slide}
      isActive={isActive}
      className={className}
      onNextSlide={handleNextSlide}
    />
  );
};
