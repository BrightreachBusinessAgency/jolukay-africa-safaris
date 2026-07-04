import { BrowserRouter } from "react-router-dom";
import TawkChat from "./components/common/TawkChat";
import Navbar from "./components/common/Navbar";
import Footer from "./components/home/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <AppRouter />

      <Footer />

      <WhatsAppButton />

      <TawkChat />
    </BrowserRouter>
  );
}

export default App;