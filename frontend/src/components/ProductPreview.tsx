import { FunctionComponent } from "react"

type ProductPreviewType = {
  chairId?: string
  chairName?: string
  chairDimensions?: string
}

const ProductPreview: FunctionComponent<ProductPreviewType> = ({
  chairId,
  chairName,
  chairDimensions,
}) => {
  return (
    <div className="w-[417px] h-[534px] flex flex-col items-start justify-start gap-[24px] text-left text-17xl text-black-100 font-body-b1">
      <img
        className="relative w-full h-[417px] object-cover"
        alt=""
        src={chairId}
      />
      <div className="w-[417px] flex flex-row items-center justify-between">
        <div className="relative tracking-[-0.07em] inline-block w-[327px] shrink-0">
          {chairName}
        </div>
        <img
          className="relative w-[70px] h-[30px]"
          alt=""
          src={chairDimensions}
        />
      </div>
      <div className="relative text-5xl leading-[120%] font-light inline-block w-72">
        11 300 SEK
      </div>
    </div>
  )
}

export default ProductPreview
