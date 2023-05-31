import { FunctionComponent } from "react";

const ModernaArmchairSection: FunctionComponent = () => {
  return (

    <div className="w-full pt-[390px] bg-beige h-[544px] flex flex-row items-start justify-center gap-[101px]  z-[1] text-left text-5xl text-black-200 font-body-b1">

      <div className="lg:w-[1638px] flex lg:flex-row flex-col items-center justify-start lg:gap-[40px] z-[0]">

        <div className="flex flex-col items-center justify-start gap-[20px]">



          <img
            className="w-[390px] lg:w-[745px] h-[93.73%] lg:h-[745px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/product-photo-1@2x.png"
          />


          <div className="flex flex-row items-center justify-center gap-[27.73px]">
            <img
              className="relative w-[0px] h-[0px] overflow-hidden shrink-0"
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
              className="relative w-[0px] h-[0px] overflow-hidden shrink-0"
              alt=""
              src="/chevron-right.svg"
            />

          </div>
        </div>

        <div className="w-[336px] lg:w-[745px] h-[745px] flex flex-col items-start justify-start gap-[110px]">
          <div className="flex flex-col items-start justify-start gap-[62px]">
            <div className="
             text-[36px] lg:text-[64px] tracking-[-0.05em] inline-blocklg:w-[600px]">
              Moderna Armchair
            </div>
            <div className="lg:hidden">
              <div className="relative text-13xl leading-[120%] font-light inline-block w-[736px]">
                12 000 SEK
              </div></div>
            <div className="font-light text-base
            text-[16px]
            lg:text-lg xl:text-xl lg:w-[800px]
            w-[335px]">
              Relax in style with the Moderna armchair – a true masterpiece of modern design. Crafted from the finest materials, this chair combines luxury with simplicity to create a stunning addition to any interior.
            </div>

            <div className="w-[741px] flex flex-col items-start justify-start gap-[14px]">
              <div className="relative leading-[120%] font-light text-[16px]
              lg:text-lg xl:text-xl ">
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
            <div className="relative text-13xl leading-[120%] font-light inline-block w-[736px] hidden lg:inline-block">

              12 000 SEK
            </div>
          </div>
          <button className="cursor-pointer py-4 px-28 bg-brown rounded-31xl box-border lg:w-[480px] w-[330px] h-[72px] flex flex-row items-center justify-center border-[4px] border-solid border-brown">
            <div className="relative lg:text-5xl
            text-[16px]tracking-[0.15em] font-medium  text-beige text-left">
              Add to cart
            </div>
          </button>
          <div className="lg:w-[736px] w-[258px] lg:h-[22px] h-[28px] flex flex-row items-center justify-between text-base">
            <div className="flex flex-row items-center justify-start lg:gap-[24px] gap-[10.89px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/check2.svg"
              />
              <div className="relative leading-[120%] font-light">
                Free delivery
              </div>
            </div>
            <div className="flex flex-row items-center justify-start lg:gap-[24px] gap-[10.89px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/check21.svg"
              />
              <div className="relative leading-[120%] font-light">
                Quality guarantee
              </div>
            </div>
            <div className="flex flex-row items-center justify-start lg:gap-[24px] gap-[10.89px]">
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
      </div></div>
  );
};

export default ModernaArmchairSection;
