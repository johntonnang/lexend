import { FunctionComponent } from "react"
import LandingPage from "../components/LandingPage"
import NewProducts from "../components/NewProducts"
import ClaraSection from "../components/ClaraSection"
import StoreContainer from "../components/StoreContainer"
import NewsletterForm from "../components/NewsletterForm"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { ShoppingCartProvider } from "../context/ShoppingCartContext"

const HomeView: FunctionComponent = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <LandingPage />
      <NewProducts />
      <ClaraSection />
      <StoreContainer />
      <div className="flex flex-col items-center justify-start">
        <NewsletterForm />
        <Footer />
      </div>
    </ShoppingCartProvider>
  )
}

export default HomeView
