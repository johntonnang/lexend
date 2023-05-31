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
        const response = await fetch(`http://localhost:3000/product/${product}`)
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
    <div className=" relative flex w-full flex-col items-center justify-start gap-[396px] overflow-hidden bg-beige text-left font-clash-grotesk text-5xl text-black-200">
      <Navbar2 />

      <div className="relative flex w-full flex-col items-center justify-start gap-[226px] overflow-hidden bg-beige text-left text-5xl text-black-200">
        {products.map((product) => (
          <ModernaArmchairSection
            furnitureImage={`data:image/png;base64,${product.image}`}
            furnitureName={product.name}
            furniturePrice={product.price}
            furnitureDescription={product.description}
          />
        ))}
        {/* <ModernaArmchairSection /> */}
      </div>
      <div className="z-[2] box-border flex w-[1728px] flex-row items-baseline justify-between overflow-hidden bg-white px-[188px] py-[53px]">
        <div className="flex flex-row items-start justify-start gap-[240px]">
          <div className="z-[3] flex flex-col items-center justify-start gap-[32px] font-body-b1 text-29xl">
            <div className="relative tracking-[-0.07em]">Product details</div>
            <div className="flex h-[236px] flex-row items-start justify-start text-5xl">
              <div className="box-border flex h-[212px] w-[332px] shrink-0 flex-col items-start justify-center gap-[32px] overflow-hidden py-[57px] pl-[135px] pr-11">
                <b className="relative leading-[120%]">Measurements</b>
                <b className="relative leading-[120%]">Materials</b>
                <b className="relative inline-block w-[177px] leading-[120%]">
                  Specifications
                </b>
              </div>

              <div className="box-border flex h-[212px] w-[1196px] shrink-0 flex-col items-start justify-center gap-[32px] overflow-hidden py-[57px] pl-[113px] pr-11">
                <div className="relative inline-block w-[1183px] font-light leading-[120%]">{`Height: 84 cm. Width: 66 cm. Depth: 74 cm. Seat height: 46 cm. `}</div>
                <div className="relative inline-block w-[1183px] font-light leading-[120%]">{`Frame: Light oak. Upholstery: Premium white fabric. `}</div>
                <div className="relative inline-block w-[1183px] font-light leading-[120%]">
                  {`Removable upholstery for easy cleaning. Follow included washing instructions. `}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-[4] flex flex-col items-center justify-start gap-[64px]">
        <div className="relative flex flex-col items-center justify-start gap-[103px]">
          <div className="relative z-[0] h-[822px] w-[1850px]">
            <img
              className="absolute left-[50px] top-[0px] h-[822px] w-[1129px] "
              alt=""
              src="/rectangle-110@2x.png"
            />
            <img
              className="absolute left-[1200px] top-[0px] h-[822px] w-[586px] object-cover"
              alt=""
              src="/rectangle-112@2x.png"
            />
          </div>
          <div className="absolute left-[1193px] top-[-0.43px] z-[1] mx-[!important] my-0 h-[822px] w-[64px] bg-beige" />
        </div>
        <img
          className="relative h-[1098px] w-[1732px] object-cover"
          alt=""
          src="/image-17@2x.png"
        />
      </div>
      <ReviewsSection />
      <LookCompleter />

      <div className="relative z-[8] h-[945px] w-[1508px]">
        <NewsletterForm />
        <Footer />
      </div>

      <button className="absolute left-[39px] top-[230px] z-[9] mx-[!important] my-0 box-border flex h-[72px] cursor-pointer flex-row items-center justify-center gap-[8px] rounded-31xl border-[4px] border-solid border-brown bg-[transparent] px-14 py-4">
        <img
          className="absolute left-[24px] top-[22px] z-[1] mx-[!important] my-0 h-[27px] w-[27px] shrink-0 overflow-hidden"
          alt=""
          src="/chevron-left1.svg"
        />
      </button>

      <img
        className="absolute left-[24px] top-[22px] z-[1] mx-[!important] my-0 h-[27px] w-[27px] shrink-0 overflow-hidden"
        alt=""
        src="/chevron-left1.svg"
      />
    </div>
  )
}

export default DetailPage
