interface DescriptionTextProps {
  text: string;
  color?: string;
  size?: string;
  weight?: string;
  align?: string;
  className?: string;
  width?: string | number;
}

const DescriptionText = ({
  text,
  color,
  size,
  weight,
  align,
  className,
  width,
}: DescriptionTextProps) => {
  return (
    <>
      <div
        className={`${className ? className : ""} ${color ? color : "text-gray-500"} ${size ? size : "text-sm"} ${weight ? weight : "font-normal"} ${align ? align : ""} `}
        style={{ width }}
      >
        {text}
      </div>
    </>
  );
};

export default DescriptionText;
