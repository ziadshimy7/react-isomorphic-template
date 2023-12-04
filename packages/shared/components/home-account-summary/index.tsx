import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BankCard } from "../bank-card";
import "swiper/scss";
import "swiper/scss/pagination";

export const HomeAccountSummary: FC = () => (
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    pagination={{ clickable: true }}
    breakpoints={{
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      },
      1022: {
        slidesPerView: 1,
      },
      1560: {
        slidesPerView: 2,
      },
    }}
  >
    <SwiperSlide>
      <BankCard />
    </SwiperSlide>
    <SwiperSlide>
      <BankCard />
    </SwiperSlide>
    <SwiperSlide>
      <BankCard />
    </SwiperSlide>
    <SwiperSlide>
      <BankCard />
    </SwiperSlide>
  </Swiper>
);
