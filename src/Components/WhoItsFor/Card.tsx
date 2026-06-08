import BaseModuleCard from "../CommandSuite/BaseModuleCard";
import Divider from "../Line/Divider";
import TitleText from "../Text/TitleText";

interface cardProps {
  type?: string;
  clear?: string;
  description1?: string;
  description2?: string;
  Title?: string;
  text?: string;
}

const Card = ({
  text,
  Title,
  description1,
  description2,
  type,
  clear,
}: cardProps) => {
  return (
    <div className="">
      <BaseModuleCard className="px-6 py-2 !min-h-[400px] w-full">
        <div className="flex justify-between items-center">
          <TitleText text="OPERATION_TYPE" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gray-600" />
            <TitleText text="CLEARED" />
          </div>
        </div>

        <div>
          <span className="border border-red-500 p-2 text-red-500 ">
            {text}
          </span>
        </div>

        <div>
          <p className="text-white text-2xl">{Title}</p>
          <span className="mt-4 text-gray-500">
            <p>{description1}</p>
            <p>{description2}</p>
          </span>
        </div>
        <span>
          <Divider />
        </span>

        <div className="mt-4 flex items-center justify-between">
          <p>{type}</p>
          <p>{clear}</p>
        </div>
      </BaseModuleCard>
    </div>
  );
};

export default Card;
