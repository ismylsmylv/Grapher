import React from "react";
import Image from "next/image";
import "./style.scss";
import HeroImg from "../../../../public/img/Hero section video.png";
import PlaceHolder from "@/app/components/placeholder/page";
import Services from "@/app/components/services/page";
import SlideShow from "@/app/components/slideshow/page";
type Props = {};

function HomePage({}: Props) {
  return (
    <div className="Home">
      <Image
        src={HeroImg}
        alt="Hero Image"
        style={{ width: "100%", objectFit: "cover" }}
      />
      <PlaceHolder />
      <Services side="left" />
      <Services side="right" />
      <SlideShow headText="LATEST PHOTOGRAPHY WORKS" />
      <SlideShow headText="LATEST VIDEOGRAPHY WORKS" />
    </div>
  );
}

export default HomePage;
