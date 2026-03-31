
import HeroSection from "../components/HeroSection"
import GallerySection from "../components/Gallery"
import ReviewsSection from "../components/Review"
import AboutSection from "../components/Aboutus-Part-1"
import AchievementSection from "../components/Aboutus-Part-2"
import MenuSection from "../components/Menu"
const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <AchievementSection />
            <MenuSection />
            <GallerySection />
            <ReviewsSection />
        </div>
    )
}

export default Home
