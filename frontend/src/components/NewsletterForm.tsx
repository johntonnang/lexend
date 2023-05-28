import { FunctionComponent } from "react"

const NewsletterForm: FunctionComponent = () => {
  return (
<div className="relative lg:w-3/5 w-full">
         <img
          className="relative lg:w-3/5 w-full  object-cover "
          alt=""
          src="/rectangle-104@2x.png"
        />
      <div
        className="absolute top-[34px] left-[18px] bg-white bg-opacity-90 w-[355px] h-[214px] flex flex-col items-center justify-start text-left font-body-b1 text-29xl text-black-200"
      >
        <div
          className="w-full flex flex-col items-start justify-start"
          style={{
            fontSize: "24px",
            lineHeight: "30px",
            letterSpacing: "-0.07em",
            color: "#000000",
          }}
        >
          <div className="text-center">Become a member of our family</div>
          <div className="text-center text-[16px] font-light leading-[120%]">
            Enjoy our newest pieces, exclusive events, limited offers and much more when joining our community.
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-8">
          <input
            className="flex-grow mr-1 h-[18px] rounded-31xl border-2 border-solid border-grey pl-3  text-xl focus:outline-none tracking-[0.15em]"
            type="text"
            placeholder="Email adress"
          />
          <button className="h-[10px] rounded-31xl border-4 border-solid border-black-100 bg-black-100 px-6 py-4">
            <div className="text-s font-medium tracking-[0.15em] text-beige">
              Subscribe
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
