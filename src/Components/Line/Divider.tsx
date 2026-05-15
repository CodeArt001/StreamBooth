interface DividerProps {
  className?: string;
}
const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div
      className={`w-full flex flex-col  relative z-10 pt-3 pb-3 px-5 ${className}`}
    >
      <div className="w-full h-[1px] bg-white/[0.3]" />
    </div>
  );
};

export default Divider;
