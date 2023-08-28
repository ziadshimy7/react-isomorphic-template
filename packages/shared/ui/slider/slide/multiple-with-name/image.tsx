import { FC, ReactNode, useEffect, useRef } from "react";

import { Link } from "@shared/components/link";
import { Banner } from "@shared/interfaces/banners";

interface SliderSlideImageProps {
  banner: Banner;
  isActive?: boolean;
  className?: string;
  onNextSlide?: () => void;
  children?: ReactNode;
}

export const SliderSlideImage: FC<SliderSlideImageProps> = ({
  banner: { link, target, displayDuration },
  isActive,
  className,
  onNextSlide,
  children,
}) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isActive && onNextSlide && displayDuration != null) {
      timeoutRef.current = setTimeout(() => {
        onNextSlide?.();
      }, displayDuration);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [displayDuration, isActive, onNextSlide]);

  if (target == null) {
    return (
      <div className={className}>
        <img src={link} alt="slide" />
        {children}
      </div>
    );
  }

  return (
    <Link className={className} to={target}>
      <img src={link} alt="slide" />
      {children}
    </Link>
  );
};
