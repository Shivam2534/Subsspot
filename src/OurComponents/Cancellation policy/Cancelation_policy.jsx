import React from 'react'
import { Youtube, Menu, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
          <Link href="/about" className="hover:text-gray-300">About Us</Link>
          <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <button className="hidden md:block bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Sign Up</button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-[#282828] p-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/features" className="hover:text-gray-300">Features</Link>
            <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
            <Link href="/about" className="hover:text-gray-300">About Us</Link>
            <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full">Sign Up</button>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-[#282828] to-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Cancellation and Refund Policies</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Last updated: September 23, 2023
          </p>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818]">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Cancellation Policy</h2>
              <p className="text-gray-300 mb-4">
                At Subspot, we understand that circumstances change. You can cancel your subscription at any time, and your cancellation will be effective at the end of your current billing cycle.
              </p>
              <p className="text-gray-300 mb-4">
                To cancel your subscription:
              </p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                <li>Log in to your Subspot account</li>
                <li>Navigate to the 'Subscription' section</li>
                <li>Click on 'Cancel Subscription'</li>
                <li>Follow the prompts to confirm your cancellation</li>
              </ol>
              <p className="text-gray-300 mt-4">
                Please note that cancelling your subscription will not automatically remove you from your current family group. You will continue to have access to YouTube Premium until the end of your billing cycle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. Refund Policy</h2>
              <p className="text-gray-300 mb-4">
                Subspot strives to provide the best possible service to our users. However, we understand that there may be instances where a refund is warranted.
              </p>
              <h3 className="text-xl font-semibold mb-2">2.1 Eligibility for Refunds</h3>
              <p className="text-gray-300 mb-4">
                Refunds may be considered in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Technical issues preventing access to YouTube Premium features</li>
                <li>Incorrect charges or billing errors</li>
                <li>Fraudulent use of your account</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">2.2 Refund Process</h3>
              <p className="text-gray-300 mb-4">
                To request a refund:
              </p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                <li>Contact our customer support team within 14 days of the charge</li>
                <li>Provide details about the reason for your refund request</li>
                <li>Our team will review your request and respond within 3-5 business days</li>
              </ol>
              <p className="text-gray-300 mt-4">
                Please note that refunds are processed to the original payment method and may take 5-10 business days to appear on your statement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">3. Exceptions</h2>
              <p className="text-gray-300 mb-4">
                While we aim to accommodate all reasonable refund requests, there are some exceptions:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Requests made after 14 days from the charge date</li>
                <li>Subscription cancellations after using the service for a significant portion of the billing cycle</li>
                <li>Violations of our Terms of Service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">4. Changes to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify this Cancellation and Refund Policy at any time. Changes will be effective immediately upon posting to our website. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">5. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our Cancellation and Refund Policy, please contact us at:
              </p>
              <p className="text-gray-300">
                Subspot Inc.<br />
                123 Tech Street, Bangalore, Karnataka 560001, India<br />
                Email: support@subspot.com<br />
                Phone: +91 80 1234 5678
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/terms" className="bg-[#282828] p-6 rounded-lg hover:bg-[#3a3a3a] transition-colors">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  Terms of Service <ArrowRight className="ml-2 h-5 w-5" />
                </h3>
                <p className="text-gray-400">Review our complete terms of service.</p>
              </Link>
              <Link href="/privacy" className="bg-[#282828] p-6 rounded-lg hover:bg-[#3a3a3a] transition-colors">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  Privacy Policy <ArrowRight className="ml-2 h-5 w-5" />
                </h3>
                <p className="text-gray-400">Learn how we protect and manage your data.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Need Further Assistance?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Our support team is here to help with any questions about cancellations or refunds.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8 rounded">
            Contact Support
          </button>
        </section>
      </main>

      <footer className="bg-[#282828] py-6 sm:py-8 px-4 text-center">
        <p>&copy; 2023 Subspot. All rights reserved.</p>
      </footer>
    </div>
  )
}