import type { RowProps, RowBoxProps, RowItemProps } from "./row.types";

const Row = ({ children, ...props }: RowProps) => {
  return (
    <div {...props} className="space_between border-spacing-1">
      {children}
    </div>
  );
};

const RowBox = ({ children, ...props }: RowBoxProps) => {
  return (
    <div {...props} className="xy_center">
      {children}
    </div>
  );
};

const RowItem = ({ children, ...props }: RowItemProps) => {
  return <div {...props}>{children}</div>;
};

Row.Box = RowBox;
Row.Item = RowItem;

export default Row;
