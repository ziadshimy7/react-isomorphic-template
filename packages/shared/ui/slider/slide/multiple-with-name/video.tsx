import { FC, useEffect, useRef } from "react";

import { Link } from "@shared/components/link";
import { Banner } from "@shared/interfaces/banners";

interface SliderSlideVideoProps {
  banner: Banner;
  isActive?: boolean;
  className?: string;
  loop?: boolean;
  onNextSlide?: () => void;
}

export const SliderSlideVideo: FC<SliderSlideVideoProps> = ({
  banner: { link, target },
  isActive,
  className,
  loop,
  onNextSlide: handleNextSlide,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

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
          <source src={link} />
        </video>
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
        <source src={link} />
      </video>
    </Link>
  );
};
