import { FunctionComponent, useState } from "react";
import FurnitureSection from "../components/FurnitureSection";
import LexendContainer from "../components/LexendContainer";
import ChairContainer from "../components/ChairContainer";
import NewsletterForm from "../components/NewsletterForm";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";


const CategoriesView: FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const expandedText = `
Our collection of seating options is designed to elevate both
comfort and style. Crafted with meticulous attention to detail,
our luxurious chairs are the epitome of elegance and
sophistication. At Lexend, we understand that every chair should
be a statement piece, reflecting your unique taste and adding a
touch of sophistication to your space. We invite you to explore
our exclusive chair collection and discover the perfect seating
companion for your luxurious lifestyle.
`;

  const collapsedText = `${expandedText.substring(0, 266)}`;


  return (
    <div>
      <div className="relative bg-beige w-screen overflow-hidden flex flex-col items-center justify-start text-left text-[96px] text-black font-body-b1">
        <div className="w-[100%] flex flex-col items-center justify-start gap-[176px] z-[0]">
          <div className="flex flex-col justify-start">
            <div className="w-[100%] h-[158px] min-[500px]:h-[250px] md:h-[400px] lg:h-[722px] overflow-hidden  flex flex-col py-[32px] lg:py-[64px] px-0 box-border items-center justify-end relative bg-[url(/public/frame-87@3x.png)] bg-cover bg-no-repeat bg-[top]">
            </div>
            <div className="relative my-0 mx-[!important]  left-[16px] lg:left-[69.5px] tracking-[-0.05em] text-[48px] lg:text-[96px] pt-[32px] lg:pt-[176px]">
              Chairs
            </div>
            <div className="w-[100%] h-[169px] lg:flex lg:flex-row lg:items-start lg:justify-between text-5xl text-black">
              <div className="relative h-[255px]  pl-[16px] pr-[16px] lg:pl-[69px]">
                <div
                  className="font-light inline-block w-[100%] lg:w-[60%] text-[16px] lg:text-[24px] pt-[24px] lg:pt-[32px]"
                  style={{
                    background: !isExpanded
                      ? 'linear-gradient(180deg, rgba(255,255,255,0), #f2ebe3), #28221e'
                      : 'linear-gradient(180deg, rgba(255,255,255,0), #f2ebe3), #28221e',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: !isExpanded ? 'transparent' : '',
                  }}
                >
                  {isExpanded ? expandedText : collapsedText}
                </div>
                <div
                  className="relative left-[41.77%] leading-[120%] font-semibold cursor-pointer underline  text-[14px] lg:text-[18px]"
                  onClick={handleClick}
                >
                  {isExpanded ? 'Read less' : '...Read more'}
                </div>
              </div>
              <div className="relative left-[16px] leading-[120%] font-light text-black pr-[69px] w-[122px] text-[16px] lg:text-[24px]  text-[#28221EB2]">
                6 products
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap justify-center gap-10 mb-[64px] lg:mb-[176px]">
            <FurnitureSection
              furnitureImage="/rectangle-37@2x.png"
              furnitureName="Flowing lounge chair "
              furnitureDimensions="/colors01.svg"
              furniturePrice="15 000 SEK"
            />
            <FurnitureSection
              furnitureImage="/rectangle-371@2x.png"
              furnitureName="Moderna armchair"
              furnitureDimensions="/colors11.svg"
              furniturePrice="12 000 SEK" />

            <FurnitureSection
              furnitureImage="/rectangle-372@2x.png"
              furnitureName="Regal armchair "
              furnitureDimensions="/colors21.svg"
              furniturePrice="15 000 SEK" />
            <FurnitureSection
              furnitureImage="/rectangle-373@2x.png"
              furnitureName="Wooden dining chair "
              furnitureDimensions="/colors31.svg"
              furniturePrice="3 000 SEK" />
            <FurnitureSection
              furnitureImage="/rectangle-374@2x.png"
              furnitureName="Leather armchair"
              furnitureDimensions="/colors41.svg"
              furniturePrice="20 000 SEK" />
            <FurnitureSection
              furnitureImage="/rectangle-375@2x.png"
              furnitureName="Mahogany stool"
              furnitureDimensions="/colors51.svg"
              furniturePrice="2 000 SEK" />
          </div>
        </div>

        <LexendContainer />
        <ChairContainer />
        <div className="flex flex-col items-start justify-start z-[3]">
          <NewsletterForm />
          <Footer />
        </div>
        <Navbar2 />
        <div>


        </div>
      </div>

    </div>

  );
};

export default CategoriesView;
