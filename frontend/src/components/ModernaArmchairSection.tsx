import { FunctionComponent } from "react"

type FurnitureSectionType = {
  furnitureName?: string
  furniturePrice?: number
  furnitureImage?: string
  furnitureDescription?: string
}

const ModernaArmchairSection: FunctionComponent<FurnitureSectionType> = ({
  furnitureName,
  furniturePrice,
  furnitureImage,
  furnitureDescription,
}) => {
  return (
    <div className="z-[1] flex h-[900px] w-full flex-row items-start justify-center gap-[101px] bg-beige  pt-[333px] text-left font-body-b1 text-5xl text-black-200">
      <div className="flex flex-col items-center justify-start gap-[22.81px]">
        <img
          className="h-[745px] w-[745px] shrink-0 overflow-hidden object-cover"
          alt=""
          src={furnitureImage}
        />

        <div className="flex flex-row items-center justify-center gap-[17.73px]">
          <img
            className="relative h-[30px] w-[30px] shrink-0 overflow-hidden"
            alt=""
            src="/chevron-left.svg"
          />
          <div className="flex flex-row items-end justify-start gap-[25.16px]">
            <img
              className="relative h-[8.58px] w-[8.58px]"
              alt=""
              src="/ellipse-2.svg"
            />
            <img
              className="relative h-[8.58px] w-[8.58px]"
              alt=""
              src="/ellipse-1.svg"
            />
            <img
              className="relative h-[8.58px] w-[8.58px]"
              alt=""
              src="/ellipse-3.svg"
            />
          </div>
          <img
            className="relative h-[30px] w-[30px] shrink-0 overflow-hidden"
            alt=""
            src="/chevron-right.svg"
          />
        </div>
      </div>

      <div className="flex w-[800px] flex-col items-start justify-start gap-[110px]">
        <div className="flex flex-col items-start justify-start gap-[42px]">
          <div className="relative inline-block w-[600px] text-[64px] tracking-[-0.05em]">
            {furnitureName}
          </div>
          <div className="lg:text-lg w-[800px] text-base font-light xl:text-xl">
            {furnitureDescription}
          </div>

          <div className="flex w-[741px] flex-col items-start justify-start gap-[14px]">
            <div className="relative font-light leading-[120%]">
              Color: White
            </div>
            <div className="flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative h-[51px] w-[51px]"
                alt=""
                src="/white.svg"
              />
              <img
                className="relative h-[50px] w-[50px]"
                alt=""
                src="/brown.svg"
              />
              <img
                className="relative h-[50px] w-[50px]"
                alt=""
                src="/black.svg"
              />
            </div>
          </div>
          <div className="relative inline-block w-[736px] text-13xl font-light leading-[120%]">
            {furniturePrice}
          </div>
        </div>
        <button className="box-border flex h-[72px] w-[480px] cursor-pointer flex-row items-center justify-center rounded-31xl border-[4px] border-solid border-brown bg-brown px-28 py-4">
          <div className="relative text-left text-5xl font-medium  tracking-[0.15em] text-beige">
            Add to cart
          </div>
        </button>
        <div className="flex h-[22px] w-[600px] flex-row items-center justify-between text-base">
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="relative h-6 w-6 shrink-0 overflow-hidden"
              alt=""
              src="/check2.svg"
            />
            <div className="relative font-light leading-[120%]">
              Free delivery
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="relative h-6 w-6 shrink-0 overflow-hidden"
              alt=""
              src="/check21.svg"
            />
            <div className="relative font-light leading-[120%]">
              Quality guarantee
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="relative h-6 w-6 shrink-0 overflow-hidden"
              alt=""
              src="/check2.svg"
            />
            <div className="relative font-light leading-[120%]">
              3 years warranty
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernaArmchairSection
