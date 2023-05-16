import { FunctionComponent, useState } from "react";
import FurnitureSection from "../components/FurnitureSection";
import LexendContainer from "../components/LexendContainer";
import ChairContainer from "../components/ChairContainer";
import NewsletterForm from "../components/NewsletterForm";
import CustomerCareContainer from "../components/CustomerCareContainer";
import Navbar from "../components/Navbar";

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

const collapsedText = `${expandedText.substring(0, 200)}...`;


  return (
    <div className="relative bg-beige w-full overflow-hidden flex flex-col items-center justify-start gap-[176px] text-left text-[96px] text-black font-body-b1">
      <div className="w-[1728px] flex flex-col items-center justify-start gap-[176px] z-[0]">
        <div className="flex flex-col items-center justify-start gap-[96px]">
          <div className="w-[2064px] h-[722px] overflow-hidden shrink-0 flex flex-col py-[200px] px-0 box-border items-center justify-end relative bg-[url(/public/frame-87@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute my-0 mx-[!important] top-[570px] left-[245px] tracking-[-0.05em] z-[0]">
              Chairs
            </div>
          </div>
          <div className="w-[1590px] h-[169px] flex flex-row items-start justify-between text-5xl text-black">
      <div className="relative w-[1046px] h-[255px]">
        <div
          className="absolute w-full top-[0%] left-[0%] leading-[120%] font-light inline-block"
          style={{
            background: !isExpanded
              ? 'linear-gradient(180deg, rgba(255,255,255,0), #f2ebe3), #28221e'
              : 'linear-gradient(180deg, rgba(255,255,255,0), #f2ebe3), #28221e',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: !  isExpanded ? 'transparent' : ''
          }}
        >
          {isExpanded ? expandedText : collapsedText}
        </div>
        <div
          className="relative top-[70%] left-[41.77%] text-decoration:underline leading-[120%] font-light cursor-pointer"
          onClick={handleClick}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </div>
      </div>
      <div className="relative leading-[120%] font-light text-black">
        6 products
      </div>
    </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[84px]">
          <FurnitureSection
            furnitureItemId="/rectangle-37@2x.png"
            furnitureName="Flowing lounge chair "
            furniturePrice="/colors01.svg"
            furniturePriceSEK="15 000 SEK"
            furnitureImageUrl="/rectangle-371@2x.png"
            armchairType="Moderna armchair"
            furnitureDimensions="/colors11.svg"
            furniturePriceSEK2="12 000 SEK"
            furnitureImageId="/rectangle-372@2x.png"
            armchairName="Regal armchair "
            furnitureDimensionId="/colors21.svg"
            furniturePriceSEK3="15 000 SEK"
          />
          <FurnitureSection
            furnitureItemId="/rectangle-373@2x.png"
            furnitureName="Wooden dining chair "
            furniturePrice="/colors31.svg"
            furniturePriceSEK="3 000 SEK"
            furnitureImageUrl="/rectangle-374@2x.png"
            armchairType="Leather armchair"
            furnitureDimensions="/colors41.svg"
            furniturePriceSEK2="20 000 SEK"
            furnitureImageId="/rectangle-375@2x.png"
            armchairName="Mahogany stool"
            furnitureDimensionId="/colors51.svg"
            furniturePriceSEK3="2 000 SEK"
          />
        </div>
      </div>
      <LexendContainer />
      <ChairContainer />
      <div className="flex flex-col items-start justify-start z-[3]">
        <NewsletterForm />
        <CustomerCareContainer />
      </div>
      <Navbar />
    </div>
  );
};

export default CategoriesView;
