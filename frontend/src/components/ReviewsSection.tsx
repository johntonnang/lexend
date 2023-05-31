import { FunctionComponent } from "react";

const ReviewsSection: FunctionComponent = () => {
  return (
    <div className=" flex flex-col items-center justify-start lg:gap-[32px] gap-[24px] z-5 text-left lg:text-29xl text-[20px] text-black-200 font-body-b1 h-[238px] lg:h-[384px]">


      <div className="flex flex-col items-center justify-center">
        <div className="relative tracking-[-0.07em] inline-block lg:w-[173.33px] w-[71px]">
          Reviews
        </div>
      </div>



      <div className="lg:w-[1728px] w-[50px] lg:h-[292px] h-[268px]
      overflow-hidden shrink-0 lg:flex flex-row lg:py-[57px] px-[200px] lg:box-border lg:items-center lg:justify-center gap-[200px] lg:text-17xl text-[20px] text-black-100">
        <img
          className="relative lg:w-[126px] lg:h-[126px] hidden lg:block"
          alt=""
          src="/arrow-left.svg"
        />
        <div className="flex flex-col items-start justify-center lg:gap-[60px] gap-[108px] items-center">
          <div className="relative leading-[120%] font-light inline-block lg:w-[932px] w-[350px] lg:text-left lg:text-center">
            "A vision of modern sophistication."
          </div>
          <div className="lg:relative lg:text-5xl text-[12px]  lg:leading-[120%] font-light lg:w-[932px] lg:text-left lg:text-center">


            Architectural Design
          </div>
        </div>
        <img
          className="relative w-[126px] h-[126px] hidden lg:block"
          alt=""
          src="/arrow-right.svg"
        />

      </div>
    </div>
  );
};

export default ReviewsSection;
