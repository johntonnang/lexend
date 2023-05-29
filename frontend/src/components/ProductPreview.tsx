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
    <div className="flex h-[298px] w-full flex-col items-start justify-start gap-[18px] overflow-hidden text-left font-body-b1 text-17xl text-black-100 lg:h-[630px] lg:gap-[24px]">
      <img
        className="relative h-[230px] w-[254px] object-cover lg:h-[500px]"
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
      <div className="relative inline-block text-5xl font-light leading-[120%] lg:w-72">
        {productPrice}
      </div>
    </div>
  )
}

export default ProductPreview
