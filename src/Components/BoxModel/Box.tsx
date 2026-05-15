interface BoxProps {
  children?: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  alignItems?: string;
  justifyContent?: string;
}

const Box = ({
  children,
  className,
  width,
  height,
  bgColor,
  borderRadius,
  padding,
  margin,
  alignItems,
  justifyContent,
}: BoxProps) => {
  return (
    <div
      className={`${className ? className : ""} ${width ? width : ""} ${height ? height : ""} ${bgColor ? bgColor : ""} ${borderRadius ? borderRadius : ""} ${padding ? padding : ""} ${margin ? margin : ""}  ${alignItems ? alignItems : "center"} ${justifyContent ? justifyContent : "center"}`}
    >
      {children}
    </div>
  );
};

export default Box;
