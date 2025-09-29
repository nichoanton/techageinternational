import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import ScrollToTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import OilAndGas from "./pages/ServicesPage/OilAndGas";
import EngineeringIndustries from "./pages/ServicesPage/Engineering";

function App() {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsTopBarVisible(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <div className="mx-auto">
      <ScrollToTop />
      <TopBar isVisible={isTopBarVisible} />
      <Navbar isTopBarVisible={isTopBarVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />

         {/* Services Routes */}
        <Route path="/services/oil-gas" element={<OilAndGas />} />
        <Route path="/services/engineering" element={<EngineeringIndustries />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
