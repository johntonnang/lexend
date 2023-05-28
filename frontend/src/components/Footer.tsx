import { useState, FunctionComponent } from "react"



const Footer: FunctionComponent = () => {
  const [showCustomerCare, setShowCustomerCare] = useState(false);
const [showOurPolicies, setShowOurPolicies] = useState(false);
const [showOurCompany, setShowOurCompany] = useState(false);

  return (
    <div className="relative w-full text-center font-body-b1 text-base text-white">

        <div className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full bg-brown" />

          <div className=" flex flex-col items-center justify-around xl:flex-row py-[52px]">
            <img
              className="relative h-[88.47px] w-[165px] lg:pr-[80px]"
              alt=""
              src="/lexend101.svg"
            />
            <div>
            <div className="py-[52px] lg:flex">
              <div>

                <div>
                <b className="relative inline-block w-[282px] shrink-0 leading-[120%] text-left pb-[15px] font-medium lg:font-bold">
                  Customer care

                </b>
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden lg:hidden"
                  alt=""
                  src="/Plus.svg"
                  onClick={() => setShowCustomerCare(!showCustomerCare)}
                />
</div>
{(showCustomerCare || window.innerWidth >=1024 ) && (
                <div className="flex flex-col text-left pl-[43px] lg:pl-[0]">
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
              )}
              </div>
              <div>
              <div>
                <b className="relative inline-block w-[282px] shrink-0 leading-[120%] text-left pb-[15px] font-medium lg:font-bold">

                  Our policies
                </b>
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden lg:hidden"
                  alt=""
                  src="/Plus.svg"
                  onClick={() => setShowOurPolicies(!showOurPolicies)}
                />
</div>{(showOurPolicies  || window.innerWidth >=1024) && (
                <div className="flex flex-col text-left pl-[43px] lg:pl-[0]">

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
              )}
              </div>
              <div>
              <div>
                <b className="relative inline-block w-[282px] shrink-0 leading-[120%] text-left pb-[15px] font-medium lg:font-bold">
                  Our company
                </b>
                <img
                  className="relative h-6 w-6 shrink-0 overflow-hidden lg:hidden"
                  alt=""
                  src="/Plus.svg"
                  onClick={() => setShowOurCompany(!showOurCompany)}
                />
                </div>
                {(showOurCompany  || window.innerWidth >=1024) && (
                <div className="flex flex-col text-left pl-[43px] lg:pl-[0]">
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
                )}
                </div>
                <div className="flex flex-row lg:items-end items-start justify-center gap-[19px] pt-[54px]">
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
  )
}

export default Footer
