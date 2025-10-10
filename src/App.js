import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import ScrollToTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import Loading from "./assets/loading.svg";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Services = lazy(() => import("./pages/Services"));
const ClientDetails = lazy(() => import("./pages/Clients"));
const RAInformation = lazy(() => import("./pages/RAInformation"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

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
      
      <Suspense 
        fallback={
          <div className="min-h-screen bg-gray-200 flex items-center justify-center">
            <img
              className="w-40 h-40 object-contain"
              src={Loading}
              alt="loading"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clientdetails" element={<ClientDetails />} />
          <Route path="/rainformation" element={<RAInformation />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;