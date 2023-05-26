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
    <div className="flex h-[630px] w-full flex-col items-start justify-start gap-[24px] text-left font-body-b1 text-17xl text-black-100">
      <img
        className="relative h-[500px] w-full object-cover"
        alt=""
        src={productId}
      />
      <div className="flex w-full flex-row items-center justify-between">
        <div className="relative inline-block w-[327px] shrink-0 tracking-[-0.07em]">
          {productName}
        </div>
        <img className="relative h-[30px] w-[70px]" alt="" src={productColor} />
      </div>
      <div className="relative inline-block w-72 text-5xl font-light leading-[120%]">
        {productPrice}
      </div>
    </div>
  )
}

export default ProductPreview
