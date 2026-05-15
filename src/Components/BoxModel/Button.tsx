interface buttonProps {
  text?: string;
  bgColor?: string;
  icon?: React.ReactNode;
  className?: string;
  borderRadius?: string;
  color?: string;
  weight?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  bgColor,
  icon,
  className,
  borderRadius,
  color,
  weight,
  onClick,
}: buttonProps) => {
  return (
    <>
      {icon && <div>{icon}</div>}
      <div
        onClick={onClick}
        className={`${className ? className : ""} ${bgColor ? bgColor : "bg-zinc-800"} ${color ? color : ""} ${weight ? weight : "font-bold"} ${borderRadius ? borderRadius : "rounded-lg"} text-center flex items-center gap-2 cursor-pointer transition-all
        px-8 py-3 `}
      >
        {text}
      </div>
    </>
  );
};
export default Button;
