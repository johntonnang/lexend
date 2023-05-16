import { FunctionComponent } from "react";
import DesignLanguageContainer from "./DesignLanguageContainer";

const LexendContainer: FunctionComponent = () => {
  return (
    <div className="bg-white w-[1728px] h-[602px] flex flex-row items-center justify-start gap-[150px] z-[1] text-left text-29xl text-black font-body-b1">
      <img
        className="relative w-[1009px] h-[602px] object-cover"
        alt=""
        src="/rectangle-115@2x.png"
      />
      <DesignLanguageContainer
        designLanguageText="Lexend’s design language"
        designPracticesText="Discover the practices our designers put to use when creating timeless products. "
        chairText="Read more"
      />
    </div>
  );
};

export default LexendContainer;
