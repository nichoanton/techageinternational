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
      <div className="h-full flex items-center justify-center">
        <div className="px-4 w-full max-w-4xl">
          <div className="mx-auto text-center">
            {/* Main heading - responsive for mobile */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Welcome to{" "}
              <span className="text-orange-600 block sm:inline-block mt-1 sm:mt-0">
                TECH AGE INTERNATIONAL
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Connecting talent with opportunity
            </p>

            {/* CTA button */}
            <a
              href="/services"
              className="inline-block px-4 py-2 sm:px-6 sm:py-3 button-theme rounded-full transition text-sm sm:text-base"
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