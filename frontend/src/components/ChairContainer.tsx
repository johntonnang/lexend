import { FunctionComponent } from "react"

interface ChairContainerProps {
  bottomImg: string
  bottomHeading: string | undefined
  bottomText: string | undefined
}

const ChairContainer: FunctionComponent<ChairContainerProps> = ({
  bottomImg,
  bottomHeading,
  bottomText,
}) => {
  return (
    <div>
      <div className="mb-[64px] flex w-fit flex-col-reverse items-center px-[15px] lg:mb-[176px] lg:w-auto lg:flex-row lg:bg-white lg:px-0">
        <div className="text-black flex  flex-col justify-center px-[12px] lg:pl-[130px]">
          <div className="flex flex-col items-start justify-start ">
            <div className="relative inline-block pt-[16px] text-[24px] font-light leading-[120%] tracking-[-0.07em] lg:text-[48px] lg:font-normal ">
              {bottomHeading}
            </div>
            <p className="relative inline-block text-[16px] font-light leading-[120%] lg:pr-[90px] lg:text-[24px]">
              {bottomText}
            </p>
          </div>
          <div className="flex items-center justify-center pt-[16px] lg:justify-start">
            <button className="h-[45.42px] w-[149px] cursor-pointer rounded-31xl border-[2.03px] border-solid border-brown bg-[transparent] text-[16px] font-medium tracking-[0.1em] text-brown lg:h-[72px] lg:w-[274px] lg:border-[4px] lg:text-[24px]">
              Get in touch
            </button>
          </div>
        </div>
        <img
          className="relative w-full object-cover  lg:w-3/5 "
          alt=""
          src={bottomImg}
        />
      </div>
    </div>
  )
}

export default ChairContainer
