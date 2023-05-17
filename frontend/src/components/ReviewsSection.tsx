import { FunctionComponent } from "react";

const ReviewsSection: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[32px] z-[5] text-left text-29xl text-black-200 font-body-b1">
      <div className="flex flex-col items-center justify-center">
        <div className="relative tracking-[-0.07em] inline-block w-[173.33px]">
          Reviews
        </div>
      </div>
      <div className="w-[1728px] h-[292px] overflow-hidden shrink-0 flex flex-row py-[57px] px-[100px] box-border items-center justify-center gap-[200px] text-17xl text-black-100">
        <img
          className="relative w-[126px] h-[126px]"
          alt=""
          src="/arrow-left.svg"
        />
        <div className="w-[932px] flex flex-col items-start justify-center gap-[60px]">
          <div className="relative leading-[120%] font-light inline-block w-[932px]">
            "A vision of modern sophistication."
          </div>
          <div className="relative text-5xl leading-[120%] font-light">
            Architectural Design
          </div>
        </div>
        <img
          className="relative w-[126px] h-[126px]"
          alt=""
          src="/arrow-right.svg"
        />
      </div>
    </div>
  );
};

export default ReviewsSection;
