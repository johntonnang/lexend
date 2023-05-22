import { FunctionComponent } from "react";

const SignupForm: FunctionComponent = () => {
  return (
    <form className="absolute top-[0px] left-[2px] bg-white flex flex-col items-center justify-start">
      <div className="w-[1726px] flex flex-row items-center justify-start gap-[87px]">
        <img
          className="relative w-[865px] h-[628px] object-cover"
          alt=""
          src="/rectangle-104@2x.png"
        />
        <div className="w-[668px] flex flex-col items-start justify-center gap-[87px]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[654px] flex flex-col items-center justify-center">
              <div className="w-[650px] flex flex-col items-center justify-start gap-[57px]">
                <div className="relative text-29xl tracking-[-0.07em] font-body-b1 text-black-200 text-left">
                  Become a member of our family
                </div>
                <div className="relative text-5xl leading-[120%] font-light font-body-b1 text-black-200 text-center inline-block w-[613px]">{`Enjoy our newest pieces, exclusive events, limited offers and much more when joining our community. `}</div>
              </div>
            </div>
          </div>
          <div className="relative w-[738px] h-[72px]">
            <input
              className="[border:none] font-clash-grotesk text-xl bg-[transparent] absolute h-[98.61%] w-[54.74%] top-[0%] right-[45.26%] bottom-[1.39%] left-[0%] rounded-[8.09px] flex flex-col items-start justify-center"
              type="text"
              placeholder="Email adress"
            />
            <button className="cursor-pointer py-4 px-16 bg-black-100 absolute h-full w-[30.76%] top-[0%] right-[10.16%] bottom-[0%] left-[59.08%] rounded-31xl box-border flex flex-row items-center justify-center border-[4px] border-solid border-black-100">
              <div className="relative text-5xl tracking-[0.15em] font-medium font-clash-grotesk text-beige text-left">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
