import { FunctionComponent } from "react"

const NewsletterForm: FunctionComponent = () => {
  return (
<div className="relative  w-full lg:flex lg:bg-white">
         <img
          className="relative lg:w-1/2 w-full  object-cover "
          alt=""
          src="/rectangle-104@2x.png"
        />
      <div
        className="absolute lg:relative top-[34px] lg:top-[0] bottom-[55px] left-[18px] right-[20px] bg-[#F2EBE3] lg:bg-white bg-opacity-90 flex flex-col items-center justify-center text-left font-body-b1 text-29xl text-black-200"
      >
        <div
          className="flex flex-col items-center justify-center mx-[10px]"

        >
          <div className="text-center text-[24px] lg:text-[48px] tracking-[-0.07em] py-[22px] lg:py-[0] lg:pb-[32px] font-normail">Become a member of our family</div>
          <div className="text-center text-[16px] lg:text-[24px] font-light leading-[120%] px-[35px] lg:px-[89px] pb-[18px] lg:pb-[87px]">
            Enjoy our newest pieces, exclusive events, limited offers and much more when joining our community.
          </div>
        </div>
        <div className="flex items-center justify-around px-8 lg:px[89px] gap-[19px] lg:gap-[32px]">
          <input
            className="h-[27px] w-[181px] lg:w-[404px] lg:h-[71px] font-light text-[8px] lg:text-[20px] rounded-31xl border-2 border-solid border-grey pl-[6px] lg:pl-[30px] focus:outline-none tracking-[0.15em] lg:tracking-[0.25em]"
            type="text"
            placeholder="Email adress"
          />
          <button className="h-[27px] w-[96px] lg:h-[72px] lg:w-[266px] rounded-31xl border-4 border-solid border-black-100 bg-black-100">
            <div className="text-s font-medium tracking-[0.25em] text-beige text-[8px] lg:text-[24px] ">
              Subscribe
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
