import { FunctionComponent } from "react"

const NewsletterForm: FunctionComponent = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-start text-left text-29xl text-black-200 font-body-b1">
      <div className="w-full flex flex-row items-center justify-start gap-[87px]">
        <img
          className="relative w-1/2 h-[628px] object-cover"
          alt=""
          src="/rectangle-104@2x.png"
        />
        <div className="w-1/2 flex flex-col items-start justify-center gap-[87px]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-1/2flex flex-col items-center justify-center">
              <div className="w-[650px] flex flex-col items-center justify-start gap-[57px]">
                <div className="relative tracking-[-0.07em]">
                  Become a member of our family
                </div>
                <div className="relative text-5xl leading-[120%] font-light text-center inline-block w-[613px]">{`Enjoy our newest pieces, exclusive events, limited offers and much more when joining our community. `}</div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[72px]">
            <input
              className="border-2 border-grey border-solid rounded-31xl font-clash-grotesk text-xl absolute h-full w-[50%] top-[0%] right-[45.26%] bottom-[1.39%] left-[0%] flex flex-col items-start justify-center focus:outline-none pl-8"
              type="text"
              placeholder="Email adress"
            />
            <button className="cursor-pointer py-4 px-16 bg-black-100 absolute h-full w-[30.76%] top-[0%] right-[10.16%] bottom-[0%] left-[59.08%] rounded-31xl box-border flex flex-row items-center justify-center border-4 border-solid border-black-100">
              <div className="relative text-5xl tracking-[0.15em] font-medium font-clash-grotesk text-beige text-left">
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
