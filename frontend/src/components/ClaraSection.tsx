import { FunctionComponent } from "react"

const ClaraSection: FunctionComponent = () => {
  return (
    <div className="bg-white w-full flex flex-col items-start justify-start text-center text-37xl text-black-200 font-body-b1">
      <div className="w-full flex flex-row items-center justify-start gap-[89px]">
        <img
          className="relative w-[865px] h-[719px] object-cover"
          alt=""
          src="/rectangle-78@2x.png"
        />
        <div className="w-[666px] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-start gap-[32px]">
            <div className="w-[622px] flex flex-col items-center justify-start gap-[32px]">
              <div className="relative tracking-[-0.06em] inline-block w-[417px]">
                Meet Clara
              </div>
              <div className="relative text-5xl leading-[40px] font-inter inline-block w-[622px]">
                Lexend started with Clara’s vision of creating a place for
                designer interior. Her passion is in the core of all we do. The
                process of selecting the pieces for our family is meticulous and
                careful.
              </div>
            </div>
            <button className="cursor-pointer py-4 px-16 bg-[transparent] rounded-31xl box-border h-[72px] flex flex-row items-center justify-center border-[4px] border-solid border-brown">
              <div className="relative text-5xl tracking-[0.15em] font-medium font-clash-grotesk text-brown text-left">
                Read more
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClaraSection
