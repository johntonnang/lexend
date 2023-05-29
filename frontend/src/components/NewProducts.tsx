import { FunctionComponent } from "react"
import ProductPreview from "./ProductPreview"

const NewProducts: FunctionComponent = () => {
  return (
    <div className="bg-beige pb-[88px] pt-[88px] lg:px-[70px] lg:py-[176px]">
      <div className="flex w-full flex-col items-center justify-start gap-[64px] bg-beige text-left font-body-b1 text-6xl text-black-200 lg:text-37xl">
        <div className="items-left flex w-full flex-col justify-start">
          <div className="items-left flex flex-col justify-start gap-[44px]">
            <div className="relative mx-6 inline-block tracking-[-0.06em] lg:m-0 lg:w-[470px]">
              Our newest pieces
            </div>
            <div className="relative mx-6 inline-block font-body-b1 text-base font-light leading-[120%] lg:m-0 lg:w-[736px] lg:text-13xl lg:leading-[40px]">
              <p className="m-0">
                With quality and precision, our mission is to find pieces you
                will love and take in to your home.
              </p>
              <p className="mt-6 lg:m-0">Say hello to our newest members.</p>
            </div>
          </div>
        </div>
        <div className="flex h-[298px] flex-row items-center justify-center gap-[18px] overflow-x-scroll text-left text-17xl text-black-100 lg:h-full lg:gap-[64px]">
          <ProductPreview
            productId="/rectangle-81@2x.png"
            productName="Flowerpot Lamp"
            productColor="/colors2.svg"
            productPrice={3200}
          />
          <ProductPreview
            productId="/rectangle-82@2x.png"
            productName="Oaki doaki chair"
            productColor="/colors1.svg"
            productPrice={12000}
          />
          <ProductPreview
            productId="/rectangle-821@2x.png"
            productName="Moderna armchair"
            productColor="/colors.svg"
            productPrice={3000}
          />
        </div>
      </div>
    </div>
  )
}

export default NewProducts
