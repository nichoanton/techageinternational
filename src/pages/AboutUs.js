import {
  FaCheckCircle,
  FaUsers,
  FaHandshake,
  FaAward,
  FaDatabase,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import about from "../assets/aboutus/about1.jpg";
import about2 from "../assets/aboutus/about2.jpg";
import VisionMissionSection from "./Home/sections/VisionMissionSection";

const AboutUs = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Manpower And Employment Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            Connecting Global Talent with Strategic Opportunities
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-orange-600">Tech Age International</span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p className="text-lg">
                <strong>Tech Age International</strong> having its Regd., Office
                at Chennai / India with the approval from the PGE, Ministry of
                External Affairs, Govt. of India, led by a Team of Technocrats
                from different fields and as a Service Provider rendering a
                unique performance with high quality delivery to meet out all
                the Manpower Requirements of Our Clients to their utmost
                satisfaction.
              </p>
              <p className="text-lg">
                We have well established office with technically qualified and
                experienced Staff Team to handle sourcing and screening of
                Candidates as per the Client requirements.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={about}
              alt="Tech Age International Office"
              className="rounded-lg shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <FaUsers className="text-3xl mb-2" />
              <h3 className="font-bold text-lg">Expert Team</h3>
              <p className="text-sm">Qualified Professionals</p>
            </div>
          </div>
        </div>

        {/* Business Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <img
              src={about2}
              alt="Business Philosophy"
              className="rounded-lg shadow-2xl w-full h-80 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaHandshake className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Business Philosophy
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p className="text-lg">
                Quality service with time bounded delivery and continual
                improvement in updating modern technique in the field of
                International Recruitment Services and to have a good business
                relationship with our Clients with mutual growth and benefits.
              </p>
              <p className="text-lg">
                Understanding the Manpower Requirements from right perspective
                and to fulfill the expectations of the Clients to their utmost
                satisfactory level and shoulders all the responsibilities as a
                Service Provider.
              </p>
            </div>
          </div>
        </div>

        <VisionMissionSection />

        {/* Quality Policy */}
        <div className="bg-gray-50 rounded-2xl p-2 md:p-8 mb-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <FaAward className="text-4xl text-orange-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Policy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Tech Age never compromise to deviate from its quality policy and
                assures to provide a quality services in all aspects applying
                best business ethics with their client and to have a mutual
                business growth and benefits.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Our Commitment
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    <span>Best Business Ethics</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    <span>Client Satisfaction</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    <span>Mutual Growth</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaDatabase className="text-2xl text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Extensive Talent Database
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-justify">
                We have adequate database of interested candidates in each field
                for different positions. Apart from this, we've network with
                various portals and we have a very vast network across the
                country from which we derive the best talented and well groomed
                candidates to suit your requirement.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600">Active Candidates</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Industry Sectors</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Highlights */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Our Recruitment Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaUsers className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Technical Recruitment
              </h3>
              <p className="text-gray-600">
                Specialized in sourcing technical professionals across various
                industries like Oil & Gas, Engineering, Construction and
                Manufacturing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaHandshake className="text-orange-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Executive Search</h3>
              <p className="text-gray-600">
                Identifying and placing senior-level executives and leadership
                talent for multinational corporations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaAward className="text-green-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous screening and verification processes to ensure
                candidate quality and fit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Ideal Candidates?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with Tech Age International for comprehensive Manpower
            Solutions and Recruitment Services tailored to your Organizational
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contactus"
              className="button-theme font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg"
            >
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
