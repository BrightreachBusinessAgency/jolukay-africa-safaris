import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/website/Home";
import About from "../pages/website/About";
import Packages from "../pages/website/Packages";
import Destinations from "../pages/website/Destinations";
import Gallery from "../pages/website/Gallery";
import Contact from "../pages/website/Contact";
import Booking from "../pages/website/Booking";
import NotFound from "../pages/website/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/packages" element={<Packages />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}