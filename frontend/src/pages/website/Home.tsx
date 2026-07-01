import Hero from "../../components/home/Hero";
import PlanYourSafari from "../../components/home/PlanYourSafari";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import FeaturedPackages from "../../components/home/FeaturedPackages";
import TopDestinations from "../../components/home/TopDestinations";
import SafariFleet from "../../components/home/SafariFleet";
import Testimonials from "../../components/home/Testimonials";
import Gallery from "../../components/home/Gallery";
import Footer from "../../components/home/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <PlanYourSafari />

      <WhyChooseUs />

      <FeaturedPackages />

      <TopDestinations />

      <SafariFleet />

      <Testimonials />

      <Gallery />

      <Footer />
    </>
  );
}