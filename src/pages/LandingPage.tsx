import FavouriteSection from "@/components/FavouriteSection"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import NewArrivals from "@/components/NewArrivals"
import SaleSection from "@/components/SaleSection"
import SliderSection from "@/components/SliderSection"

const LandingPage = () => {
  return (
    <div className="max-w-7xl container-custom mx-auto px-4 md:px-8 lg:px-12 pt-20 flex flex-col items-center">
        <Navbar />
        <HeroSection />
        <SliderSection />
        <NewArrivals />
        <SaleSection />
        <FavouriteSection />
    </div>
  )
}

export default LandingPage