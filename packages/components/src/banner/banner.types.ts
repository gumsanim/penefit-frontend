import { ImgHTMLAttributes } from "react";

interface BannerProps extends ImgHTMLAttributes<HTMLImageElement> {
  children: React.ReactNode;
}

export type { BannerProps };
