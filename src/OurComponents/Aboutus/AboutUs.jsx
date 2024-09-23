import React from "react";
import { Users, Shield, Headphones, Globe, Youtube, Menu } from "lucide-react";
import { Link } from "react-router-dom";
// import { Image } from "lucide-react";
import shivam from "../../assets/Shivam.jpg";
import nishit from "../../assets/nishit.jpeg";
import Garvit from "../../assets/Garvit.jpeg";
import shubham from "../../assets/shubham.jpeg";

export default function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const teamMembers = [
    {
      name: "Nishit sarvaiya",
      role: "Co-Founder (Tech head)",
      image: nishit ,
    },
    {
      name: "Shivam kanchole",
      role: "Co-Founder (Tech head)",
      image: shivam ,
    },
    {
      name: "Garvit gupta",
      role: "Co-Founder (Bussiness head)",
      image: Garvit,
    },
    {
      name: "Shubham koushik",
      role: "Co-Founder (Marketing head)",
      image:  shubham,
    },
    // {
    //   name: "Shailesh palwadiya",
    //   role: "Co-Founder (Tech head)",
    //   image: "/placeholder.svg?height=200&width=200",
    // },
  ];

  const values = [
    {
      icon: <Users className="h-12 w-12 text-red-600" />,
      title: "Community-Driven",
      description:
        "We believe in the power of shared experiences and collaborative consumption.",
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Trust & Security",
      description:
        "Your privacy and security are our top priorities in everything we do.",
    },
    {
      icon: <Headphones className="h-12 w-12 text-red-600" />,
      title: "Customer-Centric",
      description:
        "We're dedicated to providing exceptional support and service to our users.",
    },
    {
      icon: <Globe className="h-12 w-12 text-red-600" />,
      title: "Innovation",
      description:
        "We continuously strive to improve and innovate in the digital subscription space.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <Link to={"/"} className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/features" className="hover:text-gray-300">
            Features
          </Link>
          <Link to="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/faq" className="hover:text-gray-300">
            FAQ
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <button className="hidden md:block bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
          Sign Up
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-[#282828] p-4">
          <nav className="flex flex-col space-y-2">
            <Link to={"/"} className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/features" className="hover:text-gray-300">
              Features
            </Link>
            <Link to="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link to="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full">
              Sign Up
            </button>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-[#282828] to-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Subspot
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Revolutionizing the way you access and enjoy YouTube Premium
          </p>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Our Story
            </h2>
            <p className="text-lg mb-6">
              Subspot was born out of a simple idea: make premium digital
              experiences more accessible and affordable for everyone. We
              recognized that many users wanted to enjoy the benefits of YouTube
              Premium but found the individual subscription costs prohibitive.
            </p>
            <p className="text-lg mb-6">
              Our founders, a group of tech enthusiasts and digital content
              lovers, came together to create a solution that would leverage the
              power of community and shared resources. By automating the process
              of forming and managing family groups, we have made it possible
              for users to access YouTube Premium at a fraction of the cost.
            </p>
            <p className="text-lg">
              Since our launch, we haveve helped thousands of users enjoy
              ad-free videos, background play, and offline downloads while
              saving money. Our mission is to continue innovating in the digital
              subscription space, always putting our users first.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-[#282828] p-6 rounded-lg text-center"
                >
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#282828] p-6 rounded-lg text-center overflow-hidden group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden ">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Join the Subspot Community
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Be part of the revolution in digital content consumption. Join
            Subspot today and experience YouTube Premium like never before.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8 rounded">
            Sign Up Now
          </button>
        </section>
      </main>

      <footer className="bg-[#282828] py-6 sm:py-8 px-4 text-center">
        <p>&copy; 2023 Subspot. All rights reserved.</p>
      </footer>
    </div>
  );
}
