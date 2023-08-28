import clsx from "clsx";
import { FC } from "react";
import type { Swiper as SwiperClass } from "swiper";

import { Dialog, DialogProps } from "../dialog";
import { DialogTitle } from "../dialog/title";
import { Slider } from "../slider";

import styles from "./index.module.scss";

type DialogSliderProps = Omit<DialogProps, "children"> & {
  isModalOpen: boolean;
  photo: string[];
  isStatic?: boolean;
  currentIndex?: number;
  dynamicBullets?: boolean;
  onCloseModal: () => void;
  onSlideChange?: (swiper: SwiperClass) => void;
  renderBullet?: (index: number, className: string) => string;
};

export const DialogSlider: FC<DialogSliderProps> = ({
  renderBullet,
  isModalOpen,
  isStatic = false,
  onCloseModal: handleCloseModal,
  photo,
  onSlideChange: handleSlideChange,
  currentIndex = 0,
  dynamicBullets = false,
}) => (
  <Dialog
    onClose={handleCloseModal}
    width={1280}
    height={900}
    open={isModalOpen}
  >
    <DialogTitle onClose={handleCloseModal} />
    <Slider
      keyboard
      zoom
      isStatic={isStatic}
      className={styles.dialog_slider}
      slideClass={styles.dialog_slider__slide}
      slides={photo}
      currentIndex={currentIndex}
      preventClicks={false}
      pagination={{
        clickable: true,
        dynamicBullets,
        renderBullet,
      }}
      onSlideChange={handleSlideChange}
      renderSlide={({ slide, className }) => (
        <div className={clsx(className, "swiper-zoom-container")}>
          <img src={slide} alt="" loading="lazy" />
        </div>
      )}
    />
  </Dialog>
);
