import { FunctionComponent } from "react";

const ModernaArmchairSection: FunctionComponent = () => {
  return (

    <div className="w-full pt-[333px] bg-beige h-[1304px] flex flex-row  justify-center gap-[27px]  font-body-b1">

      <div className="flex flex-col items-center justify-start gap-[20px]">
        <img
          className="w-[745px] h-[745px]"
          alt=""
          src="/product-photo-1@2x.png"
        />

        <div className="flex flex-row items-center justify-center gap-[17.73px]">
          <img
            className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
            alt=""
            src="/chevron-left.svg"
          />
          <div className="flex flex-row items-end justify-start gap-[25.16px]">
            <img
              className="relative w-[8.58px] h-[8.58px]"
              alt=""
              src="/ellipse-2.svg"
            />
            <img
              className="relative w-[8.58px] h-[8.58px]"
              alt=""
              src="/ellipse-1.svg"
            />
            <img
              className="relative w-[8.58px] h-[8.58px]"
              alt=""
              src="/ellipse-3.svg"
            />
          </div>
          <img
            className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
            alt=""
            src="/chevron-right.svg"
          />

        </div>
      </div>

      <div className="w-[600px] flex flex-col items-start justify-start gap-[110px]">
        <div className="flex flex-col items-start justify-start gap-[42px]">
          <div className="relative text-[64px] tracking-[-0.05em] inline-block w-[600px]">
            Moderna armchair
          </div>
          <div className="font-light text-base lg:text-lg xl:text-xl w-[800px]">
            Relax in style with the Moderna armchair – a true masterpiece of modern design. Crafted from the finest materials, this chair combines luxury with simplicity to create a stunning addition to any interior.
          </div>

          <div className="w-[741px] flex flex-col items-start justify-start gap-[14px]">
            <div className="relative leading-[120%] font-light">
              Color: White
            </div>
            <div className="flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-[51px]"
                alt=""
                src="/white.svg"
              />
              <img
                className="relative w-[50px] h-[50px]"
                alt=""
                src="/brown.svg"
              />
              <img
                className="relative w-[50px] h-[50px]"
                alt=""
                src="/black.svg"
              />
            </div>
          </div>
          <div className="relative text-13xl leading-[120%] font-light inline-block w-[736px]">
            12 000 SEK
          </div>
        </div>
        <button className="cursor-pointer py-4 px-28 bg-brown rounded-31xl box-border w-[480px] h-[72px] flex flex-row items-center justify-center border-[4px] border-solid border-brown">
          <div className="relative text-5xl tracking-[0.15em] font-medium font-clash-grotesk text-beige text-left">
            Add to cart
          </div>
        </button>
        <div className="w-[600px] h-[22px] flex flex-row items-center justify-between text-base">
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/check2.svg"
            />
            <div className="relative leading-[120%] font-light">
              Free delivery
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/check21.svg"
            />
            <div className="relative leading-[120%] font-light">
              Quality guarantee
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/check2.svg"
            />
            <div className="relative leading-[120%] font-light">
              3 years warranty
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ModernaArmchairSection;
