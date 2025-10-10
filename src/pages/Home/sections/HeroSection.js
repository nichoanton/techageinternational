import { Link } from "react-router-dom";
import bgImg from "../../../assets/bg/bg.png";
import mobileBgImg from "../../../assets/bg/bg_mob.png"; // Optional: different image for mobile

const HeroSection = () => {
  return (
    <div className="h-screen relative">
      {/* Desktop Background */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "right 20%",
        }}
      ></div>
      
      {/* Mobile Background */}
      <div 
        className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mobileBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="h-full flex items-center justify-start relative z-10">
        <div className="px-8 w-full max-w-6xl">
          <div className="mx-auto text-center md:text-left">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Welcome to{" "}
              <span className="text-orange-600 block mt-2">
                TECH AGE INTERNATIONAL
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              Connecting Talent with Opportunity
            </p>
            <Link
              to="/services"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg mx-auto md:mx-0"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;