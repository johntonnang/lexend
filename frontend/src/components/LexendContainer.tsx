import { FunctionComponent } from "react";

const LexendContainer: FunctionComponent = () => {
  return (
    <div>


      <div className="flex flex-col lg:flex-row lg:bg-white w-fit px-[15px] lg:px-0 items-center lg:w-auto mb-[64px] lg:mb-[176px]">
        <img
          className="relative lg:w-3/5 w-full  object-cover "
          alt=""
          src="/rectangle-115@2x.png"
        />
        <div
          className="flex flex-col justify-center text-black "
        >
          <div className="flex flex-col items-start justify-start">
            <div
              className="relative pt-[16px] lg:pt-[0px] lg:pl-[150px] lg:pr-[50px] tracking-[-0.07em] leading-[120%] inline-block text-[24px] lg:text-[48px] lg:font-normal font-light"

            >
              Lexend’s design language
            </div>
            <p className="relative lg:pl-[150px] lg:pr-[100px] text-5xl leading-[120%] font-light text-[16px] lg:text-[24px]  inline-block">
              Discover the practices our designers put to use when creating timeless products.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start lg:pl-[150px]  items-center pt-[16px]">
            <button className="cursor-pointer bg-[transparent] rounded-31xl h-[45.42px] w-[149px] lg:h-[72px] lg:w-[274px] border-[2.03px] lg:border-[4px] border-solid border-brown font-medium tracking-[0.1em] text-brown text-[16px] lg:text-[24px]">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LexendContainer;
