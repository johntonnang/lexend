import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import React, { useState, useEffect, useRef } from "react"

function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const { openCart, cartQuantity } = useShoppingCart()
  // const menuRef = useRef<HTMLDivElement>(null)
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.pageYOffset
      if (scrollTop > 0 && isNavbarTransparent) {
        setIsNavbarTransparent(false)
      } else if (scrollTop === 0 && !isNavbarTransparent) {
        setIsNavbarTransparent(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isNavbarTransparent])

  return (
    <nav
      className={`${
        isNavbarTransparent
          ? "bg-transparent text-white"
          : "bg-beige text-black-100"
      } fixed top-0 z-20 flex h-[148px] w-full transition-colors duration-500`}
    >
      {/* Hamburger menu button */}
      <button
        className="block bg-transparent transition-colors duration-500 focus:outline-none lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className={`h-8 w-8 ${
            isNavbarTransparent ? "fill-white" : " fill-black-100"
          } transition-colors duration-500`}
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={`${
              isMenuOpen ? "-rotate-45" : "block"
            } origin-center transform duration-500`}
            y="7"
            width="25"
            height="2"
            rx="1"
          />
          <rect
            className={`${
              isMenuOpen ? "rotate-45" : "block"
            } origin-center transform duration-500`}
            x="12"
            y="14"
            width="13"
            height="2"
            rx="1"
          />
          <rect
            className={`${
              isMenuOpen ? "rotate-45" : "block"
            } origin-center transform duration-500`}
            width="13"
            height="2"
            rx="1"
          />
        </svg>
      </button>
      {/* Mobile/tablet nav links */}
      {isMenuOpen && (
        <div className="mobile-nav-links">
          <NavLink to="/chairs">CHAIRS</NavLink>
          <NavLink to="/lamps">LAMPS</NavLink>
          <NavLink to="/sofas">SOFAS</NavLink>
          <NavLink to="/tables">TABLES</NavLink>
        </div>
      )}
      <div className="hidden w-full flex-col items-start justify-start lg:flex">
        <div className="flex w-full flex-col items-center justify-start">
          <div className="box-border flex w-full shrink-0 flex-row items-end justify-between overflow-hidden px-[108px] py-8 font-clash-grotesk text-5xl">
            <NavLink to="/" className="z-40 [text-decoration:none]">
              <svg
                width="165"
                height="83"
                viewBox="0 0 165 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  isNavbarTransparent ? "stroke-beige" : "stroke-black-100"
                } "relative duration-500" transition-colors `}
              >
                <path
                  d="M36.8965 56.4584C34.9481 54.2331 32.3569 52.6261 29.4577 51.8452C26.5585 51.0642 23.4846 51.1452 20.6333 52.0777C17.782 53.0101 15.2844 54.7512 13.4633 57.0758C11.6421 59.4004 10.5812 62.2017 10.4176 65.1177C10.254 68.0337 10.9953 70.9302 12.5456 73.433C14.0959 75.9358 16.384 77.9298 19.1141 79.1572C21.8442 80.3846 24.8908 80.7891 27.8603 80.3183C30.8297 79.8475 33.5854 78.5231 35.7712 76.5163"
                  stroke-width="3.09651"
                />
                <line
                  x1="15.4878"
                  y1="75.8814"
                  x2="36.2787"
                  y2="54.8693"
                  stroke-width="3.09651"
                />
                <path
                  d="M89.9796 56.4584C88.0312 54.2331 85.44 52.6261 82.5408 51.8452C79.6416 51.0642 76.5677 51.1452 73.7164 52.0777C70.8651 53.0101 68.3675 54.7512 66.5464 57.0758C64.7253 59.4004 63.6644 62.2017 63.5008 65.1177C63.3372 68.0337 64.0784 70.9302 65.6287 73.433C67.179 75.9358 69.4671 77.9298 72.1972 79.1572C74.9273 80.3846 77.974 80.7891 80.9434 80.3183C83.9128 79.8475 86.6685 78.5231 88.8543 76.5163"
                  stroke-width="3.09651"
                />
                <line
                  x1="68.5711"
                  y1="75.8814"
                  x2="89.362"
                  y2="54.8693"
                  stroke-width="3.09651"
                />
                <path
                  d="M124.082 65.0267C124.082 61.3898 122.555 57.9018 119.838 55.3301C117.122 52.7584 113.437 51.3136 109.594 51.3136C105.752 51.3136 102.067 52.7584 99.3504 55.3301C96.6335 57.9018 95.1072 61.3898 95.1072 65.0267"
                  stroke-width="3.09651"
                />
                <line
                  x1="94.9966"
                  y1="49.5441"
                  x2="94.9966"
                  y2="82.0575"
                  stroke-width="3.31769"
                />
                <line
                  x1="124.082"
                  y1="65.0267"
                  x2="124.082"
                  y2="82.0576"
                  stroke-width="3.09651"
                />
                <line
                  x1="159.028"
                  y1="-0.000122003"
                  x2="159.028"
                  y2="82.0575"
                  stroke-width="3.09651"
                />
                <path
                  d="M159.028 65.8008C159.028 73.9142 152.403 80.5092 144.209 80.5092C136.015 80.5092 129.39 73.9142 129.39 65.8008C129.39 57.6874 136.015 51.0924 144.209 51.0924C152.403 51.0924 159.028 57.6874 159.028 65.8008Z"
                  stroke-width="3.09651"
                />
                <mask
                  id="mask0_110_1405"
                  maskUnits="userSpaceOnUse"
                  x="40"
                  y="49"
                  width="20"
                  height="34"
                >
                  <rect
                    x="40"
                    y="49.5441"
                    width="20"
                    height="32.5"
                    fill="#F2EBE3"
                  />
                </mask>
                <g mask="url(#mask0_110_1405)">
                  <line
                    y1="-1.54826"
                    x2="38.0014"
                    y2="-1.54826"
                    transform="matrix(0.443395 0.896326 -0.8925 0.451048 40.2499 49.5442)"
                    stroke-width="3.09651"
                  />
                  <line
                    y1="-1.54826"
                    x2="38.0014"
                    y2="-1.54826"
                    transform="matrix(-0.443395 0.896326 0.8925 0.451048 59.7233 49.5441)"
                    stroke-width="3.09651"
                  />
                </g>
                <g clip-path="url(#clip0_110_1405)">
                  <line
                    x1="5.08708"
                    y1="0.221085"
                    x2="5.08707"
                    y2="82.0602"
                    stroke-width="3.09651"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_110_1405">
                    <rect
                      width="3.09651"
                      height="81.8364"
                      fill="white"
                      transform="translate(3.53882 0.221085)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </NavLink>
            <NavLink
              to="/chairs"
              className="z-40 font-medium tracking-[0.25em] text-[inherit] [text-decoration:none]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              CHAIRS
              {isHovered && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-2 transform bg-black-100 transition-all duration-300"></div>
              )}
            </NavLink>
            <NavLink
              to="/lamps"
              className="z-40 font-medium tracking-[0.25em] text-[inherit] [text-decoration:none]"
            >
              LAMPS
            </NavLink>
            <NavLink
              to="/sofas"
              className="z-40 font-medium tracking-[0.25em] text-[inherit] [text-decoration:none]"
            >
              SOFAS
            </NavLink>
            <NavLink
              to="/tables"
              className="z-40  font-medium tracking-[0.25em] text-[inherit] [text-decoration:none]"
            >
              TABLES
            </NavLink>
            <div className="flex flex-row items-center justify-start gap-[50px]">
              <NavLink to="/" className="relative z-40 h-[30px] w-[30px]">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isNavbarTransparent ? "fill-beige" : " fill-black-100"
                  } "relative duration-500" transition-colors `}
                >
                  <g clip-path="url(#clip0_101_525)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.5764 20.0791C19.7505 19.9048 19.9573 19.7665 20.1849 19.6721C20.4125 19.5778 20.6565 19.5292 20.9029 19.5292C21.1493 19.5292 21.3933 19.5778 21.6209 19.6721C21.8486 19.7665 22.0553 19.9048 22.2295 20.0791L29.4482 27.2979C29.8001 27.6494 29.9978 28.1264 29.998 28.6238C29.9982 29.1211 29.8007 29.5982 29.4492 29.9501C29.0976 30.3019 28.6207 30.4996 28.1233 30.4998C27.6259 30.5 27.1488 30.3026 26.797 29.951L19.5782 22.7322C19.4039 22.5581 19.2656 22.3513 19.1712 22.1237C19.0769 21.8961 19.0283 21.6521 19.0283 21.4057C19.0283 21.1593 19.0769 20.9153 19.1712 20.6877C19.2656 20.46 19.4039 20.2533 19.5782 20.0791H19.5764Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1875 23C13.5418 23 14.8828 22.7333 16.1339 22.215C17.3851 21.6968 18.5219 20.9371 19.4795 19.9795C20.4371 19.0219 21.1968 17.8851 21.715 16.6339C22.2333 15.3828 22.5 14.0418 22.5 12.6875C22.5 11.3332 22.2333 9.99225 21.715 8.74108C21.1968 7.48991 20.4371 6.35307 19.4795 5.39546C18.5219 4.43786 17.3851 3.67824 16.1339 3.15999C14.8828 2.64174 13.5418 2.375 12.1875 2.375C9.45246 2.375 6.82943 3.46149 4.89546 5.39546C2.96149 7.32943 1.875 9.95246 1.875 12.6875C1.875 15.4225 2.96149 18.0456 4.89546 19.9795C6.82943 21.9135 9.45246 23 12.1875 23V23ZM24.375 12.6875C24.375 15.9198 23.091 19.0198 20.8054 21.3054C18.5198 23.591 15.4198 24.875 12.1875 24.875C8.95517 24.875 5.85524 23.591 3.56964 21.3054C1.28404 19.0198 0 15.9198 0 12.6875C0 9.45517 1.28404 6.35524 3.56964 4.06964C5.85524 1.78404 8.95517 0.5 12.1875 0.5C15.4198 0.5 18.5198 1.78404 20.8054 4.06964C23.091 6.35524 24.375 9.45517 24.375 12.6875V12.6875Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_101_525">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </NavLink>
              <NavLink to="/" className="relative z-40 h-[30px] w-[30px]">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isNavbarTransparent ? "fill-beige" : " fill-black-100"
                  } "relative duration-500" transition-colors `}
                >
                  <g clip-path="url(#clip0_101_528)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 2.375C13.7568 2.375 12.5645 2.86886 11.6854 3.74794C10.8064 4.62701 10.3125 5.8193 10.3125 7.0625V8H19.6875V7.0625C19.6875 5.8193 19.1936 4.62701 18.3146 3.74794C17.4355 2.86886 16.2432 2.375 15 2.375V2.375ZM21.5625 8V7.0625C21.5625 5.32202 20.8711 3.65282 19.6404 2.42211C18.4097 1.1914 16.7405 0.5 15 0.5C13.2595 0.5 11.5903 1.1914 10.3596 2.42211C9.1289 3.65282 8.4375 5.32202 8.4375 7.0625V8H1.875V26.75C1.875 27.7446 2.27009 28.6984 2.97335 29.4016C3.67661 30.1049 4.63044 30.5 5.625 30.5H24.375C25.3696 30.5 26.3234 30.1049 27.0266 29.4016C27.7299 28.6984 28.125 27.7446 28.125 26.75V8H21.5625ZM3.75 9.875V26.75C3.75 27.2473 3.94754 27.7242 4.29917 28.0758C4.65081 28.4275 5.12772 28.625 5.625 28.625H24.375C24.8723 28.625 25.3492 28.4275 25.7008 28.0758C26.0525 27.7242 26.25 27.2473 26.25 26.75V9.875H3.75Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_101_528">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </NavLink>
              <NavLink to="/" className="relative z-40 h-[35px] w-[35px]">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isNavbarTransparent ? "fill-beige" : " fill-black-100"
                  } "relative duration-500" transition-colors `}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.875 10.9375C21.875 12.0978 21.4141 13.2106 20.5936 14.0311C19.7731 14.8516 18.6603 15.3125 17.5 15.3125C16.3397 15.3125 15.2269 14.8516 14.4064 14.0311C13.5859 13.2106 13.125 12.0978 13.125 10.9375C13.125 9.77718 13.5859 8.66438 14.4064 7.84391C15.2269 7.02344 16.3397 6.5625 17.5 6.5625C18.6603 6.5625 19.7731 7.02344 20.5936 7.84391C21.4141 8.66438 21.875 9.77718 21.875 10.9375V10.9375ZM17.5 17.5C19.2405 17.5 20.9097 16.8086 22.1404 15.5779C23.3711 14.3472 24.0625 12.678 24.0625 10.9375C24.0625 9.19702 23.3711 7.52782 22.1404 6.29711C20.9097 5.0664 19.2405 4.375 17.5 4.375C15.7595 4.375 14.0903 5.0664 12.8596 6.29711C11.6289 7.52782 10.9375 9.19702 10.9375 10.9375C10.9375 12.678 11.6289 14.3472 12.8596 15.5779C14.0903 16.8086 15.7595 17.5 17.5 17.5V17.5ZM30.625 28.4375C30.625 30.625 28.4375 30.625 28.4375 30.625H6.5625C6.5625 30.625 4.375 30.625 4.375 28.4375C4.375 26.25 6.5625 19.6875 17.5 19.6875C28.4375 19.6875 30.625 26.25 30.625 28.4375ZM28.4375 28.4288C28.4353 27.8906 28.1006 26.2719 26.6175 24.7887C25.1913 23.3625 22.5072 21.875 17.5 21.875C12.4906 21.875 9.80875 23.3625 8.3825 24.7887C6.89938 26.2719 6.56688 27.8906 6.5625 28.4288H28.4375Z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
