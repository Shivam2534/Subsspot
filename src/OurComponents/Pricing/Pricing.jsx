import React, { useState } from 'react';
import { Youtube, Menu, Check, X } from "lucide-react";

// Placeholder for the Button component
const Button = ({ children, variant, size, className, ...props }) => (
  <button className={`${className} ${variant === 'ghost' ? 'bg-transparent' : ''} ${size === 'icon' ? 'p-2' : 'px-4 py-2'}`} {...props}>
    {children}
  </button>
);

// Placeholder for the Link component
const Link = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

function PricingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <Link href="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/features" className="hover:text-gray-300">Features</Link>
          <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
          <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <Button className="hidden md:block bg-red-600 hover:bg-red-700">Sign Up</Button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-[#282828] p-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/features" className="hover:text-gray-300">Features</Link>
            <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
            <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
            <Button className="bg-red-600 hover:bg-red-700 w-full">Sign Up</Button>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-[#282828] to-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Simple, Affordable Pricing</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Enjoy YouTube Premium at a fraction of the cost with our monthly plan.
          </p>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818]">
          <div className="max-w-md mx-auto">
            <PricingCard
              title="Monthly Plan"
              price="₹60"
              period="per month"
              features={[
                "Access to YouTube Premium",
                "Ad-free viewing",
                "Background play",
                "Offline downloads",
                "YouTube Music Premium",
                "Automatic group formation",
                "Flexible membership",
                "Cancel anytime"
              ]}
              buttonText="Get Started"
              highlighted={true}
            />
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Compare Subspot vs. YouTube Premium</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-6 bg-[#282828]">Feature</th>
                    <th className="py-4 px-6 bg-[#282828] text-center">Subspot Monthly</th>
                    <th className="py-4 px-6 bg-[#282828] text-center">YouTube Premium (Individual)</th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow
                    feature="Monthly Price"
                    subspot="₹60"
                    youtube="₹149"
                  />
                  <ComparisonRow
                    feature="Ad-free Viewing"
                    subspot={true}
                    youtube={true}
                  />
                  <ComparisonRow
                    feature="Background Play"
                    subspot={true}
                    youtube={true}
                  />
                  <ComparisonRow
                    feature="Offline Downloads"
                    subspot={true}
                    youtube={true}
                  />
                  <ComparisonRow
                    feature="YouTube Music Premium"
                    subspot={true}
                    youtube={true}
                  />
                  <ComparisonRow
                    feature="Automatic Group Formation"
                    subspot={true}
                    youtube={false}
                  />
                  <ComparisonRow
                    feature="Flexible Membership"
                    subspot={true}
                    youtube={false}
                  />
                  <ComparisonRow
                    feature="Cost Savings"
                    subspot="Up to 60%"
                    youtube="N/A"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Join Subspot today and start enjoying all the benefits of YouTube Premium at a fraction of the cost.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8">
            Sign Up Now
          </Button>
        </section>
      </main>

      <footer className="bg-[#282828] py-6 sm:py-8 px-4 text-center">
        <p>&copy; 2023 Subspot. All rights reserved.</p>
      </footer>
    </div>
  )
}

function PricingCard({ title, price, period, features, buttonText, highlighted = false }) {
  return (
    <div className={`bg-[#282828] p-6 rounded-lg text-center ${highlighted ? 'ring-2 ring-red-600' : ''}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold mb-2">{price}</div>
      <div className="text-gray-400 mb-6">{period}</div>
      <ul className="text-left mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className={`w-full ${highlighted ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'}`}>
        {buttonText}
      </Button>
    </div>
  )
}

function ComparisonRow({ feature, subspot, youtube }) {
  return (
    <tr className="border-b border-gray-700">
      <td className="py-4 px-6 bg-[#282828]">{feature}</td>
      <td className="py-4 px-6 bg-[#282828] text-center">
        {typeof subspot === 'boolean' ? (
          subspot ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
        ) : (
          subspot
        )}
      </td>
      <td className="py-4 px-6 bg-[#282828] text-center">
        {typeof youtube === 'boolean' ? (
          youtube ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
        ) : (
          youtube
        )}
      </td>
    </tr>
  )
}

export default PricingPage;