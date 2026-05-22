interface buttonProps {
  text?: string;
  bgColor?: string;
  icon?: React.ReactNode;
  className?: string;
  borderRadius?: string;
  color?: string;
  weight?: string;
  paddindtb?: string;
  paddinglr?: string;
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
  paddindtb,
  paddinglr,
  onClick,
}: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${className ? className : ""} ${bgColor ? bgColor : "bg-zinc-800"} ${color ? color : ""} ${weight ? weight : "font-bold"} ${borderRadius ? borderRadius : "rounded-lg"} ${paddindtb ? paddindtb : " py-3"} ${paddinglr ? paddinglr : "px-8"} text-center flex items-center justify-center gap-2 cursor-pointer transition-all`}
      >
        {icon && <div>{icon}</div>}

        {text && <div className="text-center">{text}</div>}
      </button>
    </>
  );
};
export default Button;
