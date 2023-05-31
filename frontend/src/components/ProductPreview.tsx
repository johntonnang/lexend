import { FunctionComponent } from "react"

type ProductPreviewType = {
  productId?: string
  productName?: string
  productColor?: string
  productPrice?: number
}

const ProductPreview: FunctionComponent<ProductPreviewType> = ({
  productId,
  productName,
  productColor,
  productPrice,
}) => {
  return (
    <div className="ml-6 flex h-[298px] w-full flex-col items-start justify-start gap-[18px] text-left font-body-b1 text-base text-black-100 lg:m-0 lg:h-[630px] lg:gap-[24px] lg:text-17xl">
      <img
        className="relative h-[220px] w-[254px] object-cover lg:h-[500px] lg:w-full"
        alt=""
        src={productId}
      />
      <div className="flex w-full flex-row items-center justify-between">
        <div className="relative inline-block shrink-0 tracking-[-0.07em] lg:w-[327px]">
          {productName}
        </div>
        <img
          className="relative h-[20px] w-[60px]  lg:h-[30px] lg:w-[70px]"
          alt=""
          src={productColor}
        />
      </div>
      <div className="relative inline-block text-base font-light leading-[120%] lg:w-72 lg:text-5xl">
        {productPrice}
      </div>
    </div>
  )
}

export default ProductPreview
