import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Youtube,
  Play,
  Music,
  Download,
  Shield,
  DollarSign,
  Users,
  Clock,
  Menu,
  User,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-[#282828] p-4 sm:p-6 rounded-lg text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-gray-400">{description}</p>
  </div>
);

const SecurityFeature = ({ title, description }) => (
  <div className="bg-[#282828] p-4 sm:p-6 rounded-lg">
    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-gray-400">{description}</p>
  </div>
);

export default function LandingPage() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const UserData = useSelector((state) => state.auth.UserData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  function NavigateUser() {
    if (isUserLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  }
  function NavigateUserToSubscribtionPage() {
    navigate("/dashboard");
  }

  const HandleSignUp = () => {
    navigate("/signup");
  };

  const logoutUser = () => {
    localStorage.removeItem("UserData");
    window.location.reload();
    navigate("/");
  };

  const GotoFeatures = () => {
    navigate("/features");
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <Link to={'/'}  className="flex items-center space-x-2 cursor-pointer">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <NavLink to={"/features"} className="hover:text-gray-300">
            Features
          </NavLink>
          <NavLink to={"/pricing"} className="hover:text-gray-300">
            Pricing
          </NavLink>
          <NavLink to={"/faq"} className="hover:text-gray-300">
            FAQ
          </NavLink>
          <NavLink to={"/contact"} className="hover:text-gray-300">
            Contact Us
          </NavLink>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {!isUserLoggedIn ? (
          <Button
            onClick={HandleSignUp}
            className="hidden md:block bg-red-600 hover:bg-red-700"
          >
            Sign Up
          </Button>
        ) : (
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#282828] flex items-center justify-center transition-transform hover:scale-110"
            >
              <User className="h-6 w-6 text-white" />
            </button>
            {isMenuOpen && (
              <div
                className={`${
                  isMenuOpen ? "absolute" : ""
                } right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5`}
              >
                {UserData?.isSubscribed && (
                  <Link
                    to={"/userdashboard"}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    Profile
                  </Link>
                )}
                <button
                  onClick={logoutUser}
                  className="w-full flex px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-[#282828] p-4">
          <nav className="flex flex-col space-y-2">
            <Link to={"/features"} className="hover:text-gray-300">
              Features
            </Link>
            <Link to={"/pricing"} className="hover:text-gray-300">
              Pricing
            </Link>
            <Link to={"/security"} className="hover:text-gray-300">
              Security
            </Link>
            {isUserLoggedIn ? (
              <Button
                onClick={logoutUser}
                className="bg-red-600 hover:bg-red-700 w-full"
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={HandleSignUp}
                className="bg-red-600 hover:bg-red-700 w-full"
              >
                Sign Up
              </Button>
            )}
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-[#282828] to-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Enjoy YouTube Premium Without the Hassle
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Subspot simplifies your YouTube Premium experience. We form family
            groups for you, manage subscriptions, and ensure you always have
            access to premium features.
          </p>
          {isUserLoggedIn ? (
            UserData.isSubscribed ? (
              <a
                href="https://www.youtube.com/"
                className="bg-red-600 hover:bg-red-700 text-lg rounded-md py-4 px-6 sm:py-3 sm:px-8"
              >
                Enjoy Youtube
              </a>
            ) : (
              <Button
                onClick={NavigateUserToSubscribtionPage}
                className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8"
              >
                Get Started Now
              </Button>
            )
          ) : (
            <Button
              onClick={NavigateUser}
              className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8"
            >
              Get Started Now
            </Button>
          )}
        </section>

        <section id="features" className="py-12 sm:py-20 px-4 bg-[#181818]">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Why Choose Subspot?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-red-600" />
              }
              title="Hassle-Free Groups"
              description="We automatically form family groups, so you don't have to search for members."
            />
            <FeatureCard
              icon={
                <DollarSign className="h-10 w-10 sm:h-12 sm:w-12 text-red-600" />
              }
              title="Cost Efficient"
              description="Enjoy YouTube Premium at a shared, lower cost compared to individual subscriptions."
            />
            <FeatureCard
              icon={
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-red-600" />
              }
              title="Seamless Management"
              description="We handle everything from payments to user changes, ensuring a smooth experience."
            />
            <FeatureCard
              icon={
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-red-600" />
              }
              title="Guaranteed Access"
              description="Always be part of a family group, never worry about losing premium features."
            />
          </div>
        </section>

        <section
          id="pricing"
          className="py-12 sm:py-20 px-4 bg-black text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            Unbeatable Value
          </h2>
          <div className="bg-[#282828] p-6 sm:p-8 rounded-lg max-w-sm mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              YouTube Premium Access
            </h3>
            <p className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="line-through text-gray-500 mr-2">
                ₹149/month
              </span>
              <span className="text-red-600">₹60/month</span>
            </p>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <Play className="h-5 w-5 text-red-600 mr-2" /> Ad-Free YouTube
              </li>
              <li className="flex items-center">
                <Music className="h-5 w-5 text-red-600 mr-2" /> YouTube Music
                Premium
              </li>
              <li className="flex items-center">
                <Play className="h-5 w-5 text-red-600 mr-2" /> Background Play
              </li>
              <li className="flex items-center">
                <Download className="h-5 w-5 text-red-600 mr-2" /> Offline
                Viewing
              </li>
            </ul>
            {isUserLoggedIn ? (
              <Button
                onClick={GotoFeatures}
                className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8"
              >
                Features
              </Button>
            ) : (
              <Button
                onClick={HandleSignUp}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Sign Up Now
              </Button>
            )}
          </div>
        </section>

        <section id="security" className="py-12 sm:py-20 px-4 bg-[#181818]">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Trust and Security
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <SecurityFeature
              title="Secure Payments"
              description="Industry-standard encryption for all transactions."
            />
            <SecurityFeature
              title="Data Privacy"
              description="Your personal information is never shared without consent."
            />
            <SecurityFeature
              title="24/7 Support"
              description="Our team is always available to assist you."
            />
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Ready to Simplify Your YouTube Premium Experience?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Join Subspot today and start enjoying all the benefits of YouTube
            Premium without any hassle.
          </p>
          {isUserLoggedIn ? (
            <Button
              onClick={NavigateUserToSubscribtionPage}
              className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8"
            >
              Get Started Now
            </Button>
          ) : (
            <Button
              onClick={HandleSignUp}
              className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8"
            >
              Sign Up Now
            </Button>
          )}
        </section>
      </main>

      <footer className="bg-[#282828] py-6 sm:py-8 px-4 text-center">
        <p>&copy; 2023 Subspot. All rights reserved.</p>
      </footer>
    </div>
  );
}
