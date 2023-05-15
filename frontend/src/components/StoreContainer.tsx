import { FunctionComponent } from "react"
import BlogPost from "./BlogPost"

const StoreContainer: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-start justify-center text-left text-5xl text-black-200 font-body-b1 my-[176px]">
      <div className="flex flex-row items-end justify-start gap-[20px]">
        <BlogPost
          rectangle72="/rectangle-724@2x.png"
          sTORES="STORES"
          ourNewStoreInAmsterdam="Our new store in Amsterdam"
          onThe15thOfJuneWeAreProud="On the 15th of June we are proud to announce that we are opening a new store in the heart of Amsterdam. "
        />
        <BlogPost
          rectangle72="/rectangle-725@2x.png"
          sTORES="COLLABORATIONS"
          ourNewStoreInAmsterdam="Lexend x Nature"
          onThe15thOfJuneWeAreProud="Our very latest collaboration together with the Nature family will be launched this fall. Get a sneak peak right now!"
        />
      </div>
    </div>
  )
}

export default StoreContainer
