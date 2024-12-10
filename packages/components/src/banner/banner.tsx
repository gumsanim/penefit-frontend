// import Image from "next/image";
// import cart from "@png/cart.png";

import { BannerProps } from "./banner.types";

const Banner = ({ children, ...props }: BannerProps) => {
  return (
    <div {...props} className="x_center border-2 border-red-100">
      {children}
    </div>
  );
};

export default Banner;
