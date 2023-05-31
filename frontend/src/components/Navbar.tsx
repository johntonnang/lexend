import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useState, useEffect } from "react"

interface Category {
  category_id: number
  name: string
  image: string
}

function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openCart, cartQuantity } = useShoppingCart()
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true)
  // const [isHovered, setIsHovered] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

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

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3000/categories")
      const data = await response.json()
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  return (
    <nav
      className={`${
        isNavbarTransparent
          ? "bg-beige text-black-100 lg:bg-transparent lg:text-white"
          : "bg-beige text-black-100 drop-shadow-[0px_4px_18px_rgba(97,78,66,0.25)]"
      } fixed top-0 z-20 flex h-[110px] w-full transition-colors duration-500 lg:h-[148px]`}
    >
      {/* Hamburger menu button */}
      <div className="mx-4 mb-4 flex w-full flex-row items-end justify-between bg-transparent transition-colors focus:outline-none lg:hidden">
        <div className="flex w-full justify-start">
          <button
            className="block bg-transparent focus:outline-none lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 fill-black-100"
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
        </div>
        <div className="flex w-full justify-center">
          <NavLink to="/" className="z-40 [text-decoration:none]">
            <svg
              width="115"
              height="65"
              viewBox="0 0 165 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-black-100"
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
        </div>
        <div className="flex w-full items-end justify-end">
          <NavLink to="/" className="relative z-40 mr-6">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="7" stroke="#28221E" stroke-width="2" />
              <path
                d="M17.8231 19.1769C18.3113 19.665 19.1028 19.665 19.5909 19.1769C20.0791 18.6887 20.0791 17.8972 19.5909 17.4091L17.8231 19.1769ZM12.8231 14.1769L17.8231 19.1769L19.5909 17.4091L14.5909 12.4091L12.8231 14.1769Z"
                fill="#28221E"
              />
            </svg>
          </NavLink>

          <button
            onClick={openCart}
            className="relative z-40 cursor-pointer bg-transparent"
          >
            {cartQuantity > 0 && (
              <div className="absolute h-6 w-6 -translate-y-2 translate-x-6 transform rounded-full bg-black-100 text-center text-white">
                {cartQuantity}
              </div>
            )}
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6H19V18C19 19.1046 18.1046 20 17 20H3C1.89543 20 1 19.1046 1 18V6Z"
                stroke="#28221E"
                stroke-width="2"
              />
              <path
                d="M14 5C14 2.79086 12.2091 1 10 1C7.79086 1 6 2.79086 6 5"
                stroke="#28221E"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile/tablet nav links */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } absolute left-0 top-[110px] h-screen w-full bg-beige shadow-[inset_0px_4px_18px_rgba(97,78,66,0.25)] transition-all duration-500`}
      >
        <div className="ml-6 mt-[32px] flex flex-col gap-[16px] font-body-b1">
          {categories.map((category) => (
            <NavLink
              to={`/categories/${category.name}`}
              className="z-40 my-2 text-base font-medium tracking-[0.05em] text-[inherit] [text-decoration:none]"
            >
              {category.name}
            </NavLink>
          ))}
        </div>
        <div className="h-[140px]"></div>
        <div className="ml-6 flex flex-col gap-[16px] font-body-b1">
          <NavLink
            to="/"
            className="z-40 my-2 font-medium tracking-[0.05em] text-[inherit] [text-decoration:none]"
          >
            Customer Care
          </NavLink>
          <NavLink
            to="/"
            className="z-40 my-2 font-medium tracking-[0.05em] text-[inherit] [text-decoration:none]"
          >
            Our polices
          </NavLink>
          <NavLink
            to="/"
            className="z-40 my-2 font-medium tracking-[0.05em] text-[inherit] [text-decoration:none]"
          >
            Our company
          </NavLink>
          <NavLink
            to="/"
            className="z-40 my-2 flex font-medium tracking-[0.05em] text-[inherit] [text-decoration:none]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5 6.25C12.5 6.91304 12.2366 7.54893 11.7678 8.01777C11.2989 8.48661 10.663 8.75 10 8.75C9.33696 8.75 8.70107 8.48661 8.23223 8.01777C7.76339 7.54893 7.5 6.91304 7.5 6.25C7.5 5.58696 7.76339 4.95107 8.23223 4.48223C8.70107 4.01339 9.33696 3.75 10 3.75C10.663 3.75 11.2989 4.01339 11.7678 4.48223C12.2366 4.95107 12.5 5.58696 12.5 6.25ZM10 10C10.9946 10 11.9484 9.60491 12.6517 8.90165C13.3549 8.19839 13.75 7.24456 13.75 6.25C13.75 5.25544 13.3549 4.30161 12.6517 3.59835C11.9484 2.89509 10.9946 2.5 10 2.5C9.00544 2.5 8.05161 2.89509 7.34835 3.59835C6.64509 4.30161 6.25 5.25544 6.25 6.25C6.25 7.24456 6.64509 8.19839 7.34835 8.90165C8.05161 9.60491 9.00544 10 10 10ZM17.5 16.25C17.5 17.5 16.25 17.5 16.25 17.5H3.75C3.75 17.5 2.5 17.5 2.5 16.25C2.5 15 3.75 11.25 10 11.25C16.25 11.25 17.5 15 17.5 16.25ZM16.25 16.245C16.2487 15.9375 16.0575 15.0125 15.21 14.165C14.395 13.35 12.8612 12.5 10 12.5C7.1375 12.5 5.605 13.35 4.79 14.165C3.9425 15.0125 3.7525 15.9375 3.75 16.245H16.25Z"
                fill="#28221E"
              />
            </svg>
            My account
          </NavLink>
          <div className="mt-[25px] flex w-full flex-row items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-4"
            >
              <path
                d="M10 0.0400391C4.5 0.0400391 0 4.53004 0 10.06C0 15.06 3.66 19.21 8.44 19.96V12.96H5.9V10.06H8.44V7.85004C8.44 5.34004 9.93 3.96004 12.22 3.96004C13.31 3.96004 14.45 4.15004 14.45 4.15004V6.62004H13.19C11.95 6.62004 11.56 7.39004 11.56 8.18004V10.06H14.34L13.89 12.96H11.56V19.96C13.9164 19.5879 16.0622 18.3856 17.6099 16.5701C19.1576 14.7546 20.0054 12.4457 20 10.06C20 4.53004 15.5 0.0400391 10 0.0400391Z"
                fill="#28221E"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-4"
            >
              <path
                d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                fill="#28221E"
              />
            </svg>
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-4"
            >
              <path
                d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.28004 5.09 4.11004 3.38 2.00004 0.79C1.63004 1.42 1.42004 2.16 1.42004 2.94C1.42004 4.43 2.17004 5.75 3.33004 6.5C2.62004 6.5 1.96004 6.3 1.38004 6V6.03C1.38004 8.11 2.86004 9.85 4.82004 10.24C4.19077 10.4122 3.53013 10.4362 2.89004 10.31C3.16165 11.1625 3.69358 11.9084 4.41106 12.4429C5.12854 12.9775 5.99549 13.2737 6.89004 13.29C5.37367 14.4904 3.49404 15.1393 1.56004 15.13C1.22004 15.13 0.880039 15.11 0.540039 15.07C2.44004 16.29 4.70004 17 7.12004 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z"
                fill="#28221E"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="hidden w-full flex-col items-start justify-start lg:flex">
        <div className="flex w-full flex-col items-center justify-start">
          <div className="box-border flex w-full shrink-0 flex-row items-end justify-between overflow-hidden px-[108px] py-8 font-clash-grotesk text-5xl uppercase">
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
            {categories.map((category) => (
              <NavLink
                to={`/categories/${category.name}`}
                className="z-40 font-medium tracking-[0.25em] text-[inherit] [text-decoration:none]"
              >
                {category.name}
              </NavLink>
            ))}
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
              <button
                onClick={openCart}
                // className={`${
                //   isNavbarTransparent ? "color-white" : " color-black-100"
                // } bg-transparent transition-colors duration-500`}
                className="relative z-40 cursor-pointer bg-transparent"
              >
                {cartQuantity > 0 && (
                  <div className="absolute h-6 w-6 -translate-y-2 translate-x-6 transform rounded-full bg-black-100 text-center text-white">
                    {cartQuantity}
                  </div>
                )}
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
              </button>
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
