import { FunctionComponent } from "react";

type FurnitureSectionType = {
  furnitureItemId?: string;
  furnitureName?: string;
  furniturePrice?: string;
  furniturePriceSEK?: string;
  furnitureImageUrl?: string;
  armchairType?: string;
  furnitureDimensions?: string;
  furniturePriceSEK2?: string;
  furnitureImageId?: string;
  armchairName?: string;
  furnitureDimensionId?: string;
  furniturePriceSEK3?: string;
};

const FurnitureSection: FunctionComponent<FurnitureSectionType> = ({
  furnitureItemId,
  furnitureName,
  furniturePrice,
  furniturePriceSEK,
  furnitureImageUrl,
  armchairType,
  furnitureDimensions,
  furniturePriceSEK2,
  furnitureImageId,
  armchairName,
  furnitureDimensionId,
  furniturePriceSEK3,
}) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[64px] text-left text-17xl text-black font-body-b1">
      <div className="flex flex-col items-center justify-start gap-[24px]">
        <img
          className="relative w-[487px] h-[508px] object-cover"
          alt=""
          src={furnitureItemId}
        />
        <div className="w-[487px] flex flex-col items-start justify-center gap-[24px]">
          <div className="w-[487px] flex flex-row items-center justify-between">
            <div className="relative tracking-[-0.07em] inline-block w-[400px] shrink-0">
              {furnitureName}
            </div>
            <img
              className="relative w-[60px] h-[30px]"
              alt=""
              src={furniturePrice}
            />
          </div>
          <div className="relative text-5xl leading-[120%] font-light">
            {furniturePriceSEK}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[24px]">
        <img
          className="relative w-[487px] h-[508px] object-cover"
          alt=""
          src={furnitureImageUrl}
        />
        <div className="w-[487px] flex flex-col items-start justify-center gap-[24px]">
          <div className="w-[487px] flex flex-row items-center justify-between">
            <div className="relative tracking-[-0.07em] inline-block w-[400px] shrink-0">
              {armchairType}
            </div>
            <img
              className="relative w-[60px] h-[30px]"
              alt=""
              src={furnitureDimensions}
            />
          </div>
          <div className="relative text-5xl leading-[120%] font-light">
            {furniturePriceSEK2}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[24px]">
        <img
          className="relative w-[487px] h-[508px] object-cover"
          alt=""
          src={furnitureImageId}
        />
        <div className="w-[487px] flex flex-col items-start justify-center gap-[24px]">
          <div className="w-[487px] flex flex-row items-center justify-between">
            <div className="relative tracking-[-0.07em] inline-block w-[400px] shrink-0">
              {armchairName}
            </div>
            <img
              className="relative w-[60px] h-[30px]"
              alt=""
              src={furnitureDimensionId}
            />
          </div>
          <div className="relative text-5xl leading-[120%] font-light">
            {furniturePriceSEK3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureSection;
