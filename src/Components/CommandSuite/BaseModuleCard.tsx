import border from "../../assets/images/Border.png";
import border2 from "../../assets/images/Border2.png";

interface BaseModuleCardProps {
  icon: React.ReactNode;
  tagCode: string;
  children: React.ReactNode;
}

export const BaseModuleCard: React.FC<BaseModuleCardProps> = ({
  icon,
  tagCode,
  children,
}) => {
  return (
    <div className="w-full bg-[#0F0E17] border border-[#1a1a2e] rounded-sm p-6 relative flex flex-col justify-between overflow-hidden group hover:border-[#7B61FF]/30 hover:bg-[#111124]/60 transition-all duration-300 min-h-[500px]">
      <img
        src={border}
        alt="border-img"
        className="w-3 h-3 absolute left-0 top-0"
      />

      <img
        src={border2}
        alt="border-img"
        className="w-3 h-3 absolute right-0 top-0"
      />

      {/* Top Decoration Node Meta Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="p-2 bg-[#0a0a12] border border-[#1a1a2e] rounded">
          {icon}
        </div>
        <span className="font-mono text-[9px] text-[#444455] tracking-widest uppercase font-bold">
          {tagCode}
        </span>
      </div>

      {/* Embedded Feature Component Layout Payload */}
      {children}
    </div>
  );
};

export default BaseModuleCard;
