import { FunctionComponent } from "react";
import FurnitureContainer from "./FurnitureContainer";

const LookCompleter: FunctionComponent = () => {
  return (
    <div className="relative w-[1718px] h-[626px] z-[6] text-left text-29xl text-black-200 font-body-b1">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1718px] h-[626px] flex flex-col py-[54px] px-0 box-border items-center justify-center gap-[54px]">
        <div className="relative tracking-[-0.07em]">Complete the look</div>
        <div className="w-[1510px] flex flex-row items-center justify-center gap-[64px] text-5xl">
          <FurnitureContainer
            furniturePrice="/frame-25@2x.png"
            furnitureName="Ambrosia chair"
            furniturePriceSEK="8000 SEK"
          />
          <FurnitureContainer
            furniturePrice="/frame-45@2x.png"
            furnitureName="Zen coffee table"
            furniturePriceSEK="10 500 SEK"
            propLineHeight="120%"
          />
          <FurnitureContainer
            furniturePrice="/frame-46@2x.png"
            furnitureName="Solitude sofa"
            furniturePriceSEK="14 000 SEK"
            propLineHeight="120%"
          />
        </div>
      </div>
    </div>
  );
};

export default LookCompleter;
