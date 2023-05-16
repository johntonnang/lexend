import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"

const LandingPage: FunctionComponent = () => {
  return (
    <div className="bg-beige w-full flex flex-col items-center justify-start gap-[176px] text-left text-45xl text-black-200 font-body-b1">
      <div className="h-full flex flex-col items-start justify-start">
        <div className="w-full h-full flex flex-col items-center justify-start">
          <div className="relative w-full h-screen">
            <img
              className="top-[0px] left-[0px] w-full object-cover"
              alt=""
              src="/cathanuri-yr9qtgsunsplash@2x.png"
            />
            <div className="absolute top-[300.66px] left-[108px] w-[843.65px] flex flex-col items-start justify-center gap-[68px]">
              <div className="relative w-[844px] h-[265px]">
                <div className="absolute top-[-0.17px] left-[0.47px] tracking-[-0.05em] inline-block w-[858px]">
                  The new look that lasts forever
                </div>
                <div className="absolute top-[112px] left-[0.88px] text-17xl leading-[120%] font-light inline-block w-[872px] h-[166px]">
                  <p className="m-0">
                    Sustainable design made from materials close to nature has
                    been the vision in our summer pieces.
                  </p>
                  <p className="m-0">
                    Let us introduce our most sustainable pieces ever.
                  </p>
                </div>
              </div>
              <button className="cursor-pointer py-4 px-28 bg-black-100 rounded-31xl box-border w-[233px] h-[72px] flex flex-row items-center justify-center border-[4px] border-solid border-black-100">
                <div className="relative text-13xl tracking-[0.15em] font-clash-grotesk text-beige text-left">
                  Explore
                </div>
              </button>
            </div>
          </div>
          {/* <div className="w-[1728px] h-[157.03px] overflow-hidden shrink-0 flex flex-row py-8 px-[108px] box-border items-end justify-between mt-[-1085px] text-5xl text-beige font-clash-grotesk">
            <a
              href="/"
              className="[text-decoration:none] relative w-[165px] h-[88.47px]z-40"
            >
              <img
                className="relative w-[165px] h-[88.47px]"
                alt=""
                src="/lexend10.svg"
              />
            </a>
            <div className="w-[680px] flex flex-row items-center justify-between">
              <div className="relative w-[115px] h-[35px] text-center">
                <a
                  href="/"
                  className="[text-decoration:none] absolute top-[5.71%] left-[0.87%] tracking-[0.25em] font-medium text-[inherit] z-40"
                >
                  CHAIRS
                </a>
              </div>
              <div className="relative w-[115px] h-[35px]">
                <a
                  href="/"
                  className="[text-decoration:none] absolute top-[5.71%] left-[5.22%] tracking-[0.25em] font-medium text-[inherit] z-40"
                >
                  LAMPS
                </a>
              </div>
              <div className="relative w-[115px] h-[35px]">
                <a
                  href="/"
                  className="[text-decoration:none] absolute top-[5.71%] left-[6.96%] tracking-[0.25em] font-medium text-[inherit] z-40"
                >
                  SOFAS
                </a>
              </div>
              <div className="relative w-[115px] h-[35px]">
                <a
                  href="/"
                  className="[text-decoration:none] absolute top-[5.71%] left-[0.87%] tracking-[0.25em] font-medium text-[inherit] z-40"
                >
                  TABLES
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[50px]">
              <img
                className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/search.svg"
              />
              <img
                className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/bag.svg"
              />
              <img
                className="relative w-[35px] h-[35px] overflow-hidden shrink-0"
                alt=""
                src="/person.svg"
              />
            </div>
          </div> */}
        </div>
      </div>
      <div className="my-[176px]">
        <div className="flex flex-row items-start justify-start gap-[64px] text-center">
          <NavLink
            to="/"
            className="[text-decoration:none] relative w-[308px] h-[308px] text-[inherit]"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-72@2x.png"
            />
            <div className="absolute top-[110%] left-[20.78%] tracking-[-0.05em]">
              Chairs
            </div>
          </NavLink>
          <a className="[text-decoration:none] relative w-[308px] h-[308px] text-[inherit]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-721@2x.png"
            />
            <div className="absolute top-[110%] left-[18.51%] tracking-[-0.05em]">
              Lamps
            </div>
          </a>
          <a className="[text-decoration:none] relative w-[308px] h-[308px] text-[inherit]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-722@2x.png"
            />
            <div className="absolute top-[110%] left-[24.03%] tracking-[-0.05em]">
              Sofas
            </div>
          </a>
          <a className="[text-decoration:none] relative w-[308px] h-[308px] text-[inherit]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-723@2x.png"
            />
            <div className="absolute top-[110%] left-[21.1%] tracking-[-0.05em]">
              Tables
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
