import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"

const LandingPage: FunctionComponent = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-[176px] bg-beige text-left font-body-b1 text-45xl text-black-200">
      <div className="flex h-full flex-col items-start justify-start">
        <div className="flex h-full w-full flex-col items-center justify-start">
          <div className="relative h-screen w-full">
            <img
              className="left-0 top-0 w-full object-cover"
              alt=""
              src="/cathanuri-yr9qtgsunsplash@2x.png"
            />
            <div className="absolute left-[108px] top-[300.66px] flex flex-col items-start justify-center gap-[68px]">
              <div className="relative h-[265px] w-[844px]">
                <div className="absolute left-0 top-0 inline-block w-[858px] tracking-[-0.05em]">
                  The new look that lasts forever
                </div>
                <div className="absolute left-0 top-[112px] inline-block h-[166px] w-[872px] text-17xl font-light leading-[120%]">
                  <p className="m-0">
                    Sustainable design made from materials close to nature has
                    been the vision in our summer pieces.
                  </p>
                  <p className="m-0">
                    Let us introduce our most sustainable pieces ever.
                  </p>
                </div>
              </div>
              <button className="box-border flex h-[72px] w-[233px] cursor-pointer flex-row items-center justify-center rounded-31xl border-[4px] border-solid border-black-100 bg-black-100 px-28 py-4">
                <div className="relative text-left font-clash-grotesk text-13xl tracking-[0.15em] text-beige">
                  Explore
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[176px]">
        <div className="flex-row items-start justify-start gap-[64px] overflow-hidden text-center md:grid md:grid-cols-2 md:gap-[12px] lg:flex">
          <NavLink
            to="/chairs"
            className="relative h-[308px] w-[308px] overflow-hidden text-[inherit] [text-decoration:none]"
          >
            <img
              className="transition-scale relative h-full max-h-full w-full max-w-full overflow-hidden object-cover duration-500 hover:scale-110"
              alt=""
              src="/rectangle-72@2x.png"
            />
          </NavLink>
          <NavLink
            to="/lamps"
            className="relative h-[308px] w-[308px] overflow-hidden text-[inherit] [text-decoration:none]"
          >
            <img
              className="transition-scale relative h-full max-h-full w-full max-w-full overflow-hidden object-cover duration-500 hover:scale-110"
              alt=""
              src="/rectangle-721@2x.png"
            />
          </NavLink>
          <NavLink
            to="/sofas"
            className="relative h-[308px] w-[308px] overflow-hidden text-[inherit] [text-decoration:none]"
          >
            <img
              className="transition-scale relative h-full max-h-full w-full max-w-full overflow-hidden object-cover duration-500 hover:scale-110 "
              alt=""
              src="/rectangle-722@2x.png"
            />
          </NavLink>
          <NavLink
            to="/tables"
            className="relative h-[308px] w-[308px] overflow-hidden text-[inherit] [text-decoration:none]"
          >
            <img
              className="transition-scale relative h-full max-h-full w-full max-w-full overflow-hidden object-cover duration-500 hover:scale-110"
              alt=""
              src="/rectangle-723@2x.png"
            />
          </NavLink>
        </div>
        <div className="flex-row items-start justify-center gap-[64px] overflow-hidden text-center md:grid md:grid-cols-2 md:gap-[12px] lg:flex">
          <NavLink
            to="/chairs"
            className="relative w-[308px] overflow-hidden text-[inherit] [text-decoration:none]"
          >
            Chairs
          </NavLink>
          <NavLink
            to="/lamps"
            className="relative w-[308px] overflow-hidden text-[inherit] [text-decoration:none]"
          >
            Lamps
          </NavLink>
          <NavLink
            to="/sofas"
            className="group relative w-[308px] text-[inherit] [text-decoration:none]"
          >
            Sofas
          </NavLink>
          <NavLink
            to="/tables"
            className="group relative w-[308px] text-[inherit] [text-decoration:none]"
          >
            Tables
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
