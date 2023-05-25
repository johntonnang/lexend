import { FunctionComponent } from "react"
import ProductPreview from "./ProductPreview"

const NewProducts: FunctionComponent = () => {
  return (
    <div className="bg-beige px-[70px] py-[176px]">
      <div className="flex w-full flex-col items-center justify-start gap-[64px] bg-beige text-left font-body-b1 text-37xl text-black-200">
        <div className="items-left flex w-full flex-col justify-start">
          <div className="items-left flex flex-col justify-start gap-[44px]">
            <div className="relative inline-block w-[470px] tracking-[-0.06em]">
              Our newest pieces
            </div>
            <div className="relative inline-block w-[736px] font-inter text-13xl leading-[40px]">
              <p className="m-0">
                With quality and precision, our mission is to find pieces you
                will love and take in to your home.
              </p>
              <p className="m-0">Say hello to our newest members.</p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-[64px] text-left text-17xl text-black-100">
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
