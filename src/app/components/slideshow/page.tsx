"use client";
import React from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SlideIMG from "../../../../public/img/slide.png";
import { Pagination } from "swiper/modules";
import Image from "next/image";
type Props = {
  headText: string;
};
function SlideShow({ headText }: Props) {
  return (
    <div className="SlideShow">
      <div className="heading container">
        <p>{headText}</p>
        <button>SHOW ALL</button>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Image src={SlideIMG} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SlideIMG} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SlideIMG} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SlideIMG} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SlideIMG} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SlideIMG} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SlideIMG} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SlideIMG} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SlideIMG} alt="image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlideShow;
