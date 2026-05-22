import PriceCard from "./PriceCard";

interface PriceCardProps {
  tier?: {
    index: number;
    name?: string;
  };
  price?: string | number;
  features?: string[];
  isRecommended?: boolean;
}

const AccessTierSection = ({
  tier,
  price = "",
  features,
  isRecommended,
}: PriceCardProps) => {
  return (
    <div>
      <>
        <div className="flex flex-col items-center text-center py-12">
          {/* Main Title - Space Grotesk */}
          <h2 className="font-display text-2xl md:text-4xl font-medium tracking-[0.2em] text-white uppercase mb-2">
            Choose Your Access Tier
          </h2>
          <p className="font-console text-[10px] md:text-2xl tracking-[0.4em] text-access-dark-gray uppercase">
            Scalable Architecture For Any Operation Size
          </p>
        </div>

        <div className=" mx-auto px-[10rem] pt-2 pb-34">
          {/* 1. Grid Container (The Parent) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 01 */}
            <PriceCard
              tier={{ index: 1, name: "OBSERVER" }}
              price="0"
              features={[
                "1 STREAM SOURCE",
                "BASIC CHAT MATRIX",
                "CORE DASHBOARD",
              ]}
            />

            {/* Card 02 (The Recommended one) */}
            <PriceCard
              isRecommended
              tier={{ index: 2, name: "COMMAND" }}
              price="..."
              features={[
                "UNLIMITED STREAM SOURCES",
                "ADVANCED SENTIMENT ENGINE",
                "PRIORITY SIGNAL ROUTING",
              ]}
            />

            {/* Card 03 */}
            <PriceCard
              tier={{ index: 3, name: "DIRECTOR" }}
              price="..."
              features={[
                "EVERYTHING IN COMMAND",
                "WHITE-LABEL TERMINAL",
                "API SIGNAL ACCESS",
              ]}
            />
          </div>
        </div>
      </>
    </div>
  );
};
export default AccessTierSection;
