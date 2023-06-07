import { FunctionComponent, useEffect, useState } from "react"
import ModernaArmchairSection from "../components/ModernaArmchairSection"
import ReviewsSection from "../components/ReviewsSection"
import LookCompleter from "../components/LookCompleter"
import NewsletterForm from "../components/NewsletterForm"
import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"
import { useParams } from "react-router-dom"

interface Product {
  product_id: number
  category_id: number
  name: string
  image: string
  extra_image_url: string
  price: number
  description: string
}

const DetailPage: FunctionComponent = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { product } = useParams<{ product: string }>()
  console.log(product)

  useEffect(() => {
    const fetchProductsByProduct = async () => {
      try {
        const response = await fetch(`/product/${product}`)
        const data = await response.json()
        console.log(response)
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProductsByProduct()
  }, [product])

  return (
    <>
      <Navbar2 />

      <div className=" relative flex w-full flex-col items-center justify-start gap-[176px] overflow-hidden bg-beige text-left font-clash-grotesk text-5xl text-black-200">
        {products.map((product) => (
          <ModernaArmchairSection
            furnitureImage={`data:image/png;base64,${product.image}`}
            furnitureName={product.name}
            furniturePrice={product.price}
            furnitureDescription={product.description}
          />
        ))}

        <div className="z-[2] flex h-[483px] flex-col items-center justify-center gap-[32px] bg-white text-[24px] lg:text-29xl">
          <div className="relative tracking-[-0.07em]">Product details</div>
          <div className="flex h-[236px] flex-row items-start justify-start text-[14px] lg:text-5xl">
            <div className="box-border flex h-[236px] w-[432px] shrink-0 flex-col items-start justify-center gap-[32px] overflow-hidden py-[57px] pl-[135px] pr-11">
              <b className="relative leading-[120%]">Measurements</b>
              <b className="relative leading-[120%]">Materials</b>
              <b className="relative inline-block w-[177px] leading-[120%]">
                Specifications
              </b>
            </div>

            <div className="gap-50px box-border flex h-[240px] w-[193px] shrink-0 flex-col items-start justify-center gap-[32px] overflow-hidden py-[57px] pl-[0px] pr-11 lg:hidden lg:h-[240px] lg:w-[1296px] lg:pl-[113px]">
              <div className="w-[1183px]font-light relative inline-block leading-[120%]">
                {`Height: 84 cm. Width: 66 cm. Depth: 74 cm. Seat height: 46 cm. `}
              </div>
              <div className="relative inline-block w-[1183px] font-light leading-[120%]">
                {`Frame: Light oak. Upholstery: Premium white fabric. `}
              </div>
              <div className="relative inline-block w-[1183px] font-light leading-[120%]">
                {`Removable upholstery for easy cleaning. Follow included washing instructions. `}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="gap-50px box-border flex h-[80px] w-[153px] shrink-0 flex-col items-start justify-center gap-[32px] overflow-hidden py-[57px] pl-[113px] pr-11 lg:h-[240px] lg:w-[1296px]">
                <div className="relative inline-block w-[1183px] font-light leading-[120%]">
                  {`Height: 84 cm. Width: 66 cm. Depth: 74 cm. Seat height: 46 cm. `}
                </div>
                <div className="relative inline-block w-[1183px] font-light leading-[120%]">
                  {`Frame: Light oak. Upholstery: Premium white fabric. `}
                </div>
                <div className="relative inline-block w-[1183px] font-light leading-[120%]">
                  {`Removable upholstery for easy cleaning. Follow included washing instructions. `}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="z-[4] flex flex-col items-center justify-start gap-[12px] lg:gap-[64px]">
          <div className="relative flex flex-col items-center justify-start gap-[103px]">
            <div className="z-[0]lg:gap-[6px] lg:relative lg:h-[822px] lg:w-[1735px]">
              <img
                className="left-[0px] top-[0px] h-[185.52px] w-[254.81px] lg:absolute lg:h-[822px]  lg:w-[1129px]"
                alt=""
                src="/rectangle-110@2x.png"
              />
              <img
                className="h-[185.52px]lg:object-cover left-[267.13px] top-[0px]
              w-[132.26px]
              lg:absolute lg:left-[1142px] lg:h-[822px]
              lg:w-[586px] "
                alt=""
                src="/rectangle-112@2x.png"
              />
            </div>
            <div className="absolute left-[1193px] top-[-0.43px] z-[1] mx-[!important] my-0  h-[822px] bg-beige" />
          </div>
          <img
            className="h-[260px]object-cover relative w-[400px] lg:h-[1098px] lg:w-[1732px] "
            alt=""
            src="/image-17@2x.png"
          />
        </div>
        <ReviewsSection />
        <LookCompleter />

        <div className="gap-[0px] ">
          <NewsletterForm />
          <Footer />
        </div>
        <button className="hidden lg:absolute lg:left-[39px] lg:top-[230px] lg:z-[9] lg:mx-[!important] lg:my-0 lg:box-border lg:block lg:flex lg:h-[72px] lg:cursor-pointer lg:flex-row lg:items-center lg:justify-center lg:gap-[8px] lg:rounded-31xl lg:border-[4px] lg:border-solid lg:border-brown lg:bg-[transparent] lg:px-14 lg:py-4">
          <div className="lg:relative lg:z-[0] lg:text-left lg:text-5xl  lg:font-medium lg:tracking-[0.15em] lg:text-brown">
            Chairs
          </div>

          <img
            className="absolute left-[24px] top-[22px] z-[1] mx-[!important] my-0 h-[27px] w-[27px] shrink-0 overflow-hidden"
            alt=""
            src="/chevron-left1.svg"
          />
        </button>

        <img
          className="absolute left-[24px] top-[190px] z-[1] mx-[!important] my-0 h-[27px] w-[27px] shrink-0 overflow-hidden lg:hidden"
          alt=""
          src="/chevron-left1.svg"
        />
      </div>
    </>
  )
}

export default DetailPage
