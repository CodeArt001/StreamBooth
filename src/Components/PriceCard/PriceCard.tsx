import { BaseModuleCard } from "../CommandSuite/BaseModuleCard";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";

interface PriceCardProps {
  tier: {
    name: string;
    index: number;
  };
  price?: string | number;
  features: string[];
  isRecommended?: boolean;
}

const PriceCard = ({
  tier,
  price,
  features,
  isRecommended = false,
}: PriceCardProps) => {
  return (
    <BaseModuleCard
      tagCode={`PROTOCOL 0${tier.index}`}
      icon={<div className="w-4 h-4 bg-gray-600 rounded-full" />} // Placeholder icon
    >
      {/* Recommended Tag */}
      {isRecommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-access-red text-black text-[18px] font-bold px-2 py-0.5 font-console uppercase">
          Recommended_Deployment
        </div>
      )}

      <div
        className={`flex flex-col flex-grow px-10 ${isRecommended ? "border-2 border-access-red/50 -m-1 py-4" : ""}`}
      >
        {/* Header Section */}
        <div className="mb-8 ">
          <TitleText
            text={tier.name}
            size="text-2xl"
            color={isRecommended ? "text-white" : "text-gray-400"}
            className="font-console"
          />
          <div className="flex items-baseline gap-1 mt-6">
            <span
              className={`text-4xl font-bold ${isRecommended ? "text-access-red" : "text-white"}`}
            >
              ${price}
            </span>
            <DescriptionText text="/mo" color="text-gray-500" />
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-5">
              <span
                className={`font-console text-16 ${isRecommended ? "text-access-red" : "text-access-cyan"}`}
              >
                check
              </span>
              <DescriptionText
                text={feature}
                color={isRecommended ? "text-white" : "text-gray-500"}
                size="text-[16px]"
              />
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          className={`w-full py-3 font-console font-bold uppercase tracking-widest transition-all mt-14
          ${
            isRecommended
              ? "bg-access-red text-black hover:bg-white"
              : "bg-transparent border border-gray-700 text-gray-400 hover:border-white hover:text-white"
          }`}
        >
          {isRecommended ? "Select Command" : "Initialize"}
        </button>
      </div>
    </BaseModuleCard>
  );
};
export default PriceCard;
