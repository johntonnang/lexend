import { FunctionComponent } from "react"
import ProductPreview from "./ProductPreview"

const NewProducts: FunctionComponent = () => {
  return (
    <div className="bg-beige h-[948px] flex flex-col items-center justify-start gap-[96px] text-center text-37xl text-black-200 font-body-b1">
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-[44px]">
          <div className="relative tracking-[-0.06em] inline-block w-[470px]">
            Our newest pieces
          </div>
          <div className="relative text-13xl leading-[40px] font-inter inline-block w-[736px]">
            <p className="m-0">
              With quality and precision, our mission is to find pieces you will
              love and take in to your home.
            </p>
            <p className="m-0">Say hello to our newest members.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[20px] text-left text-17xl text-black-100">
        <div className="relative w-[635.25px] h-[542px]">
          <img
            className="absolute h-[76.94%] w-full top-[0%] right-[0%] bottom-[23.06%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-81@2x.png"
          />
          <div className="absolute h-[18.82%] w-[99.8%] top-[81.55%] right-[0.2%] bottom-[-0.37%] left-[0%] flex flex-col items-start justify-start gap-[17px]">
            <div className="w-[634px] flex flex-row items-center justify-between">
              <div className="w-[469px] flex flex-row items-start justify-start">
                <div className="relative tracking-[-0.07em] inline-block w-[469px] shrink-0">
                  Flowerpot lamp
                </div>
              </div>
              <div className="relative w-[110px] h-[30px]">
                <div className="absolute top-[1.5px] left-[0px] flex flex-row items-start justify-start">
                  <img
                    className="relative w-[30px] h-[30px]"
                    alt=""
                    src="/ellipse-14.svg"
                  />
                  <img
                    className="relative w-[30px] h-[30px] ml-[-10px]"
                    alt=""
                    src="/ellipse-15.svg"
                  />
                  <img
                    className="relative w-[30px] h-[30px] ml-[-10px]"
                    alt=""
                    src="/ellipse-16.svg"
                  />
                  <img
                    className="relative w-[30px] h-[30px] ml-[-10px]"
                    alt=""
                    src="/ellipse-17.svg"
                  />
                  <img
                    className="relative w-[30px] h-[30px] ml-[-10px]"
                    alt=""
                    src="/ellipse-18.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative text-5xl leading-[40px] font-inter">
              2 300 SEK
            </div>
          </div>
        </div>
        <ProductPreview
          chairId="/rectangle-82@2x.png"
          chairName="Oaki doaki chair"
          chairDimensions="/colors.svg"
        />
        <ProductPreview
          chairId="/rectangle-821@2x.png"
          chairName="Moderna armchair"
          chairDimensions="/colors1.svg"
        />
      </div>
    </div>
  )
}

export default NewProducts
