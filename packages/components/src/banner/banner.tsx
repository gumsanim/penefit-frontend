// import Image from "next/image";
import cart from "@png/cart.png";
import { BannerProps } from "./banner.types";

const Banner = () => {
  console.log(cart);
  return (
    <div>
      배너
      {/* <Image src={cart} alt={""} width={100} height={100} /> */}
    </div>
  );
};

export default Banner;
