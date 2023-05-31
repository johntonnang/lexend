import { FunctionComponent } from "react";
import ModernaArmchairSection from "../components/ModernaArmchairSection";
import ReviewsSection from "../components/ReviewsSection";
import LookCompleter from "../components/LookCompleter";
import NewsletterForm from "../components/NewsletterForm";
import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2";

const DetailPage: FunctionComponent = () => {

  return (

    <div className=" relative bg-beige w-full overflow-hidden flex flex-col items-center justify-start gap-[396px] text-left text-5xl text-black-200 font-clash-grotesk">
      <Navbar2 />
      <ModernaArmchairSection />
      <div className="bg-white lg:w-[1728px] w-[390px] overflow-hidden flex flex-row py-[53px] lg:px-[188px] box-border items-baseline justify-between z-[2]">
        <div className="flex flex-row items-start justify-start gap-[240px]">

          <div className="flex flex-col items-centerjustify-start gap-[32px] z-[3] text-center text-[24px] lg:text-29xl font-body-b1">
            <div className="relative tracking-[-0.07em]">Product details</div>
            <div className="lg:h-[236px] h-[371px] flex flex-row items-start justify-start text-[14px] lg:text-5xl">
              <div className="lg:w-[332px] w-[117px] h-[212px] overflow-hidden shrink-0 flex flex-col py-[57px] pr-11 pl-[135px] box-border items-startjustify-center gap-[32px]">
                <b className="relative leading-[120%]">Measurements</b>
                <b className="relative leading-[120%]">Materials</b>
                <b className="relative leading-[120%] inline-block lg:w-[177px] w-[117px]">
                  Specifications
                </b>
              </div>


              <div className="lg:w-[1296px] w-[183px]  lg:h-[236px]
              h-[68px]
              overflow-hidden shrink-0 flex flex-col py-[57px] pr-11 pl-[113px] box-border items-start justify-center gap-[32px]">
                <div className="relative leading-[120%] font-light inline-block w-[1183px]">{`Height: 84 cm. Width: 66 cm. Depth: 74 cm. Seat height: 46 cm. `}</div>
                <div className="relative leading-[120%] font-light inline-block w-[1183px]">{`Frame: Light oak. Upholstery: Premium white fabric. `}</div>
                <div className="relative leading-[120%] font-light inline-block w-[1183px]">{`Removable upholstery for easy cleaning. Follow included washing instructions. `} </div>
              </div></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start lg:gap-[64px] gap-[12px] z-[4]">
        <div className="flex flex-col items-center justify-start relative gap-[103px]">
          <div className="lg:relative lg:w-[1735px] lg:h-[822px] z-[0]lg:gap-[6px]">
            <img
              className="lg:absolute top-[0px] left-[0px] lg:w-[1129px] w-[254.81px] lg:h-[822px] h-[185.52px]"
              alt=""
              src="/rectangle-110@2x.png"
            />
            <img
              className="lg:absolute top-[0px] lg:left-[1142px]
              left-[267.13px]
              lg:w-[586px] w-[132.26px] lg:h-[822px]
              h-[185.52px]lg:object-cover "
              alt=""
              src="/rectangle-112@2x.png"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[-0.43px] left-[1193px] bg-beige  h-[822px] z-[1]" />
        </div>
        <img
          className="relative lg:w-[1732px] w-[400px] lg:h-[1098px] h-[260px]object-cover "
          alt=""
          src="/image-17@2x.png"
        />
      </div>
      <ReviewsSection />
      <LookCompleter />

      <div className="gap-[0px] ">
        <NewsletterForm />
        <Footer />
      </div>
      <button className="cursor-pointer py-4 px-14 bg-[transparent] my-0 mx-[!important] absolute top-[230px] left-[39px] rounded-31xl box-border h-[72px] flex flex-row items-center justify-center gap-[8px] z-[9] border-[4px] border-solid border-brown">
        <div className="relative text-5xl tracking-[0.15em] font-medium  text-brown text-left z-[0]">
          Chairs
        </div>

        <img
          className="absolute my-0 mx-[!important] top-[22px] left-[24px] w-[27px] w-[27px] h-[27px] overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/chevron-left1.svg"
        />
      </button>

    </div>


  );
};

export default DetailPage;
