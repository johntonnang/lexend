import { FunctionComponent } from "react"

type FurnitureSectionType = {
  furnitureName?: string
  furniturePrice?: number
  furnitureImage?: string
  furnitureDimensions?: string
}

const FurnitureSection: FunctionComponent<FurnitureSectionType> = ({
  furnitureName,
  furniturePrice,
  furnitureDimensions,
  furnitureImage,
}) => {
  return (
    <div>
      <img
        className="h-[177.33px] w-[170px] md:h-[338px] md:w-[324px] lg:h-[508px] lg:w-[487px]"
        alt=""
        src={furnitureImage}
      />
      <div>
        <div>
          <div className="relative shrink-0 text-[16px] lg:text-[36px] tracking-[-0.07em]">
            {furnitureName}
          </div>
        </div>
        <div className="flex space-x-12">
          <div className="relative text-[16px] lg:text-[24px] font-light leading-[120%]">
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
  )
}

export default FurnitureSection
