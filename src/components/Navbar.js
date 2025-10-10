import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown  } from "react-icons/fi";
import TopBar from "./TopBar";
import logo from "../assets/logo/logo_transparent.png";

const Navbar = ({ isTopBarVisible }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

   const handleServiceClick = (serviceId) => {
    navigate('/services');
    
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }, 100);
  };

  return (
    <div>
      <TopBar isVisible={isTopBarVisible} />

      <nav
        className={`bg-white shadow-md fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isTopBarVisible ? "pt-6" : "pt-0"
        }`}
      >
        <div className="px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <NavLink to="/home" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Tech Age International Logo"
                className="h-12 md:h-16 w-auto"
                loading="lazy"
              />
              <p className="text-base md:text-xl font-serif font-bold text-[black] whitespace-nowrap">
                TECH AGE INTERNATIONAL
              </p>
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden xl:flex space-x-8">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-[#EA580C] font-semibold"
                  : "text-[black] font-semibold hover:text-[#EA580C]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? "text-[#EA580C] font-semibold "
                  : "text-[black] font-semibold hover:text-[#EA580C]"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/ourteam"
              className={({ isActive }) =>
                isActive
                  ? "text-[#EA580C] font-semibold "
                  : "text-[black] font-semibold hover:text-[#EA580C]"
              }
            >
              Our Team
            </NavLink>
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EA580C] font-semibold py-6"
                    : "text-[black] font-semibold hover:text-[#EA580C] py-6"
                }
              >
                Services 
              <span className="inline-block ml-1 transform translate-y-1"><FiChevronDown /></span>
              </NavLink>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-5 theme-text-bg rounded-b-xl shadow-lg w-56 z-10">
                  <ul>
                    <div className="h-1 w-full bg-[#EA580C]"></div>
                    <li>
                       <button
                        onClick={() => handleServiceClick('oil-gas')}
                        className="block w-full text-left px-4 py-2 text-[black] hover:bg-orangebg hover:text-white hover:font-semibold transition-colors duration-200"
                      >
                        Oil & Gas
                      </button>
                    </li>
                    <li>
                       <button
                        onClick={() => handleServiceClick('engineering')}
                        className="block w-full text-left px-4 py-2 text-[black] hover:bg-orangebg hover:text-white hover:font-semibold transition-colors duration-200"
                      >
                        Engineering Industries
                      </button>
                    </li>

                    <li>
                        <button
                        onClick={() => handleServiceClick('civil-construction')}
                        className="block w-full text-left px-4 py-2 text-[black] hover:bg-orangebg hover:text-white hover:font-semibold transition-colors duration-200"
                      >
                        Civil Construction & MEP
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleServiceClick('facility-management')}
                        className="block w-full text-left px-4 py-2 text-[black] hover:bg-orangebg hover:text-white hover:font-semibold transition-colors duration-200"
                      >
                        Facility Management
                      </button>
                    </li>
                    <li>
                       <button
                        onClick={() => handleServiceClick('health-care')}
                        className="block w-full text-left px-4 py-2 text-[black] hover:bg-orangebg hover:text-white rounded-b-xl hover:font-semibold transition-colors duration-200"
                      >
                        Health Care
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <NavLink
              to="/clientdetails"
              className={({ isActive }) =>
                isActive
                  ? "text-[#EA580C] font-semibold "
                  : "text-[black] font-semibold hover:text-[#EA580C]"
              }
            >
              Client Details
            </NavLink>
            <NavLink
              to="/rainformation"
              className={({ isActive }) =>
                isActive
                  ? "text-[#EA580C] font-semibold "
                  : "text-[black] font-semibold hover:text-[#EA580C]"
              }
            >
              RA Information
            </NavLink>
          </div>

          {/* Contact Us Button - Hidden on mobile */}
          <a
            href="/contactus"
            className="hidden xl:block px-6 py-2 button-theme rounded-full transition"
          >
            Contact Us
          </a>

          {/* Mobile Menu Icon */}
          <div className="xl:hidden mr-1">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-bggold shadow-md py-4">
            <NavLink
              to="/home"
              className="block px-6 py-3 text-[black] hover:text-[#EA580C]"
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="block px-6 py-3 text-[black] hover:text-[#EA580C]"
              onClick={toggleMobileMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/ourteam"
              className="block px-6 py-3 text-[black] hover:text-[#EA580C]"
              onClick={toggleMobileMenu}
            >
              Our Team
            </NavLink>
            <NavLink
              to="/services"
              className="block px-6 py-3 text-[black] hover:text-[#EA580C]"
              onClick={toggleMobileMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/clientdetails"
              className="block px-6 py-3 text-[black] hover:text-[#EA580C]"
              onClick={toggleMobileMenu}
            >
              client Details
            </NavLink>
            <NavLink
              to="/contactus"
              className="block px-6 py-3 text-white bg-[#EA580C] shadow-lg hover:bg-[#EA580C]"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
