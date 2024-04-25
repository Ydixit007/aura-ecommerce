import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"

const LandingPage = () => {
  return (
    <div className="max-w-7xl w-full mx-auto min-h-screen px-4 md:px-8 lg:px-12 pt-20">
        <Navbar />
        <HeroSection />
    </div>
  )
}

export default LandingPage