import FavouriteSection from "@/components/FavouriteSection"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import NewArrivals from "@/components/NewArrivals"
import NewsletterSection from "@/components/NewsletterSection"
import SaleSection from "@/components/SaleSection"
import SliderSection from "@/components/SliderSection"

const LandingPage = () => {
  return (
    <div className="max-w-7xl container-custom mx-auto px-4 md:px-8 lg:px-12 pt-20 flex flex-col items-center">
        <HeroSection />
        <SliderSection />
        <NewArrivals />
        <SaleSection />
        <FavouriteSection />
        <NewsletterSection />
        <Footer />
    </div>
  )
}

export default LandingPage