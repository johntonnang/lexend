import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import React, { useState, useEffect, useRef } from "react"

function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const { openCart, cartQuantity } = useShoppingCart()
  // const menuRef = useRef<HTMLDivElement>(null)
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true)

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

  const handleMenuClick = (): void => {
    setIsMenuOpen(true)
    document.body.style.overflow = "hidden"
  }

  const handleCrossClick = (): void => {
    setIsMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <nav
      className={`${
        isNavbarTransparent
          ? "bg-transparent text-white"
          : "bg-white text-black"
      } flex z-20 top-0 fixed w-full h-[148px] transition-colors duration-500`}
    >
      {/* <button
            className="block focus:outline-none"
            onClick={handleMenuClick}
          >
            <svg
              className={`h-8 w-8 fill-current ${
                isNavbarTransparent ? "text-light-color" : "text-dark-color"
              }`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect fill="none" height="24" width="24" x="0" y="0" />
              <path d="M4,18h16v-2H4v2zM4,13h16v-2H4v2zM4,6v2h16V6H4z" />
            </svg>
          </button> */}
      {/* <button
              className="absolute top-2 right-2 focus:outline-none z-50"
              onClick={handleCrossClick}
            >
              <svg
                className="h-8 w-8 fill-black"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
              </svg>
            </button> */}
      {/* <div className="flex flex-col justify-center h-full">
        <NavLink
          to="/"
          className="navbar-link block mt-4 lg:inline-block lg:mt-0 text-dark-color text-xl font-bold no-underline uppercase text-center hover:text-dark-color"
          onClick={handleCrossClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="navbar-link block mt-4 lg:inline-block lg:mt-0 text-dark-color text-xl font-bold no-underline uppercase text-center hover:text-dark-color"
          onClick={handleCrossClick}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className="navbar-link block mt-4 lg:inline-block lg:mt-0 text-dark-color text-xl font-bold no-underline uppercase text-center hover:text-dark-color"
          onClick={handleCrossClick}
        >
          About
        </NavLink> */}
      {/* <div className="flex items-center justify-end">
          <button onClick={openCart} className="py-2 px-2">
            {cartQuantity > 0 && (
              <div className="rounded-full bg-dark-color text-light-color text-center w-6 h-6 transform translate-x-6 -translate-y-2 absolute">
                {cartQuantity}
              </div>
            )}
            <svg
              className="h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div> */}
      <div className="w-full flex flex-col items-start justify-start">
        <div className="flex w-full flex-col items-center justify-start">
          <div className="w-full overflow-hidden shrink-0 flex flex-row py-8 px-[108px] box-border items-end justify-between text-5xl font-clash-grotesk">
            <a href="/" className="[text-decoration:none] z-40">
              <img className="relative" alt="" src="/lexend10.svg" />
            </a>
            <a
              href="/"
              className="[text-decoration:none] tracking-[0.25em] font-medium text-[inherit] z-40"
            >
              CHAIRS
            </a>
            <a
              href="/"
              className="[text-decoration:none] tracking-[0.25em] font-medium text-[inherit] z-40"
            >
              LAMPS
            </a>
            <a
              href="/"
              className="[text-decoration:none] tracking-[0.25em] font-medium text-[inherit] z-40"
            >
              SOFAS
            </a>
            <a
              href="/"
              className="[text-decoration:none]  tracking-[0.25em] font-medium text-[inherit] z-40"
            >
              TABLES
            </a>
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
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
