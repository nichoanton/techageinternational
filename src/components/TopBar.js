import React from "react";

const TopBar = ({ isVisible }) => {
  return (
    <div
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full transition-transform duration-300 bg-orange-600 text-white px-3 text-sm flex justify-between items-center z-50`}
    >
      <a
        href="mailto:hr@techageinternational.in"
        className="hover:text-textgold transition"
      >
        <b>hr@techageinternational.in</b>
      </a>
      <a href="tel:+914443356128" className="hover:text-textgold transition">
        <b> +91 4443356128</b>
      </a>
    </div>
  );
};

export default TopBar;
