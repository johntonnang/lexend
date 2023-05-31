import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type FurnitureContainerType = {
  furniturePrice?: string;
  furnitureName?: string;
  furniturePriceSEK?: string;

  /** Style props */
  propLineHeight?: Property.LineHeight;
};

const FurnitureContainer: FunctionComponent<FurnitureContainerType> = ({
  furniturePrice,
  furnitureName,
  furniturePriceSEK,
  propLineHeight,
}) => {
  const sEKStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className="flex flex-col items-start justify-center lg:gap-[21px] gap-[8.33px] lg:text-left lg:text-5xl text-black-200 font-body-b1">
      <img
        className="lg:w-[417px] w-[165.51px] lg:h-[307px] h-[177.52px] overflow-hidden shrink-0 object-cover"
        alt=""
        src={furniturePrice}
      />
      <div className="relative leading-[120%] font-light">{furnitureName}</div>
      <div className="relative" style={sEKStyle}>
        {furniturePriceSEK}
      </div>
    </div>
  );
};

export default FurnitureContainer;
