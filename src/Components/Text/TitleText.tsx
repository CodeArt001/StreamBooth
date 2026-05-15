interface TitleTextProps {
  text: string;
  color?: string;
  size?: string;
  weight?: string;
  align?: string;
  className?: string;
  width?: string | number;
}

const TitleText = ({
  text,
  color,
  className,
  size,
  weight,
  align,
  width,
}: TitleTextProps) => {
  return (
    <>
      <div
        className={`${className ? className : ""} ${color ? color : "text-white"} ${size ? size : "text-sm"} ${weight ? weight : "font-normal"} ${align ? align : ""} `}
        style={{ width }}
      >
        {text}
      </div>
    </>
  );
};
export default TitleText;
