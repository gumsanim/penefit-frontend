import type { HeaderProps } from "./header.types";

const Header = ({ children, ...props }: HeaderProps) => (
  <header {...props}>{children}</header>
);

export default Header;
