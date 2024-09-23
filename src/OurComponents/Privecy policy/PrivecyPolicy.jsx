import React from 'react'
import { Youtube, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PrivecyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <Link to="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/faq" className="hover:text-gray-300">FAQ</Link>
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
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/features" className="hover:text-gray-300">Features</Link>
            <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/faq" className="hover:text-gray-300">FAQ</Link>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full">Sign Up</button>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-[#282828] to-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Last updated: September 23, 2023
          </p>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818]">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                Subspot ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. Important Information and Who We Are</h2>
              <p className="text-gray-300 mb-4">
                Subspot is the controller and responsible for your personal data. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us using the details set out below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">3. The Data We Collect About You</h2>
              <p className="text-gray-300 mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>Financial Data includes payment card details.</li>
                <li>Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li>Profile Data includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
                <li>Usage Data includes information about how you use our website, products and services.</li>
                <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">4. How We Use Your Personal Data</h2>
              <p className="text-gray-300 mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">5. Disclosures of Your Personal Data</h2>
              <p className="text-gray-300 mb-4">
                We may share your personal data with the parties set out below for the purposes set out in this privacy policy.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Internal Third Parties: Other companies in the Subspot Group acting as joint controllers or processors.</li>
                <li>External Third Parties: Service providers acting as processors who provide IT and system administration services.</li>
                <li>Professional advisers acting as processors or joint controllers including lawyers, bankers, auditors and insurers.</li>
                <li>Regulators and other authorities acting as processors or joint controllers who require reporting of processing activities in certain circumstances.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">6. International Transfers</h2>
              <p className="text-gray-300 mb-4">
                We do not transfer your personal data outside the European Economic Area (EEA).
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">7. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">8. Data Retention</h2>
              <p className="text-gray-300 mb-4">
                We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">9. Your Legal Rights</h2>
              <p className="text-gray-300 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data including the right to receive a copy of the personal data we hold about you and the right to make a complaint at any time to the Information Commissioners Office, the UK supervisory authority for data protection issues (www.ico.org.uk).
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-gray-300 mb-4">If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:</p>
              <p className="text-gray-300">
                Full name of legal entity: Subspot Inc.<br />
                Email address: privacy@subspot.com<br />
                Postal address: 123 Tech Street, Bangalore, Karnataka 560001, India<br />
                Telephone number: +91 80 1234 5678
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Have questions about our Privacy Policy?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Contact us anytime and we will get back to you as soon as possible.
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