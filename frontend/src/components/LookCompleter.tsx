import { FunctionComponent } from "react";
import FurnitureContainer from "./FurnitureContainer";

const LookCompleter: FunctionComponent = () => {
  return (
    <div className="relative lg:w-[1718px] w-[390px] lg:h-[626px] h-[90.52px] z-[6] text-left lg:text-29xl text-[20px]text-black-200 font-body-b1">
      <div className="absolute top-[0px] left-[0px] bg-white lg:w-[1718px] w-[390px] lg:h-[626px] h-[390.52px] flex flex-col py-[54px] px-0 box-border items-center justify-center lg:gap-[54px] gap-[32px]">
        <div className="relative tracking-[-0.07em]">Complete the look</div>
        <div className="lg:w-[1510px] w-[390px] flex flex-row lg:items-center justify-center align-center gap-[64px] text-5xl">
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
