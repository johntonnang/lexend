import { FunctionComponent } from "react"
import ProductPreview from "./ProductPreview"

const NewProducts: FunctionComponent = () => {
  return (
    <div className="w-full bg-beige h-[948px] flex flex-col items-center justify-start gap-[96px] text-center text-37xl text-black-200 font-body-b1">
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
  )
}

export default NewProducts
