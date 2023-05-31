import { FunctionComponent } from "react"

const NewsletterForm: FunctionComponent = () => {
  return (
    <div className="relative w-full flex lg:bg-white">
      <img
        className="relative w-full object-cover  lg:w-1/2 "
        alt=""
        src="/rectangle-104@2x.png"
      />
      <div className="absolute bottom-[25px] left-[18px] right-[18px] top-[34px] flex flex-col items-center justify-center bg-[#F2EBE3] bg-opacity-90 text-left font-body-b1 text-29xl text-black-200 lg:relative lg:left-0 lg:right-0 lg:top-[0] lg:bg-white">
        <div className="mx-[10px] flex flex-col items-center justify-center">
          <div className="font-normail pb-[22px] text-center text-[24px] tracking-[-0.07em] lg:py-[0] lg:pb-[32px] lg:text-[48px]">
            Become a member of our family
          </div>
          <div className="px-[35px] pb-[18px] text-center text-[16px] font-light leading-[120%] lg:px-[89px] lg:pb-[87px] lg:text-[24px]">
            Enjoy our newest pieces, exclusive events, limited offers and much
            more when joining our community.
          </div>
        </div>
        <div className="flex items-center justify-around gap-[19px] px-8 lg:gap-[32px] lg:px-[0px]">
          <input
            className="h-[27px] w-[181px] rounded-31xl border-2 border-solid border-grey pl-[6px] text-[8px] font-light tracking-[0.15em] focus:outline-none lg:h-[71px] lg:w-[404px] lg:pl-[30px] lg:text-[20px] lg:tracking-[0.25em]"
            type="text"
            placeholder="Email adress"
          />
          <button className="h-[27px] w-[96px] rounded-31xl border-4 border-solid border-black-100 bg-black-100 lg:h-[72px] lg:w-[227px]">
            <div className="text-s text-[8px] font-medium tracking-[0.25em] text-beige lg:text-[24px] ">
              Subscribe
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
