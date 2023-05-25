import { FunctionComponent, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

interface Category {
  category_id: number
  name: string
  image: string
}

const LandingPage: FunctionComponent = () => {
  const [categories, setCategories] = useState<Category[]>([])

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
                <div className="absolute left-0 inline-block w-[858px] tracking-[-0.05em] sm:top-72 md:top-72 lg:top-0">
                  Furniture that lasts forever
                </div>
                <div className="absolute left-0 top-[112px] inline-block h-[166px] w-[872px] text-17xl font-light leading-[120%] sm:top-72 md:top-[400px] lg:top-[112px]">
                  <p className="m-0">
                    Sustainable design made from materials close to nature has
                    been the vision in our summer pieces.
                  </p>
                  <p className="m-0">
                    Let us introduce our most sustainable pieces ever.
                  </p>
                </div>
              </div>
              <button className="absolute box-border flex h-[72px] w-[233px] cursor-pointer flex-row items-center justify-center rounded-31xl border-[4px] border-solid border-black-100 bg-black-100 px-28 py-4 font-clash-grotesk text-13xl tracking-[0.15em] text-beige sm:top-[] md:top-[612px] lg:top-[312px]">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[176px]">
        <div className="w-full flex-row items-start justify-start gap-[32px] overflow-hidden text-center sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:flex">
          {categories.map((category) => (
            <NavLink
              key={category.category_id}
              to={`/${category.name.toLowerCase()}`}
              className="relative h-[308px] w-[308px] overflow-hidden text-[inherit] [text-decoration:none]"
            >
              <img
                className="transition-scale relative h-full max-h-full w-full max-w-full overflow-hidden object-cover duration-500 hover:scale-110"
                alt=""
                src={`data:image/png;base64,${category.image}`}
              />
            </NavLink>
          ))}
        </div>
        <div className="flex-row items-start justify-center gap-[32px] overflow-hidden text-center md:grid md:grid-cols-2 lg:flex">
          <NavLink
            to="/chairs"
            className="relative w-full overflow-hidden pt-6 text-[inherit] [text-decoration:none]"
          >
            Chairs
          </NavLink>
          <NavLink
            to="/lamps"
            className="relative w-full overflow-hidden pt-6 text-[inherit] [text-decoration:none]"
          >
            Lamps
          </NavLink>
          <NavLink
            to="/sofas"
            className="relative w-full overflow-hidden pt-6 text-[inherit] [text-decoration:none]"
          >
            Sofas
          </NavLink>
          <NavLink
            to="/tables"
            className="relative w-full overflow-hidden pt-6 text-[inherit] [text-decoration:none]"
          >
            Tables
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
