import { HTMLAttributes } from "react";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  className: "xy_center" | "y_center" | "x_center" | "space_between";
  children: React.ReactNode;
}

interface RowBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface RowItemProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export type { RowProps, RowBoxProps, RowItemProps };
