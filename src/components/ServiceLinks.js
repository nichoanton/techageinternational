import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesLinks = () => {
  const services = [
    { id: "oil-gas", title: "Oil & Gas" },
    { id: "engineering", title: "Engineering Industries" },
    { id: "civil-construction", title: "Civil Construction & MEP" },
    { id: "facility-management", title: "Facility Management" },
    { id: "health-care", title: "Health Care" },
  ];

  const [activeService, setActiveService] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (services.some((service) => service.id === hash)) {
        setActiveService(hash);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [services]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (services.some((service) => service.id === id)) {
            setActiveService(id);
            window.history.replaceState(null, null, `#${id}`);
          }
        }
      });
    }, observerOptions);

    services.forEach((service) => {
      const element = document.getElementById(service.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      services.forEach((service) => {
        const element = document.getElementById(service.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [services]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveService(id);
      window.history.pushState(null, null, `#${id}`);
    }
  };

  const isActive = (serviceId) => {
    return activeService === serviceId;
  };

  return (
    <div className="w-full p-6 theme-text-bg rounded-xl shadow-lg h-fit sticky top-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.id}>
            <button
              onClick={() => handleScroll(service.id)}
              className={`flex items-center w-full text-base font-medium p-3 rounded-lg transition-colors duration-200 ${
                isActive(service.id)
                  ? "bg-[#EA580C] text-white"
                  : "text-[black] hover:bg-orange-50 hover:text-[#EA580C]"
              }`}
            >
              <FaArrowRight
                className={`mr-3 transition-colors duration-200 ${
                  isActive(service.id) ? "text-white" : "text-[#EA580C]"
                }`}
              />
              <span className="text-left">{service.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesLinks;
