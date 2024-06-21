import React from "react";
import Image from "next/image";
import "./style.scss";
import HeroImg from "../../../../public/img/Hero section video.png";
import PlaceHolder from "@/app/components/placeholder/page";
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
    </div>
  );
}

export default HomePage;
