import { FunctionComponent, useEffect, useState } from "react"
import FurnitureSection from "../components/FurnitureSection"
import LexendContainer from "../components/LexendContainer"
import ChairContainer from "../components/ChairContainer"
import NewsletterForm from "../components/NewsletterForm"
import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"
import { NavLink, useParams } from "react-router-dom"
import GobackButton from "../components/GobackButton"
import { useMediaQuery } from "react-responsive"

interface Product {
  product_id: number
  category_id: number
  name: string
  image: string
  extra_image_url: string
  price: number
  bg_category: string
}
interface Category {
  category_id: number
  name: string
  bg_image: string
  design_img: string
  bottom_img: string
  bottom_heading: string
  bottom_text: string
}

const CategoriesView: FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const { category } = useParams<{ category: string }>()

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`/categories/${category}`)
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }
    fetchCategories()
  }, [category])

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(`products/${category}`)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProductsByCategory()
  }, [category])

  const expandedText = `
Our collection of seating options is designed to elevate both
comfort and style. Crafted with meticulous attention to detail,
our luxurious chairs are the epitome of elegance and
sophistication. At Lexend, we understand that every chair should
be a statement piece, reflecting your unique taste and adding a
touch of sophistication to your space. We invite you to explore
our exclusive chair collection and discover the perfect seating
companion for your luxurious lifestyle.
`

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })

  const collapsedText = `${expandedText.substring(0, 179)}`
  const collapsedTextMobile = `${expandedText.substring(0, 105)}`

  const selectedCategory = categories.find((cat) => cat.name === category)

  return (
    <>
      <Navbar2 />
      <div className="relative h-[110px] bg-beige"></div>
      <div className="text-black relative flex w-screen flex-col items-center justify-start overflow-hidden bg-beige text-left font-body-b1 text-[96px]">
        <div className="z-[0] flex w-[100%] flex-col items-center justify-start gap-[32px]">
          <div className="flex flex-col justify-start">
            <div
              key={selectedCategory?.category_id}
              className="relative box-border flex h-[158px] w-[100%] flex-col  items-center justify-end overflow-hidden bg-cover bg-[top] bg-no-repeat px-0 py-[32px] min-[500px]:h-[250px] md:h-[400px] lg:h-[722px] lg:py-[64px]"
              style={{ backgroundImage: `url(/${selectedCategory?.bg_image})` }}
            ></div>

            <GobackButton />
            <div className="relative left-[16px] mx-[!important]  my-0 pt-[32px] text-[48px] tracking-[-0.05em] lg:left-[69.5px] lg:pt-[176px] lg:text-[96px]">
              {category}
            </div>
            <div className="text-black w-[100%] text-5xl lg:flex">
              <div
                className={`relative pl-[16px] pr-[16px] lg:pl-[69px] ${
                  isExpanded ? "h-[350px]" : "h-[160px]"
                }`}
              >
                <div
                  className="inline-block w-[100%] pt-[24px] text-[16px] font-light lg:w-[70%] lg:pt-[32px] lg:text-[24px]"
                  style={{
                    background: !isExpanded
                      ? "linear-gradient(180deg, rgba(255,255,255,0), #f2ebe3), #28221e"
                      : "linear-gradient(180deg, rgba(255,255,255,0), #f2ebe3), #28221e",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: !isExpanded ? "transparent" : "",
                  }}
                >
                  {isExpanded
                    ? expandedText
                    : isDesktopOrLaptop
                    ? collapsedText
                    : collapsedTextMobile}
                </div>
                <div
                  className="relative left-[41.77%] cursor-pointer text-[14px] font-semibold leading-[120%]  underline lg:text-[18px]"
                  onClick={handleClick}
                >
                  {isExpanded ? "Read less" : "...Read more"}
                </div>
              </div>
              <div className="text-black lg: relative left-[16px] w-[122px] whitespace-nowrap pr-[69px] text-[16px] font-light leading-[120%] text-[#28221EB2] lg:left-0 lg:w-[200px] lg:pt-[32px] lg:text-[24px]">
                6 products
              </div>
            </div>
          </div>
          <div className=" mb-[64px] flex flex-wrap justify-center gap-10 lg:mb-[176px]">
            {products.map((product) => (
              <NavLink
                key={product.product_id}
                to={`/product/${product.name}`}
                className="text-inherit [text-decoration:none]"
              >
                <FurnitureSection
                  furnitureImage={`data:image/png;base64,${product.image}`}
                  furnitureName={product.name}
                  furnitureDimensions={`/${product.extra_image_url}`}
                  furniturePrice={product.price}
                />
              </NavLink>
            ))}
          </div>
        </div>

        <LexendContainer designImg={`/${selectedCategory?.design_img}`} />
        <ChairContainer
          bottomImg={`/${selectedCategory?.bottom_img}`}
          bottomHeading={selectedCategory?.bottom_heading}
          bottomText={selectedCategory?.bottom_text}
        />
        <div className="z-[3] flex flex-col items-start justify-start">
          <NewsletterForm />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default CategoriesView
