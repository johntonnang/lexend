import { FunctionComponent } from "react"

type BlogPostType = {
  rectangle72?: string
  sTORES?: string
  ourNewStoreInAmsterdam?: string
  onThe15thOfJuneWeAreProud?: string
}

const BlogPost: FunctionComponent<BlogPostType> = ({
  rectangle72,
  sTORES,
  ourNewStoreInAmsterdam,
  onThe15thOfJuneWeAreProud,
}) => {
  return (
    <div className=" flex flex-row items-end justify-start gap-[18px] text-left text-5xl text-black-200 font-body-b1">
      <img
        className="relative w-[308px] h-[308px] object-cover"
        alt=""
        src={rectangle72}
      />
      <div className="h-[308px] flex flex-col items-start justify-between">
        <div className="relative leading-[120%] font-light">{sTORES}</div>
        <div className="relative text-17xl tracking-[-0.07em] inline-block w-[417px]">
          {ourNewStoreInAmsterdam}
        </div>
        <div className="relative leading-[120%] font-light inline-block w-[417px]">
          {onThe15thOfJuneWeAreProud}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
