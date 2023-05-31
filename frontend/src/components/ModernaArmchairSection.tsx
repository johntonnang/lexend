// import { FunctionComponent } from "react"

// type FurnitureSectionType = {
//   furnitureName?: string
//   furniturePrice?: number
//   furnitureImage?: string
//   furnitureDescription?: string
// }

// const ModernaArmchairSection: FunctionComponent<FurnitureSectionType> = ({
//   furnitureName,
//   furniturePrice,
//   furnitureImage,
//   furnitureDescription,
// }) => {
//   return (
//     <div className="z-[1] flex h-[544px] w-full flex-row items-start justify-center gap-[101px] bg-beige  pt-[390px] text-left font-body-b1 text-5xl text-black-200">
//       <div className="z-[0] flex flex-col items-center justify-start lg:w-[1638px] lg:flex-row lg:gap-[40px]">
//         <div className="flex flex-col items-center justify-start gap-[20px]">
//           <img
//             className="h-[93.73%] w-[390px] shrink-0 overflow-hidden object-cover lg:h-[745px] lg:w-[745px]"
//             alt=""
//             src={furnitureImage}
//           />

//           <div className="flex flex-row items-center justify-center gap-[27.73px]">
//             <img
//               className="relative h-[0px] w-[0px] shrink-0 overflow-hidden"
//               alt=""
//               src="/chevron-left.svg"
//             />

//             <div className="flex flex-row items-end justify-start gap-[25.16px]">
//               <img
//                 className="relative h-[8.58px] w-[8.58px]"
//                 alt=""
//                 src="/ellipse-2.svg"
//               />
//               <img
//                 className="relative h-[8.58px] w-[8.58px]"
//                 alt=""
//                 src="/ellipse-1.svg"
//               />
//               <img
//                 className="relative h-[8.58px] w-[8.58px]"
//                 alt=""
//                 src="/ellipse-3.svg"
//               />
//             </div>
//             <img
//               className="relative h-[0px] w-[0px] shrink-0 overflow-hidden"
//               alt=""
//               src="/chevron-right.svg"
//             />
//           </div>
//         </div>

//         <div className="flex h-[745px] w-[336px] flex-col items-start justify-start gap-[110px] lg:w-[745px]">
//           <div className="flex flex-col items-start justify-start gap-[62px]">
//             <div
//               className="
//              inline-blocklg:w-[600px] text-[36px] tracking-[-0.05em] lg:text-[64px]"
//             >
//               {furnitureName}
//             </div>
//             <div className="lg:hidden">
//               <div className="relative inline-block w-[736px] text-13xl font-light leading-[120%]">
//                 {furniturePrice}
//               </div>
//             </div>
//             <div
//               className="lg:text-lg w-[335px]

//             text-base font-light lg:w-[800px]
//             xl:text-xl"
//             >
//               {furnitureDescription}
//             </div>

//             <div className="flex w-[741px] flex-col items-start justify-start gap-[14px]">
//               <div
//                 className="lg:text-lg relative text-[16px] font-light
//               leading-[120%] xl:text-xl "
//               >
//                 Color: White
//               </div>
//               <div className="flex flex-row items-start justify-start gap-[14px]">
//                 <img
//                   className="relative h-[51px] w-[51px]"
//                   alt=""
//                   src="/white.svg"
//                 />
//                 <img
//                   className="relative h-[50px] w-[50px]"
//                   alt=""
//                   src="/brown.svg"
//                 />
//                 <img
//                   className="relative h-[50px] w-[50px]"
//                   alt=""
//                   src="/black.svg"
//                 />
//               </div>
//             </div>
//             <div className="relative inline-block hidden w-[736px] text-13xl font-light leading-[120%] lg:inline-block">
//               furniturePrice
//             </div>
//           </div>
//           <button className="box-border flex h-[72px] w-[330px] cursor-pointer flex-row items-center justify-center rounded-31xl border-[4px] border-solid border-brown bg-brown px-28 py-4 lg:w-[480px]">
//             <div
//               className="text-[16px]tracking-[0.15em] relative
//             text-left font-medium  text-beige lg:text-5xl"
//             >
//               Add to cart
//             </div>
//           </button>
//           <div className="flex h-[28px] w-[258px] flex-row items-center justify-between text-base lg:h-[22px] lg:w-[736px]">
//             <div className="flex flex-row items-center justify-start gap-[10.89px] lg:gap-[24px]">
//               <img
//                 className="relative h-6 w-6 shrink-0 overflow-hidden"
//                 alt=""
//                 src="/check2.svg"
//               />
//               <div className="relative font-light leading-[120%]">
//                 Free delivery
//               </div>
//             </div>
//             <div className="flex flex-row items-center justify-start gap-[10.89px] lg:gap-[24px]">
//               <img
//                 className="relative h-6 w-6 shrink-0 overflow-hidden"
//                 alt=""
//                 src="/check21.svg"
//               />
//               <div className="relative font-light leading-[120%]">
//                 Quality guarantee
//               </div>
//             </div>
//             <div className="flex flex-row items-center justify-start gap-[10.89px] lg:gap-[24px]">
//               <img
//                 className="relative h-6 w-6 shrink-0 overflow-hidden"
//                 alt=""
//                 src="/check2.svg"
//               />
//               <div className="relative font-light leading-[120%]">
//                 3 years warranty
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ModernaArmchairSection

import { FunctionComponent } from "react"

type FurnitureSectionType = {
  furnitureName?: string
  furniturePrice?: number
  furnitureImage?: string
  furnitureDescription?: string
}

const ModernaArmchairSection: FunctionComponent<FurnitureSectionType> = ({
  furnitureName,
  furniturePrice,
  furnitureImage,
  furnitureDescription,
}) => {
  return (
    <div className="z-[1] flex h-[544px] w-full flex-row items-start justify-center gap-[101px] bg-beige  pt-[390px] text-left font-body-b1 text-5xl text-black-200">
      <div className="z-[0] flex flex-col items-center justify-start lg:w-[1638px] lg:flex-row lg:gap-[40px]">
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <img
            className="h-[93.73%] w-[390px] shrink-0 overflow-hidden object-cover lg:h-[745px] lg:w-[745px]"
            alt=""
            src={furnitureImage}
          />

          <div className="flex flex-row items-center justify-center gap-[27.73px]">
            <img
              className="relative h-[0px] w-[0px] shrink-0 overflow-hidden"
              alt=""
              src="/chevron-left.svg"
            />

            <div className="flex flex-row items-end justify-start gap-[25.16px]">
              <img
                className="relative h-[8.58px] w-[8.58px]"
                alt=""
                src="/ellipse-2.svg"
              />
              <img
                className="relative h-[8.58px] w-[8.58px]"
                alt=""
                src="/ellipse-1.svg"
              />
              <img
                className="relative h-[8.58px] w-[8.58px]"
                alt=""
                src="/ellipse-3.svg"
              />
            </div>
            <img
              className="relative h-[0px] w-[0px] shrink-0 overflow-hidden"
              alt=""
              src="/chevron-right.svg"
            />
          </div>
        </div>

        <div className="flex h-[745px] w-[336px] flex-col items-start justify-start gap-[110px] lg:w-[745px]">
          <div className="flex flex-col items-start justify-start gap-[62px]">
            <div
              className="
             inline-block text-[36px] tracking-[-0.05em] lg:w-[600px] lg:text-[64px]"
            >
              {furnitureName}
            </div>
            <div className="lg:hidden">
              <div className="relative inline-block w-[736px] text-13xl font-light leading-[120%]">
                {furniturePrice}
              </div>
            </div>
            <div
              className="lg:text-lg w-[335px]

            text-base font-light lg:w-[800px]
            xl:text-xl"
            >
              {furnitureDescription}
            </div>

            <div className="flex w-[741px] flex-col items-start justify-start gap-[14px]">
              <div
                className="lg:text-lg relative text-[16px] font-light
              leading-[120%] xl:text-xl "
              >
                Color: White
              </div>
              <div className="flex flex-row items-start justify-start gap-[14px]">
                <img
                  className="relative h-[51px] w-[51px]"
                  alt=""
                  src="/white.svg"
                />
                <img
                  className="relative h-[50px] w-[50px]"
                  alt=""
                  src="/brown.svg"
                />
                <img
                  className="relative h-[50px] w-[50px]"
                  alt=""
                  src="/black.svg"
                />
              </div>
            </div>
            <div className="relative inline-block hidden w-[736px] text-13xl font-light leading-[120%] lg:inline-block">
              12 000 SEK
            </div>
          </div>
          <button className="box-border flex h-[72px] w-[330px] cursor-pointer flex-row items-center justify-center rounded-31xl border-[4px] border-solid border-brown bg-brown px-28 py-4 lg:w-[480px]">
            <div
              className="text-[16px]tracking-[0.15em] relative
            text-left font-medium  text-beige lg:text-5xl"
            >
              Add to cart
            </div>
          </button>
          <div className="flex h-[28px] w-[258px] flex-row items-center justify-between text-base lg:h-[22px] lg:w-[736px]">
            <div className="flex flex-row items-center justify-start gap-[10.89px] lg:gap-[24px]">
              <img
                className="relative h-6 w-6 shrink-0 overflow-hidden"
                alt=""
                src="/check2.svg"
              />
              <div className="relative font-light leading-[120%]">
                Free delivery
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10.89px] lg:gap-[24px]">
              <img
                className="relative h-6 w-6 shrink-0 overflow-hidden"
                alt=""
                src="/check21.svg"
              />
              <div className="relative font-light leading-[120%]">
                Quality guarantee
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10.89px] lg:gap-[24px]">
              <img
                className="relative h-6 w-6 shrink-0 overflow-hidden"
                alt=""
                src="/check2.svg"
              />
              <div className="relative font-light leading-[120%]">
                3 years warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernaArmchairSection
