import { ImgHTMLAttributes } from "react";

interface BannerProps extends ImgHTMLAttributes<HTMLImageElement> {
  width: number | string;
  height: number | string;
}

export type { BannerProps };
