import { FunctionComponent } from "react"

const Footer: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[317px] text-left text-base text-white font-body-b1">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-brown" />
      </div>
      <div className="absolute h-[61.51%] w-[90.68%] top-[19.24%] right-[5.03%] bottom-[19.24%] left-[4.28%] flex flex-row items-end justify-between">
        <div className="flex flex-row items-end justify-start gap-[227px]">
          <div className="flex flex-row items-center justify-start gap-[227px]">
            <img
              className="relative w-[165px] h-[88.47px]"
              alt=""
              src="/lexend101.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <b className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Customer care
                </b>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Service and support
                </div>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  FAQ
                </div>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Contact us
                </div>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Find store
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <b className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Our policies
                </b>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Return
                </div>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Privacy policies
                </div>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Cookie policies
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <b className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Our company
                </b>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  About us
                </div>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Career
                </div>
                <div className="relative leading-[120%] inline-block w-[282px] h-[39px] shrink-0">
                  Becomes a sales partner
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-end justify-end gap-[15px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/mdifacebook.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/mdiinstagram.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/mditwitter.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
