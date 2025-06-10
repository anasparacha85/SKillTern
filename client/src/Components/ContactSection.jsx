import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react"

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Start a Conversation</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to help and answer any questions you might have. We look forward to hearing from you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our doors are always open! Whether you have a question, need assistance, or want to collaborate, our
                team is here to help you achieve your goals.
              </p>

              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Our Location</h4>
                    <p className="text-gray-600">NIC Karachi, NED University Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone Number</h4>
                    <p className="text-gray-600">+123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email Address</h4>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white mb-6">
                <h4 className="font-semibold mb-2">Ready to Connect?</h4>
                <p className="text-sm mb-4 text-green-100">
                  Don't hesitate to reach out. We're excited to hear from you!
                </p>
                <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us Now
                </button>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <div className="bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition-colors cursor-pointer">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                      alt="Instagram"
                      className="opacity-70"
                    />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/color/48/twitterx--v1.png"
                      alt="Twitter"
                      className="opacity-70"
                    />
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ios/50/linkedin.png"
                      alt="LinkedIn"
                      className="opacity-70"
                    />
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ios/50/facebook-new.png"
                      alt="Facebook"
                      className="opacity-70"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Send us a Message</h3>
                  <p className="text-gray-600">We'd love to hear from you</p>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-medium">Quick Response:</span> We typically respond within 24 hours during
                  business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Other Ways to Reach Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                <p className="text-gray-600 text-sm">Available Mon-Fri, 9AM-6PM</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Visit Us</h4>
                <p className="text-gray-600 text-sm">Open for meetings by appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
