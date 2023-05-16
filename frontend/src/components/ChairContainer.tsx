import { FunctionComponent } from "react";
import DesignLanguageContainer from "./DesignLanguageContainer";

const ChairContainer: FunctionComponent = () => {
  return (
    <div className="bg-white w-[1728px] h-[615px] flex flex-row items-center justify-end gap-[150px] z-[2]">
      <DesignLanguageContainer
        designLanguageText="The significance of choosing the right chair"
        designPracticesText="Chat or schedule a personal meeting with one of our experts on interior design to perfect your style."
        chairText="Get in touch"
        propJustifyContent="flex-start"
        propWidth="476px"
      />
      <img
        className="relative w-[931px] h-[615px] object-cover"
        alt=""
        src="/rectangle-116@2x.png"
      />
    </div>
  );
};

export default ChairContainer;
