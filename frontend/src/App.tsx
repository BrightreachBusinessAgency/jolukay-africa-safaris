import { BrowserRouter } from "react-router-dom";

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

    </BrowserRouter>
  );
}

export default App;