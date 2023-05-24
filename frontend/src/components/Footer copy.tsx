import { FunctionComponent } from "react"

const Footer: FunctionComponent = () => {
  return (
    <div className="relative h-[317px] w-full text-left font-body-b1 text-base text-white">
      <div className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full">
        <div className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full bg-brown" />
      </div>
      <div className="absolute bottom-[19.24%] left-[4.28%] right-[5.03%] top-[19.24%] flex h-[61.51%] w-[90.68%] flex-row items-end justify-between">
        <div className="flex flex-row items-end justify-start gap-[227px]">
          <div className="flex flex-row items-center justify-start gap-[227px]">
            <img
              className="relative h-[88.47px] w-[165px]"
              alt=""
              src="/lexend101.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <b className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Customer care
                </b>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Service and support
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  FAQ
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Contact us
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Find store
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <b className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Our policies
                </b>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Return
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Privacy policies
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Cookie policies
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <b className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Our company
                </b>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  About us
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Career
                </div>
                <div className="relative inline-block h-[39px] w-[282px] shrink-0 leading-[120%]">
                  Becomes a sales partner
                </div>
              </div>
              <div className="flex flex-row items-end justify-end">
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/mdifacebook.svg"
                />
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/mdiinstagram.svg"
                />
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/mditwitter.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
