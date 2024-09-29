import { Youtube, Check, ArrowRight, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const UserData = useSelector((state)=> state.auth.UserData)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const userName = "John Doe"; // This would typically come from a user context or prop
  const navigate = useNavigate();
  function NavigateToSelectSubscribtion() {
    navigate("/SubscriptionSelection");
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-black">
        <Link to="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/features" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white">
            Pricing
          </Link>
          <Link to="/faq" className="text-gray-300 hover:text-white">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#282828] flex items-center justify-center transition-transform hover:scale-110"
            >
              <User className="h-6 w-6 text-white" />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  Profile
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-grow p-6 bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Welcome, {UserData.username}!
            </h1>
            <p className="text-xl text-gray-400">
              Ready to enjoy YouTube Premium at a fraction of the cost?
            </p>
          </section>

          <Card className="bg-zinc-900 border-red-600 border">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">
                Your Subscription
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                Get access to all YouTube Premium features at an unbeatable
                price
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-extrabold text-red-600">
                  ₹60
                </span>
                <span className="text-xl text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-2" />
                  Ad-free videos
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-2" />
                  Background play
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-2" />
                  Offline downloads
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-2" />
                  YouTube Music Premium
                </li>
              </ul>
              <Button
                onClick={NavigateToSelectSubscribtion}
                className="w-full bg-red-600 hover:bg-red-700 text-lg py-6 text-white"
              >
                Activate Subscription
              </Button>
              <p className="text-center text-sm text-gray-400">
                No commitment. Cancel anytime.
              </p>
            </CardContent>
          </Card>

          <section id="features" className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-white">
              Why Choose Subspot?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">
                    Hassle-Free Group Formation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  We automatically place you in a family group. No need to find
                  other members yourself.
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">
                    Significant Cost Savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Enjoy YouTube Premium at less than half the regular price of
                  ₹149/month.
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">
                    Flexible Membership
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Join or leave anytime without affecting other group members.
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">
                    Seamless Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  We handle all aspects of subscription and group management for
                  you.
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-white">
              Frequently Asked Questions
            </h2>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">
                  How long does it take to join a family group?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                It typically takes 3-4 days for users to be added to a family
                group for the first time. After this initial period, you'll be
                automatically included in future groups without any wait.
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">
                  Is my payment information secure?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Yes, we use industry-standard encryption to ensure all
                transactions are processed securely. Your financial information
                is always protected.
              </CardContent>
            </Card>
            <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-lg py-4 text-white">
              View All FAQs <ArrowRight className="ml-2" />
            </Button>
          </section>

          <section className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400">
              Join Subspot today and start enjoying YouTube Premium!
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8 text-white">
              Activate Now
            </Button>
          </section>
        </div>
      </main>

      <footer className="py-6 px-4 bg-black text-center border-t border-zinc-800">
        <p className="text-sm text-gray-400">
          &copy; 2023 Subspot. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
