import { FC, ReactNode, useEffect, useRef } from "react";

import { Link } from "@shared/components/link";
import { Banner } from "@shared/interfaces/banners";

import { SlideProps } from "../../types";

interface SliderSlideImageProps extends SlideProps<Banner> {
  children?: ReactNode;
}

export const SliderSlideImage: FC<SliderSlideImageProps> = ({
  slide: { link, target, displayDuration },
  isActive: autoplay,
  className,
  onNextSlide,
  children,
}) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (autoplay && onNextSlide && displayDuration != null) {
      timeoutRef.current = setTimeout(() => {
        onNextSlide?.();
      }, displayDuration);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [displayDuration, autoplay, onNextSlide]);

  if (target == null) {
    return (
      <div className={className}>
        <img src={link} alt="slide" loading="lazy" />
        {children}
      </div>
    );
  }

  return (
    <Link className={className} to={target}>
      <img src={link} alt="slide" loading="lazy" />
      {children}
    </Link>
  );
};
