import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo_transparent.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate("/services");

    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
        {/* Section 1: Logo and Description */}
        <div className="space-y-4">
          <div className="text-3xl font-serif font-bold text-textgold ">
            <img
              src={logo}
              alt="Tech Age International Logo"
              className="h-24 w-auto logo-theme"
              loading="lazy"
            />
          </div>
          <h2 className="text-lg font-semibold">
            Regn No.: B-0668/Chennai/Part/1000+/5/8936/2013
          </h2>
          <p className="text-gray-300 text-justify">
            ISO 9001 : 2015 Certified
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="pl-0 sm:pl-12">
          <h3 className="text-lg font-semibold mb-4 text-orange-600">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/home" className="hover:text-[#F1C27D]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-[#F1C27D]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/ourteam" className="hover:text-[#F1C27D]">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#F1C27D]">
                Services
              </Link>
            </li>

            <li>
              <Link to="/clientdetails" className="hover:text-[#F1C27D]">
                Client Details
              </Link>
            </li>
            <li>
              <Link to="/rainformation" className="hover:text-[#F1C27D]">
                RA Information
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-600">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <button
                onClick={() => handleServiceClick("oil-gas")}
                className="hover:text-[#F1C27D] text-left w-full"
              >
                Oil & Gas
              </button>
            </li>
            <li>
              <button
                onClick={() => handleServiceClick("engineering")}
                className="hover:text-[#F1C27D] text-left w-full"
              >
                Engineering Industries
              </button>
            </li>
            <li>
              <button
                onClick={() => handleServiceClick("civil-construction")}
                className="hover:text-[#F1C27D] text-left w-full"
              >
                Civil Construction & MEP
              </button>
            </li>
            <li>
              <button
                onClick={() => handleServiceClick("facility-management")}
                className="hover:text-[#F1C27D] text-left w-full"
              >
                Facility Management
              </button>
            </li>
            <li>
              <button
                onClick={() => handleServiceClick("health-care")}
                className="hover:text-[#F1C27D] text-left w-full"
              >
                Health Care
              </button>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-600">
            Contact Us
          </h3>
          <div className="flex items-start mb-2">
            <FaMapMarkerAlt className="text-[#F1C27D] mr-2 mt-1.5 flex-shrink-0" />
            <p className="text-gray-300 text-justify">
              Plot No. 41, Door No.2, 3rd Cross Street, Brindhavan Nagar,
              Valasaravakkam, Chennai - 600 087, India.
            </p>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-[#F1C27D] mr-2 flex-shrink-0" />
            <p className="text-gray-300">Email: hr@techageinternational.in</p>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="text-[#F1C27D] mr-2 flex-shrink-0" />
            <p className="text-gray-300">Phone: +91 44 4335 6128</p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-10 flex justify-between ml-5 mr-5">
        <div className="p-2 sm:p-0"></div>
        <div className="p-2 sm:p-0">
          © {new Date().getFullYear()} Tech Age International. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
