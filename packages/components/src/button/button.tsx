import type { ButtonProps } from "./button.types";

const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props}>{children}</button>
);

export default Button;
