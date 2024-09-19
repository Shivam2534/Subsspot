import React, { useState } from 'react'
import { Youtube, Menu, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <a href="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/features" className="hover:text-gray-300">Features</a>
          <a href="/pricing" className="hover:text-gray-300">Pricing</a>
          <a href="/faq" className="hover:text-gray-300">FAQ</a>
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
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/features" className="hover:text-gray-300">Features</a>
            <a href="/pricing" className="hover:text-gray-300">Pricing</a>
            <a href="/faq" className="hover:text-gray-300">FAQ</a>
            <Button className="bg-red-600 hover:bg-red-700 w-full">Sign Up</Button>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-[#282828] to-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team using the form below.
          </p>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-[#181818]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#282828] rounded-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-red-600" />
                  <span>support@subspot.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-red-600" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-red-600" />
                  <span>123 Subspot Street, Mumbai, India</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#282828] rounded-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-[#1c1c1c] border-gray-700 rounded-md"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                    className="w-full bg-[#1c1c1c] border-gray-700 rounded-md"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    required
                    className="w-full bg-[#1c1c1c] border-gray-700 rounded-md min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-black text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Contact us anytime and we'll get back to you as soon as possible.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-lg py-4 px-6 sm:py-6 sm:px-8">
            Contact Support
          </Button>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2023 Subspot. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Terms of Service</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacy</a>
        </nav>
      </footer>
    </div>
  )
}