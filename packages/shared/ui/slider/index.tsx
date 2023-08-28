import clsx from "clsx";
import React, {
  FC,
  Fragment,
  MouseEventHandler,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Lazy,
  Mousewheel,
  Keyboard,
  Zoom,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { ZoomOptions } from "swiper/types/components/zoom";

import { take } from "@shared/utils/arrays/take";

import styles from "./index.module.scss";
import { SlideProps } from "./types";

import "./index.scss";

SwiperCore.use([Navigation, Pagination, Lazy, Mousewheel, Keyboard, Zoom]);

const sliderOptionalStyles = (
  slidesPerView: number | "auto",
  hasZoom?: boolean | ZoomOptions,
  zoomedIn = false
): React.CSSProperties => {
  let width: "auto" | undefined;
  let cursor: "zoom-in" | "zoom-out" | "pointer" = "pointer";

  if (slidesPerView === "auto") {
    width = "auto";
  }

  if (hasZoom) {
    cursor = zoomedIn ? "zoom-out" : "zoom-in";
  }

  return {
    width,
    cursor,
  };
};

interface SliderProps<Slide> extends Swiper {
  isStatic?: boolean;
  slides?: Slide[];
  renderSlide: FC<SlideProps<Slide>>;
  onSlideClick?: () => void;
  currentIndex?: number;
}

type SliderComponentType = <Slide>(props: SliderProps<Slide>) => ReactElement;

export const Slider: SliderComponentType = ({
  isStatic,
  slides = [],
  autoplay = false,
  slideClass,
  renderSlide,
  className,
  slidesPerView = 1,
  currentIndex = 0,
  onSlideClick,
  zoom = false,
  ...props
}) => {
  const swiperInstance = useRef<SwiperCore>();
  const [isZoomed, setIsZoomed] = useState(false);

  const handleSwiper = useCallback((swiper: SwiperCore) => {
    swiperInstance.current = swiper;
  }, []);

  const handleNextSlide = useCallback(() => {
    if (autoplay) {
      swiperInstance.current?.slideNext();
    }
  }, [autoplay]);

  const handleSlideClick = useCallback<MouseEventHandler>(
    (event) => {
      if (onSlideClick) {
        onSlideClick();

        return;
      }

      if (zoom && swiperInstance.current != null) {
        if (swiperInstance.current.zoom.scale === 1) {
          // @ts-expect-error -- Некорректные типы
          swiperInstance.current.zoom.in(event);
          setIsZoomed(true);
        } else {
          // @ts-expect-error -- Некорректные типы
          swiperInstance.current.zoom.out(event);
          setIsZoomed(false);
        }
      }
    },
    [zoom, onSlideClick]
  );

  useEffect(() => {
    if (swiperInstance.current && currentIndex > 0) {
      swiperInstance.current.slideTo(currentIndex);
    }
  }, [currentIndex]);

  if (isStatic) {
    if (slidesPerView === "auto") {
      return (
        <div className={styles.scroll_container}>
          <div className={clsx(className, styles.scroll_container__inner)}>
            {slides.map((slide, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                {renderSlide({
                  onNextSlide: handleNextSlide,
                  slide,
                  className: slideClass,
                })}
              </Fragment>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className={className}>
        {take(slidesPerView, slides).map((slide, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={index}>
            {renderSlide({
              onNextSlide: handleNextSlide,
              slide,
              className: slideClass,
            })}
          </Fragment>
        ))}
      </div>
    );
  }

  return (
    <Swiper
      onSwiper={handleSwiper}
      className={className}
      slidesPerView={slidesPerView}
      navigation
      zoom={zoom}
      {...props}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={sliderOptionalStyles(slidesPerView, zoom, isZoomed)}
          onClick={handleSlideClick}
        >
          {({ isActive }) =>
            renderSlide({
              isActive,
              onNextSlide: handleNextSlide,
              slide,
              className: slideClass,
            })
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
