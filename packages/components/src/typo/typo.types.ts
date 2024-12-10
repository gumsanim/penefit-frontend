import { HTMLAttributes } from "react";

interface TypoProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  className: "body1" | "body2" | "body3" | "heading1" | "heading2" | "heading3";
}

export type { TypoProps };
