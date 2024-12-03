import { WrapperProps } from "./wrapper.types";

const Wrapper = ({ children, ...props }: WrapperProps) => (
  <div {...props}>{children}</div>
);

export default Wrapper;
