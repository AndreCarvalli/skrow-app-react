import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

export default function HomePage(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
             <Testimonials/>
            <Footer/>
        </>
    )
}