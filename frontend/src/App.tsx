import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/home/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;