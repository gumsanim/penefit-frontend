import Image from "next/image";
import { BannerProps } from "./banner.types";
import cart from "@assets/cart.png";

const Banner = ({ src, alt, width, height, ...props }: BannerProps) => {
  const imageWidth = typeof width === "number" ? width : `${width}`;
  const imageHeight = typeof height === "number" ? height : `${height}`;
  return (
    <div>
      <Image
        src={src ?? cart}
        alt={alt ?? ""}
        width={imageWidth as number | `${number}`}
        height={imageHeight as number | `${number}`}
        {...props}
      />
    </div>
  );
};

export default Banner;
