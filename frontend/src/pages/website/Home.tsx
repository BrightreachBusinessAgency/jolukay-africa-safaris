import SEO from "../../components/common/SEO";

import Hero from "../../components/home/Hero";
import PlanYourSafari from "../../components/home/PlanYourSafari";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import FeaturedPackages from "../../components/home/FeaturedPackages";
import TopDestinations from "../../components/home/TopDestinations";
import SafariFleet from "../../components/home/SafariFleet";
import Testimonials from "../../components/home/Testimonials";
import Gallery from "../../components/home/Gallery";
import CallToAction from "../../components/home/CallToAction";

export default function Home() {
  return (
    <>
      <SEO
        title="JOLUKAY Africa Safaris | Luxury East African Safaris"
        description="Experience unforgettable safaris across Kenya, Tanzania, Uganda and Rwanda. Discover wildlife, luxury safari packages, private tours, and tailor-made adventures with JOLUKAY Africa Safaris."
        keywords="Kenya safari, Tanzania safari, Uganda safari, Rwanda safari, Maasai Mara, Serengeti, Amboseli, luxury safari, private safari, East Africa tours"
      />

      <Hero />

      <PlanYourSafari />

      <WhyChooseUs />

      <FeaturedPackages />

      <TopDestinations />

      <SafariFleet />

      <Testimonials />

      <Gallery />

      <CallToAction />
    </>
  );
}