import { FunctionComponent, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

interface Category {
  category_id: number
  name: string
  image: string
}

const LandingPage: FunctionComponent = () => {
  const [categories, setCategories] = useState<Category[]>([])
  // const categoriesRef = useRef<HTMLDivElement>(null)

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

  const handleExploreClick = () => {
    const yPosition = 900
    window.scrollTo({ top: yPosition, behavior: "smooth" })
  }

  return (
    <div className="flex w-full flex-col items-center justify-start bg-beige text-left font-body-b1 text-37xl text-black-200 md:text-45xl lg:gap-[176px]">
      <div className="relative h-[110px] bg-beige lg:hidden"></div>
      <div className="flex h-full flex-col items-start justify-start">
        <div className="flex h-full w-full flex-col items-center justify-start">
          <div className="relative w-full">
            <img
              className="left-0 top-0 w-full object-cover"
              alt=""
              src="/cathanuri-yr9qtgsunsplash@2x.png"
            />
            <div className="mx-6 mt-6 flex flex-col items-start justify-center gap-[32px] md:gap-[68px] lg:absolute lg:left-[108px] lg:top-[300.66px] lg:-m-0">
              <div className="relative w-[300px] md:w-[400px] lg:h-[265px] lg:w-[844px]">
                <div className="relative left-0 inline-block leading-[100%] tracking-[-0.05em] lg:absolute lg:top-0">
                  Furniture that lasts forever
                </div>
                <div className="relative left-0 mt-4 inline-block text-4xl font-light leading-[120%] md:text-17xl lg:absolute lg:top-[112px] lg:m-0 lg:h-[166px] lg:w-[872px]">
                  <p className="m-0">
                    Sustainable design made from materials close to nature has
                    been the vision in our summer pieces.
                  </p>
                  <p className="m-0">
                    Let us introduce our most sustainable pieces ever.
                  </p>
                </div>
              </div>
              <button
                className="box-border flex cursor-pointer flex-row items-center justify-center rounded-31xl border-[4px] border-solid border-black-100 bg-black-100 px-6 py-2 text-base tracking-[0.15em] text-beige sm:top-[] md:top-[612px] lg:absolute lg:top-[312px] lg:h-[72px] lg:w-[233px] lg:px-28 lg:py-4 lg:text-13xl"
                onClick={handleExploreClick}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 mt-[88px] lg:mt-0">
        <div className="grid w-full grid-cols-2 gap-[12px] overflow-hidden text-center text-6xl md:gap-[32px] lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-[32px] lg:text-45xl">
          {categories.map((category) => (
            <NavLink
              key={category.category_id}
              to={`categories/${category.name}`}
              className="relative text-[inherit] [text-decoration:none]"
            >
              <div className="h-[200px] w-full overflow-hidden md:h-[270px] md:w-[250px] lg:h-[308px] lg:w-[308px]">
                <img
                  className=" transition-scale relative h-full max-h-full w-full max-w-full overflow-hidden object-cover duration-500 hover:scale-110"
                  alt=""
                  src={`data:image/png;base64,${category.image}`}
                />
              </div>
              <div className="gap-[12px] overflow-hidden pt-[12px] md:gap-[32px] lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-[32px] lg:pt-[28px]">
                {category.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
