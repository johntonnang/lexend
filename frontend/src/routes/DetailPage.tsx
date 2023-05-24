
import { FunctionComponent } from "react";
import ModernaArmchairSection from "../components/ModernaArmchairSection";
import ReviewsSection from "../components/ReviewsSection";
import LookCompleter from "../components/LookCompleter";
import NewsletterForm from "../components/NewsletterForm";
import CustomerCareContainer from "../components/CustomerCareContainer";
import Navbar from "../components/Navbar";

const DetailPage: FunctionComponent = () => {

  return (
    <div className=" relative bg-beige w-full overflow-hidden flex flex-col items-center justify-start gap-[176px] text-left text-5xl text-black-200 font-clash-grotesk">

      <Navbar textColor="black" />
      <ModernaArmchairSection />
      <div className="bg-white w-[1728px] overflow-hidden flex flex-row py-[53px] px-[188px] box-border items-baseline justify-between z-[2]">
        <div className="flex flex-row items-start justify-start gap-[240px]">



          <div className="flex flex-col items-center justify-start gap-[32px] z-[3] text-29xl font-body-b1">
            <div className="relative tracking-[-0.07em]">Product details</div>
            <div className="h-[236px] flex flex-row items-start justify-start text-5xl">
              <div className="w-[432px] h-[236px] overflow-hidden shrink-0 flex flex-col py-[57px] pr-11 pl-[135px] box-border items-start justify-center gap-[32px]">
                <b className="relative leading-[120%]">Measurements</b>
                <b className="relative leading-[120%]">Materials</b>
                <b className="relative leading-[120%] inline-block w-[177px]">
                  Specifications
                </b>
              </div>


              <div className="w-[1196px] h-[236px] overflow-hidden shrink-0 flex flex-col py-[57px] pr-11 pl-[113px] box-border items-start justify-center gap-[32px]">
                <div className="relative leading-[120%] font-light inline-block w-[1183px]">{`Height: 84 cm. Width: 66 cm. Depth: 74 cm. Seat height: 46 cm. `}</div>
                <div className="relative leading-[120%] font-light inline-block w-[1183px]">{`Frame: Light oak. Upholstery: Premium white fabric. `}</div>
                <div className="relative leading-[120%] font-light inline-block w-[1183px]">{`Removable upholstery for easy cleaning. Follow included washing instructions. `} </div>
              </div></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[13px] z-[4]">
        <div className="flex flex-col items-center justify-start relative gap-[103px]">
          <div className="relative w-[1828px] h-[822px] z-[0]">
            <img
              className="absolute top-[0px] left-[0px] w-[1129px] h-[822px]"
              alt=""
              src="/rectangle-110@2x.png"
            />
            <img
              className="absolute top-[0px] left-[1142px] w-[506px] h-[822px] object-cover"
              alt=""
              src="/rectangle-112@2x.png"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[-0.43px] left-[1129px] bg-beige w-[13px] h-[822px] z-[1]" />
        </div>
        <img
          className="relative w-[1732px] h-[1098px] object-cover"
          alt=""
          src="/image-17@2x.png"
        />
      </div>
      <ReviewsSection />
      <LookCompleter />

      <div className="relative w-[1508px] h-[945px] z-[8]">
        <NewsletterForm />

      </div>
      <button className="cursor-pointer py-4 px-14 bg-[transparent] my-0 mx-[!important] absolute top-[230px] left-[39px] rounded-31xl box-border h-[72px] flex flex-row items-center justify-center gap-[8px] z-[9] border-[4px] border-solid border-brown">
        <div className="relative text-5xl tracking-[0.15em] font-medium font-clash-grotesk text-brown text-left z-[0]">
          Chairs
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[22px] left-[24px] w-[27px] h-[27px] overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/chevron-left1.svg"
        />
      </button>
      <CustomerCareContainer />
    </div>
  );
};

export default DetailPage;
