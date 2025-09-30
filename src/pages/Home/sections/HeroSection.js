import bgImg from "../../../assets/bg/bg.png";

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "right 20%",
      }}
    >
      <div className="h-full flex items-center justify-start">
        <div className="px-8 w-full max-w-6xl">
          <div className="mx-auto text-center md:text-left">
            {/* Main heading - centered on mobile, left on desktop */}
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Welcome to{" "}
              <span className="text-orange-600 block mt-2">
                TECH AGE INTERNATIONAL
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              Connecting talent with opportunity
            </p>

            {/* CTA button */}
            <a
              href="/services"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg mx-auto md:mx-0"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;