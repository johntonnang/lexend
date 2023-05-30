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
    <div className="mx-6 flex w-[302px] flex-col items-center justify-center gap-[26px] text-left font-body-b1 text-base text-black-200 lg:m-0 lg:w-full lg:flex-row lg:items-end lg:justify-start lg:gap-[18px] lg:text-5xl">
      <div className="flex w-full items-start justify-start text-left lg:hidden">
        <div className="relative font-light leading-[120%] lg:hidden">
          {sTORES}
        </div>
      </div>
      <img
        className="relative h-[182px] w-full object-cover lg:h-[308px] lg:w-[308px]"
        alt=""
        src={rectangle72}
      />
      <div className="flex flex-col items-center justify-between gap-[26px] pb-[88px] lg:h-[308px] lg:items-start lg:gap-0">
        <div className="hidden font-light leading-[120%] lg:relative lg:inline-block">
          {sTORES}
        </div>
        <div className="relative inline-block w-full text-5xl tracking-[-0.07em] lg:w-[417px] lg:text-17xl ">
          {ourNewStoreInAmsterdam}
        </div>
        <div className="relative inline-block w-full font-light leading-[120%] lg:w-[417px]">
          {onThe15thOfJuneWeAreProud}
        </div>
        <button className="box-border flex h-[45px] w-[150px] cursor-pointer flex-row items-center justify-center rounded-31xl border-[2px] border-solid  border-brown bg-[transparent] lg:hidden lg:h-[72px] lg:w-[274px] lg:border-[4px]">
          <div className="relative text-left text-base font-medium tracking-[0.15em] text-brown lg:text-5xl">
            Read more
          </div>
        </button>
      </div>
    </div>
  )
}

export default BlogPost
