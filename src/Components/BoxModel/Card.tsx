import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";

interface CardProps {
  bgImg?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  bgColor?: string;
  badgeText?: string;
  className?: string;
}

const Card = ({
  bgColor,
  bgImg,
  title,
  description,
  icon,
  badgeText,
  className,
}: CardProps) => {
  const backgroundStyle = bgImg
    ? { backgroundImage: `url(${bgImg})`, backgroundColor: "black" }
    : { backgroundColor: bgColor };
  return (
    <>
      <div
        className={`w-72 overflow-hidden rounded-lg shadow-lg group cursor-pointer ${className ? className : ""}`}
      >
        <div
          className={`relative h-40 w-full bg-cover bg-center ${!bgImg ? bgColor : ""}`}
          style={backgroundStyle}
        >
          {badgeText && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse">
                {badgeText}
              </span>
            </div>
          )}
        </div>
        <div className="bg-[#18181b] p-3 flex items-start gap-3">
          {icon && (
            <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center border border-zinc-700">
              {icon}
            </div>
          )}
        </div>

        <div className="">
          <TitleText
            text={title ?? ""}
            weight="font-semibold"
            className="truncate mt-0.5"
          />
        </div>
        <div>
          <DescriptionText text={description ?? ""} />
        </div>
      </div>
    </>
  );
};
