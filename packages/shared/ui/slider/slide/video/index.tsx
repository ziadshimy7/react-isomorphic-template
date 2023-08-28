import { FC, ReactNode, useEffect, useRef } from "react";

import { Link } from "@shared/components/link";
import { Banner } from "@shared/interfaces/banners";

import { SlideProps } from "../../types";

interface SliderSlideVideoProps extends SlideProps<Banner> {
  lazy?: boolean;
  loop?: boolean;
  children?: ReactNode;
}

export const SliderSlideVideo: FC<SliderSlideVideoProps> = ({
  slide: { link, target },
  loop,
  lazy,
  isActive,
  className,
  onNextSlide: handleNextSlide,
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  const isLoading = lazy ? isActive : true;

  if (target == null) {
    return (
      <div className={className}>
        <video
          muted
          autoPlay
          playsInline
          loop={loop}
          ref={videoRef}
          onEnded={handleNextSlide}
        >
          {isLoading && <source src={link} />}
        </video>
        {children}
      </div>
    );
  }

  return (
    <Link to={target} className={className}>
      <video
        muted
        autoPlay
        playsInline
        loop={loop}
        ref={videoRef}
        onEnded={handleNextSlide}
      >
        {isLoading && <source src={link} />}
      </video>
      {children}
    </Link>
  );
};
