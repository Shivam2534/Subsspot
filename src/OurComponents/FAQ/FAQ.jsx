import { useState } from "react";
import {
  Youtube,
  Menu,
  Search,
  ChevronDown,
  ChevronUp,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FAQ() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const faqs = [
    {
      question: "How does Subspot work?",
      answer:
        "Subspot simplifies access to YouTube Premium by automatically forming family groups. You sign up, we handle group formation, manage subscriptions, and ensure you always have access to premium features at a fraction of the cost.",
    },
    {
      question: "How long does it take to be added to a family group?",
      answer:
        "It typically takes 3-4 days for users to be added to a family group for the first time. After this initial period, you'll be automatically included in future groups without any wait.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption technology to ensure that all transactions are processed securely. Your financial information is always protected and we never store your full payment details.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "You can cancel your subscription at any time without affecting other group members. Our flexible membership allows you to join or leave as needed without any long-term commitments.",
    },
    {
      question: "What happens if someone leaves my family group?",
      answer:
        "If a member leaves your family group, we'll automatically find a replacement to ensure the group remains active. All remaining members continue to enjoy their benefits without interruption.",
    },
    {
      question:
        "How much can I save with Subspot compared to regular YouTube Premium?",
      answer:
        "With Subspot, you can save up to 60% compared to a regular YouTube Premium individual subscription. Our monthly plan costs ₹60, while YouTube Premium's individual plan is priced at ₹149 per month.",
    },
    {
      question: "Do I get all the features of YouTube Premium with Subspot?",
      answer:
        "Yes, you get access to all YouTube Premium features including ad-free viewing, background play, offline downloads, and YouTube Music Premium. The only difference is that you're part of a family plan managed by Subspot.",
    },
    {
      question: "How does billing work?",
      answer:
        "We charge your account monthly. The payment is processed a few days before your subscription renewal date to ensure uninterrupted service. You'll always be notified before any charge is made.",
    },
    {
      question: "What if I have issues with my YouTube Premium access?",
      answer:
        "If you experience any issues with your YouTube Premium access, our customer support team is available 24/7 to assist you. We'll work directly with YouTube if necessary to resolve any problems quickly.",
    },
    {
      question: "Can I use Subspot if I'm not in India?",
      answer:
        "Currently, Subspot is only available for users in India. We're working on expanding our service to other countries in the future.",
    },
  ];

  const navigate = useNavigate();

  const GotoContactPage = () => {
    navigate("/contact");
  };
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <Link to={"/"} className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to={"/"} className="hover:text-gray-300">
            Home
          </Link>
          <Link to={"/features"} className="hover:text-gray-300">
            Features
          </Link>
          <Link to={"/pricing"} className="hover:text-gray-300">
            Pricing
          </Link>
          <Link to={"/faq"} className="hover:text-gray-300">
            FAQ
          </Link>
        </nav>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {!isUserLoggedIn ? (
          <Button className="hidden md:block bg-red-600 hover:bg-red-700">
            Sign Up
          </Button>
        ) : (
          <div className="rounded-full bg-slate-800 p-1">
            <User className=" size-7 " />
          </div>
        )}
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-[#282828] p-4">
          <nav className="flex flex-col space-y-2">
            <Link to={"/"} className="hover:text-gray-300">
              Home
            </Link>
            <Link to={"/features"} className="hover:text-gray-300">
              Features
            </Link>
            <Link to={"/pricing"} className="hover:text-gray-300">
              Pricing
            </Link>
            <Link to={"#"} className="hover:text-gray-300">
              FAQ
            </Link>

            {!isUserLoggedIn ? (
              <Button className="bg-red-600 hover:bg-red-700 w-full">
                Sign Up
              </Button>
            ) : (
              <div className="rounded-full bg-slate-800 p-1">
                <User className=" size-7 " />
              </div>
            )}
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-[#282828] to-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Find answers to common questions about Subspot and our YouTube
            Premium family plan service.
          </p>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818]">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8">
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#282828] border-gray-700 rounded-lg focus:ring-red-600 focus:border-red-600"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#282828] rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() =>
                      setExpandedQuestion(
                        expandedQuestion === index ? null : index
                      )
                    }
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {expandedQuestion === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  {expandedQuestion === index && (
                    <div className="p-4 pt-0 text-gray-300">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Contact us anytime and we'll get
            back to you as soon as possible.
          </p>
          <Button
            onClick={GotoContactPage}
            className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8"
          >
            Contact Support
          </Button>
        </section>
      </main>

      <footer className="bg-[#282828] py-6 sm:py-8 px-4 text-center">
        <p>&copy; 2023 Subspot. All rights reserved.</p>
      </footer>
    </div>
  );
}
