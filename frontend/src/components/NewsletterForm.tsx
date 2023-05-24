import { FunctionComponent } from "react"

const NewsletterForm: FunctionComponent = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start bg-white text-left font-body-b1 text-29xl text-black-200">
      <div className="flex w-full flex-row items-center justify-start gap-[87px]">
        <img
          className="relative h-[628px] w-1/2 object-cover"
          alt=""
          src="/rectangle-104@2x.png"
        />
        <div className="flex w-1/2 flex-col items-start justify-center gap-[87px]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-1/2flex flex-col items-center justify-center">
              <div className="flex w-[650px] flex-col items-center justify-start gap-[57px]">
                <div className="relative tracking-[-0.07em]">
                  Become a member of our family
                </div>
                <div className="relative inline-block w-[613px] text-center text-5xl font-light leading-[120%]">{`Enjoy our newest pieces, exclusive events, limited offers and much more when joining our community. `}</div>
              </div>
            </div>
          </div>
          <div className="relative h-[72px] w-full">
            <input
              className="absolute left-[0%] right-[45.26%] flex h-full flex-col items-start justify-center rounded-31xl border-2 border-solid border-grey pl-8 font-clash-grotesk text-xl focus:outline-none"
              type="text"
              placeholder="Email adress"
            />
            <button className="absolute left-[59.08%] right-[10.16%] box-border flex h-full cursor-pointer flex-row items-center justify-center rounded-31xl border-4 border-solid border-black-100 bg-black-100 px-16 py-4">
              <div className="relative text-left font-clash-grotesk text-5xl font-medium tracking-[0.15em] text-beige">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
