import React, { useState } from "react";
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
  CheckCircle2,
  Zap,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);

// const Link = ({ href, children, className }) => (
//   <Link to={href} className={className}>
//     {children}
//   </Link>
// );

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-[#282828] p-6 rounded-lg text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const PremiumFeature = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="bg-[#282828] p-6 rounded-lg">
    <h3 className="text-lg font-bold mb-2">{question}</h3>
    <p className="text-gray-400">{answer}</p>
  </div>
);

const FeaturesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            className="bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <Button className="hidden md:block bg-red-600 hover:bg-red-700">
          Sign Up
        </Button>
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
            <Link to={"/faq"} className="hover:text-gray-300">
              FAQ
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 w-full">
              Sign Up
            </Button>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-[#282828] to-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Subspot Features
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Discover how Subspot simplifies your YouTube Premium experience with
            our innovative features.
          </p>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Core Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Users className="h-12 w-12 text-red-600" />}
                title="Automatic Group Formation"
                description="We handle the hassle of forming family groups, so you don't have to search for members or coordinate with others."
              />
              <FeatureCard
                icon={<DollarSign className="h-12 w-12 text-red-600" />}
                title="Cost-Effective Solution"
                description="Enjoy YouTube Premium at a fraction of the regular price through our shared family plan approach."
              />
              <FeatureCard
                icon={<Shield className="h-12 w-12 text-red-600" />}
                title="Guaranteed Access"
                description="Always be part of a family group, ensuring uninterrupted access to YouTube Premium features."
              />
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-red-600" />}
                title="Seamless Subscription Management"
                description="We take care of payments, renewals, and group changes, providing a hassle-free experience."
              />
              <FeatureCard
                icon={<CheckCircle2 className="h-12 w-12 text-red-600" />}
                title="Flexible Membership"
                description="Join or leave at any time without affecting other group members, offering ultimate flexibility."
              />
              <FeatureCard
                icon={<Headphones className="h-12 w-12 text-red-600" />}
                title="24/7 Customer Support"
                description="Our dedicated support team is always available to assist you with any questions or concerns."
              />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              YouTube Premium Benefits
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <PremiumFeature
                icon={<Play className="h-8 w-8 text-red-600" />}
                title="Ad-Free Viewing"
                description="Enjoy uninterrupted video playback without any ads across all your devices."
              />
              <PremiumFeature
                icon={<Music className="h-8 w-8 text-red-600" />}
                title="YouTube Music Premium"
                description="Access ad-free music, background play, and offline downloads in the YouTube Music app."
              />
              <PremiumFeature
                icon={<Download className="h-8 w-8 text-red-600" />}
                title="Offline Viewing"
                description="Download videos to watch offline, perfect for commutes or when you're away from Wi-Fi."
              />
              <PremiumFeature
                icon={<Zap className="h-8 w-8 text-red-600" />}
                title="Background Play"
                description="Keep videos or music playing while using other apps or when your screen is off."
              />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Ready to Experience Subspot?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Join Subspot today and start enjoying all these features and
            benefits of YouTube Premium without any hassle.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8">
            Sign Up Now
          </Button>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <FAQItem
                question="How long does it take to be added to a family group?"
                answer="It typically takes 3-4 days for users to be added to a family group for the first time. After this initial period, you'll be automatically included in future groups without any wait."
              />
              <FAQItem
                question="Is my payment information secure?"
                answer="Yes, we use industry-standard encryption technology to ensure that all transactions are processed securely. Your financial information is always protected."
              />
              <FAQItem
                question="Can I cancel my subscription at any time?"
                answer="You can cancel your subscription at any time without affecting other group members. Our flexible membership allows you to join or leave as needed."
              />
              <FAQItem
                question="What happens if someone leaves my family group?"
                answer="If a member leaves your family group, we'll automatically find a replacement to ensure the group remains active and all remaining members continue to enjoy their benefits without interruption."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#282828] py-6 sm:py-8 px-4 text-center">
        <p>&copy; 2023 Subspot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FeaturesPage;
