// import { FunctionComponent } from "react"

// const ClaraSection: FunctionComponent = () => {
//   return (
//     <div className="flex w-full flex-col items-start justify-start bg-white text-center font-body-b1 text-37xl text-black-200">
//       <div className="flex w-full flex-row items-center justify-start">
//         <img
//           className="relative h-[719px] w-1/2 object-cover"
//           alt=""
//           src="/rectangle-78@2x.png"
//         />
//         <div className="mx-[89px] flex flex-col items-center justify-center">
//           <div className="flex flex-col items-center justify-start gap-[32px]">
//             <div className="flex flex-col items-center justify-start gap-[32px]">
//               <div className="relative inline-block tracking-[-0.06em]">
//                 Meet Clara
//               </div>
//               <div className="relative inline-block w-full font-body-b1 text-5xl font-light leading-[120%]">
//                 Lexend started with Clara’s vision of creating a place for
//                 designer interior. Her passion is in the core of all we do. The
//                 process of selecting the pieces for our family is meticulous and
//                 careful.
//               </div>
//             </div>
//             <button className="box-border flex h-[72px] cursor-pointer flex-row items-center justify-center rounded-31xl border-[4px] border-solid border-brown bg-[transparent] px-16 py-4">
//               <div className="relative text-left font-clash-grotesk text-5xl font-medium tracking-[0.15em] text-brown">
//                 Read more
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ClaraSection

import { FunctionComponent } from "react"

const ClaraSection: FunctionComponent = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start bg-white pb-[78px] text-center font-body-b1 text-37xl text-black-200 lg:h-full lg:pb-0">
      <div className="flex flex-col items-center justify-start lg:flex-row">
        <img
          className="relative h-[541px] w-full object-cover object-top lg:h-[719px] lg:w-1/2"
          alt=""
          src="/rectangle-78@2x.png"
        />
        <div className="mx-[89px] flex flex-col items-center justify-center lg:ml-[89px]">
          <div className="flex flex-col items-center justify-start gap-[32px]">
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <div className="lg:mt-o relative mt-[44px] inline-block text-17xl tracking-[-0.06em] lg:text-37xl">
                Meet Clara
              </div>
              <div className="relative inline-block w-full font-body-b1   text-4xl font-light leading-[120%] lg:text-5xl">
                Lexend started with Clara’s vision of creating a place for
                designer interior. Her passion is in the core of all we do. The
                process of selecting the pieces for our family is meticulous and
                careful.
              </div>
            </div>
            <button className="box-border flex h-[45px] w-[150px] cursor-pointer flex-row items-center justify-center rounded-31xl  border-[2px] border-solid border-brown bg-[transparent] lg:h-[72px] lg:w-[274px] lg:border-[4px]">
              <div className="relative text-left text-base font-medium tracking-[0.15em] text-brown lg:text-5xl">
                Read more
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClaraSection
