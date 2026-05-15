interface profileProps {
  icon?: React.ReactNode;
  bgImg?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  className?: string;
  border?: string;
  onClick?: () => void;
}

const Profile = ({
  icon,
  bgImg,
  borderRadius,
  width,
  height,
  className,
  border = "border-white",
  onClick,
}: profileProps) => {
  return (
    <>
      <div
        className={`${className ? className : ""} ${borderRadius ? borderRadius : "rounded-lg"} ${width ? width : "30px"} ${height ? height : "40px"} ${border} border`}
      >
        <div onClick={onClick} className="cursor-pointer">
          {icon ? (
            <div className="text-3xl px-1 py-1 bg-black rounded-lg">{icon}</div>
          ) : (
            bgImg && <div>{bgImg}</div>
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
