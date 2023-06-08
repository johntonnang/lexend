import { FunctionComponent } from "react"
import FurnitureContainer from "./FurnitureContainer"

const LookCompleter: FunctionComponent = () => {
  return (
    <div className="text-[20px]text-black-200 relative z-[6] h-[290.52px] w-[390px] text-left font-body-b1 lg:h-[626px] lg:w-[1718px] lg:text-29xl">
      <div className="absolute left-[0px] top-[0px] box-border flex h-[390.52px] w-[390px] flex-col items-center justify-center gap-[32px] bg-white px-0 py-[54px] lg:h-[626px] lg:w-[1718px] lg:gap-[54px]">
        <div className="relative tracking-[-0.07em]">Complete the look</div>
        <div className="align-center flex w-[900px] flex-wrap items-center justify-center gap-[64px] text-5xl lg:w-[1510px]">
          <div className="w-[130px] lg:h-auto lg:w-auto">
            <FurnitureContainer
              furniturePrice="/frame-25@2x.png"
              furnitureName="Ambrosia chair"
              furniturePriceSEK="8000 SEK"
            />
          </div>
          <div className="h-[290px] w-[160px] lg:h-auto lg:w-auto">
            <FurnitureContainer
              furniturePrice="/frame-45@2x.png"
              furnitureName="Zen coffee table"
              furniturePriceSEK="10 500 SEK"
              propLineHeight="120%"
            />
          </div>

          <div className="hidden lg:block">
            <FurnitureContainer
              furniturePrice="/frame-46@2x.png"
              furnitureName="Solitude sofa"
              furniturePriceSEK="14 000 SEK"
              propLineHeight="120%"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookCompleter
