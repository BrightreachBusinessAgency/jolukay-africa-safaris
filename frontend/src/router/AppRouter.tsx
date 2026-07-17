import { Routes, Route } from "react-router-dom";

import Home from "../pages/website/Home";
import About from "../pages/website/About";
import Packages from "../pages/website/Packages";
import PackageDetail from "../pages/website/PackageDetail";
import Destinations from "../pages/website/Destinations";
import Experiences from "../pages/website/Experiences";
import Gallery from "../pages/website/Gallery";
import Blog from "../pages/website/Blog";
import BlogPost from "../pages/website/BlogPost";
import FAQ from "../pages/website/FAQ";
import Contact from "../pages/website/Contact";
import Booking from "../pages/website/Booking";
import NotFound from "../pages/website/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Main Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:id" element={<PackageDetail />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/gallery" element={<Gallery />} />

      {/* Blog */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

      {/* FAQ */}
      <Route path="/faq" element={<FAQ />} />

      {/* Contact & Booking */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}