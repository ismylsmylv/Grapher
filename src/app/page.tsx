import Image from "next/image";
import Navbar from "./components/navbar/page";
import HeroImg from "../../public/img/Hero section video.png";
export default function Home() {
  return (
    <>
      <Navbar />
      <Image
        src={HeroImg}
        alt="Hero Image"
        style={{ width: "100vw", objectFit: "cover" }}
      />
    </>
  );
}
