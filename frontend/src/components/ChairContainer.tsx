import { FunctionComponent } from "react";


const ChairContainer: FunctionComponent = () => {
  return (
    <div>


    <div className="flex flex-col-reverse lg:flex-row lg:bg-white w-fit px-[15px] lg:px-0 items-center lg:w-auto mb-[64px] lg:mb-[176px]">

    <div
      className="flex flex-col  justify-center text-black px-[12px] lg:pl-[130px]"
    >
      <div className="flex flex-col items-start justify-start ">
        <div
          className="relative tracking-[-0.07em] leading-[120%] inline-block text-[24px] lg:text-[48px] lg:font-normal font-light"

        >
          The significance of choosing the right chair
        </div>
        <p className="relative text-5xl leading-[120%] font-light text-[16px] lg:text-[24px] inline-block lg:pr-[90px]">
        Chat or schedule a personal meeting with one of our experts on interior design to perfect your style.
        </p>
      </div>
      <div className="flex justify-center lg:justify-start items-center pt-[16px]">
      <button className="cursor-pointer bg-[transparent] rounded-31xl h-[45.42px] w-[149px] lg:h-[72px] lg:w-[274px] border-[2.03px] lg:border-[4px] border-solid border-brown font-medium tracking-[0.1em] text-brown text-[16px] lg:text-[24px]">
        Get in touch
      </button>
      </div>

    </div>
    <img
        className="relative lg:w-3/5 w-full  object-cover "
        alt=""
        src="/rectangle-116@2x.png"
      />
    </div>
    </div>
  );
};

export default ChairContainer;
