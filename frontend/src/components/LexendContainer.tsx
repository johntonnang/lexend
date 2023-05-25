import { FunctionComponent } from "react"

const LexendContainer: FunctionComponent = () => {
  return (
    <div>
      <div className="mb-[64px] flex w-fit flex-col items-center px-[15px] lg:mb-[176px] lg:w-auto lg:flex-row lg:bg-white lg:px-0">
        <img
          className="relative w-full object-cover  lg:w-3/5 "
          alt=""
          src="/rectangle-115@2x.png"
        />
        <div className="flex w-[700px] justify-center">
          <div className="text-black flex w-[423px] flex-col text-left">
            <div className="items-left flex flex-col justify-center">
              <div className="relative inline-block text-[24px] font-light leading-[120%] tracking-[-0.07em] lg:text-[48px] lg:font-normal">
                Lexend’s design language
              </div>
              <p className="relative inline-block text-5xl font-light leading-[120%] lg:text-[24px]">
                Discover the practices our designers put to use when creating
                timeless products.
              </p>
            </div>
            <div className="justify-left flex items-center pt-[16px]">
              <button className="h-[45.42px] w-[149px] cursor-pointer rounded-31xl border-[2.03px] border-solid border-brown bg-[transparent] text-[16px] font-medium tracking-[0.1em] text-brown lg:h-[72px] lg:w-[274px] lg:border-[4px] lg:text-[24px]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LexendContainer
