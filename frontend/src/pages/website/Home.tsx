import SEO from "../../components/common/SEO";

import Hero from "../../components/home/Hero";
import PlanYourSafari from "../../components/home/PlanYourSafari";
import FeaturedPackages from "../../components/home/FeaturedPackages";
import TopDestinations from "../../components/home/TopDestinations";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import SafariFleet from "../../components/home/SafariFleet";
import Gallery from "../../components/home/Gallery";
import Testimonials from "../../components/home/Testimonials";
import CallToAction from "../../components/home/CallToAction";

export default function Home() {
  return (
    <>
      <SEO
        title="JOLUKAY Africa Safaris | Luxury East African Safaris"
        description="Experience unforgettable safaris across Kenya, Tanzania, Uganda and Rwanda. Discover wildlife, luxury safari packages, private tours, and tailor-made adventures with JOLUKAY Africa Safaris."
        keywords="Kenya safari, Tanzania safari, Uganda safari, Rwanda safari, Maasai Mara, Serengeti, Amboseli, luxury safari, private safari, East Africa tours"
      />

      {/* Hero */}
      <Hero />

      {/* Quick Quote */}
      <PlanYourSafari />

      {/* Featured Packages */}
      <FeaturedPackages />

      {/* Destinations */}
      <TopDestinations />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Safari Fleet */}
      <SafariFleet />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <CallToAction />
    </>
  );
}