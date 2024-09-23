import React from 'react'
import { Youtube, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function TermAndConditions() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Last updated: September 23, 2023
          </p>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818]">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 mb-4">
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Subspot Inc. ("we," "us" or "our"), concerning your access to and use of the Subspot website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
              <p className="text-gray-300 mb-4">
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. Intellectual Property Rights</h2>
              <p className="text-gray-300 mb-4">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">3. User Representations</h2>
              <p className="text-gray-300 mb-4">
                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">4. User Registration</h2>
              <p className="text-gray-300 mb-4">
                You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">5. Prohibited Activities</h2>
              <p className="text-gray-300 mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">6. Subscription and Billing</h2>
              <p className="text-gray-300 mb-4">
                To access certain resources or services on the Site, you may be required to provide certain information about yourself as part of the registration process or as part of your ability to use the resources or services. You agree that any information you provide will always be accurate, correct, and up to date.
              </p>
              <p className="text-gray-300 mb-4">
                If you subscribe to any of our services, you agree to pay the applicable fees as they become due. All fees are non-refundable unless otherwise stated. We may change our fees at any time by posting the changes on the Site or by notifying you directly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">7. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your account and bar access to the Site immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">8. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-300">
                Subspot Inc.<br />
                123 Tech Street, Bangalore, Karnataka 560001, India<br />
                Email: legal@subspot.com<br />
                Phone: +91 80 1234 5678
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Have questions about our Terms and Conditions?</h2>
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