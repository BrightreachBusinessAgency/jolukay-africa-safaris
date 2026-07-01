import Navbar from "./components/common/Navbar";
import Footer from "./components/home/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;