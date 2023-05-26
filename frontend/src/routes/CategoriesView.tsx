import { FunctionComponent, useEffect, useState } from "react"
import FurnitureSection from "../components/FurnitureSection"
import LexendContainer from "../components/LexendContainer"
import ChairContainer from "../components/ChairContainer"
import NewsletterForm from "../components/NewsletterForm"
import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"

interface Product {
  category_id: number
  name: string
  image: string
  extra_image_url: string
  price: number
}

const CategoriesView: FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3000/products")
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

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

  const collapsedText = `${expandedText.substring(0, 266)}`

  return (
    <div>
      <div className="text-black relative flex w-screen flex-col items-center justify-start overflow-hidden bg-beige text-left font-body-b1 text-[96px]">
        <div className="z-[0] flex w-[100%] flex-col items-center justify-start gap-[176px]">
          <div className="flex flex-col justify-start">
            <div className="relative box-border flex h-[158px] w-[100%] flex-col  items-center justify-end overflow-hidden bg-[url(/public/frame-87@3x.png)] bg-cover bg-[top] bg-no-repeat px-0 py-[32px] min-[500px]:h-[250px] md:h-[400px] lg:h-[722px] lg:py-[64px]"></div>
            <div className="relative left-[16px] mx-[!important]  my-0 pt-[32px] text-[48px] tracking-[-0.05em] lg:left-[69.5px] lg:pt-[176px] lg:text-[96px]">
              Chairs
            </div>
            <div className="text-black h-[169px] w-[100%] text-5xl lg:flex lg:flex-row lg:items-start lg:justify-between">
              <div className="relative h-[255px]  pl-[16px] pr-[16px] lg:pl-[69px]">
                <div
                  className="inline-block w-[100%] pt-[24px] text-[16px] font-light lg:w-[60%] lg:pt-[32px] lg:text-[24px]"
                  style={{
                    background: !isExpanded
                      ? "linear-gradient(180deg, rgba(255,255,255,0), #f2ebe3), #28221e"
                      : "linear-gradient(180deg, rgba(255,255,255,0), #f2ebe3), #28221e",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: !isExpanded ? "transparent" : "",
                  }}
                >
                  {isExpanded ? expandedText : collapsedText}
                </div>
                <div
                  className="relative left-[41.77%] cursor-pointer text-[14px] font-semibold leading-[120%]  underline lg:text-[18px]"
                  onClick={handleClick}
                >
                  {isExpanded ? "Read less" : "...Read more"}
                </div>
              </div>
              <div className="text-black relative left-[16px] w-[122px] pr-[69px] text-[16px] font-light leading-[120%] text-[#28221EB2]  lg:text-[24px]">
                6 products
              </div>
            </div>
          </div>
          <div className=" mb-[64px] flex flex-wrap justify-center gap-10 lg:mb-[176px]">
            {products.map((product) => (
              <FurnitureSection
                furnitureImage={`data:image/png;base64,${product.image}`}
                furnitureName={product.name}
                furnitureDimensions={product.extra_image_url}
                furniturePrice={product.price}
              />
            ))}
            {/* <FurnitureSection
              furnitureImage="/rectangle-37@2x.png"
              furnitureName="Flowing lounge chair"
              furnitureDimensions="/colors01.svg"
              furniturePrice="15 000 SEK"
            /> */}
            {/* <FurnitureSection
              furnitureImage="/rectangle-371@2x.png"
              furnitureName="Moderna armchair"
              furnitureDimensions="/colors11.svg"
              furniturePrice="12 000 SEK"
            />
            <FurnitureSection
              furnitureImage="/rectangle-372@2x.png"
              furnitureName="Regal armchair "
              furnitureDimensions="/colors21.svg"
              furniturePrice="15 000 SEK"
            />
            <FurnitureSection
              furnitureImage="/rectangle-373@2x.png"
              furnitureName="Wooden dining chair "
              furnitureDimensions="/colors31.svg"
              furniturePrice="3 000 SEK"
            />
            <FurnitureSection
              furnitureImage="/rectangle-374@2x.png"
              furnitureName="Leather armchair"
              furnitureDimensions="/colors41.svg"
              furniturePrice="20 000 SEK"
            />
            <FurnitureSection
              furnitureImage="/rectangle-375@2x.png"
              furnitureName="Mahogany stool"
              furnitureDimensions="/colors51.svg"
              furniturePrice="2 000 SEK"
            /> */}
          </div>
        </div>

        <LexendContainer />
        <ChairContainer />
        <div className="z-[3] flex flex-col items-start justify-start">
          <NewsletterForm />
          <Footer />
        </div>
        <Navbar2 />
        <div></div>
      </div>
    </div>
  )
}

export default CategoriesView
