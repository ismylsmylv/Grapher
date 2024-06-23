import React from "react";
import "./style.scss";
import Image from "next/image";
import PlaceHolderImage1 from "../../../../public/img/Image placeholder.png";
import PlaceHolderImage2 from "../../../../public/img/Image placeholder (1).png";
type Props = {
  side: string;
};

function Services({ side }: Props) {
  return (
    <div className="Services">
      <div className="content" style={{ order: side == "left" ? 1 : 0 }}>
        <div className="head">
          {side == "left" ? " PHOTOGRAPHY" : "VIDEOGRAPHY"}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nulla congue risus imperdiet
          est id neque arcu lacinia. Hac in pharetra tincidunt luctus quisque.
        </p>
        <button className="buttonWhite">ALL SERVICES</button>
      </div>
      <Image
        src={side == "left" ? PlaceHolderImage1 : PlaceHolderImage2}
        alt="PlaceHolderImage"
      />
    </div>
  );
}

export default Services;
