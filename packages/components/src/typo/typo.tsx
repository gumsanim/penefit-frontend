import type { TypoProps } from "./typo.types";

const Typo = ({ children, ...props }: TypoProps) => {
  return <span {...props}>{children}</span>;
};

export default Typo;
