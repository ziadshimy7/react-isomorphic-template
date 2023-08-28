import { FC } from "react";

import { Banner } from "@shared/interfaces/banners";

import { SlideProps } from "../../types";
import { SliderSlideImage } from "../image";
import { SliderSlideVideo } from "../video";

export const SliderSlideMultiple: FC<SlideProps<Banner>> = ({
  slide,
  className,
  onNextSlide: handleNextSlide,
}) => {
  const { isVideo } = slide;

  if (isVideo) {
    return (
      <SliderSlideVideo
        loop
        slide={slide}
        className={className}
        onNextSlide={handleNextSlide}
      />
    );
  }

  return (
    <SliderSlideImage
      slide={slide}
      className={className}
      onNextSlide={handleNextSlide}
    />
  );
};
