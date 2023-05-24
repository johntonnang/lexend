import { FunctionComponent } from "react";

type FurnitureSectionType = {
  furnitureName?: string;
  furniturePrice?: string;
  furnitureImage?: string;
  furnitureDimensions?: string;
};

const FurnitureSection: FunctionComponent<FurnitureSectionType> = ({
  furnitureName,
  furniturePrice,
  furnitureDimensions,
  furnitureImage
}) => {
  return (

      <div>
        <img
          className="w-[170px] h-[177.33px] md:w-[324px] md:h-[338px] lg:w-[487px] lg:h-[508px]"
          alt=""
          src={furnitureImage}
        />
        <div>
          <div>
            <div className="relative tracking-[-0.07em] shrink-0 text-[16px]">
              {furnitureName}
            </div>

          </div>
          <div className="flex space-x-12">
          <div className="relative leading-[120%] font-light text-[16px]">
            {furniturePrice}
          </div>
          <img
              className="relative h-[13.5px]"
              alt=""
              src={furnitureDimensions}
            />
</div>
        </div>
      </div>


  );
};

export default FurnitureSection;
