import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  { id: 1, name: "Oil & Gas", path: "/services/oil-gas" },
  { id: 2, name: "Engineering Industries", path: "/services/engineering" },
  { id: 3, name: "Civil Construction & MEP", path: "/services/construction" },
  { id: 4, name: "Facility Management", path: "/services/facility" },
  { id: 5, name: "Health Care", path: "/services/healthcare" },
];

const ServicesLinks = () => {
  const location = useLocation();

  return (
    <div className="w-full p-6 theme-text-bg rounded-xl shadow-lg h-fit">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.id}>
            <Link
              to={service.path}
              className={`flex items-center text-base font-medium p-3 rounded-lg transition-colors duration-200 ${
                location.pathname === service.path 
                  ? 'bg-[#EA580C] text-white' 
                  : 'text-[black] hover:bg-orange-50 hover:text-[#EA580C]'
              }`}
            >
              <FaArrowRight className={`mr-3 ${location.pathname === service.path ? 'text-white' : 'text-[#EA580C]'}`} />
              <span>{service.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesLinks;