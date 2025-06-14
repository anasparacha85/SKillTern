
import UserHeader from "../../Components/UserHeader"
import HandsonCard from "../../Components/Cardss/HandsonCard"
import ContactSection from "../../Components/ContactSection"
import Footer from "../../Components/Footer"
import { Handshake, Users, TrendingUp, Building, CheckCircle, ArrowRight, Star } from "lucide-react"

export const CompanyCollaboration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />

      {/* Hero Section */}
      <div className='home-menu h-full'>
        <main className="p-6 sm:p-10 md:p-16 lg:p-20">
       <div className="bg-[#1b1834] p-6 sm:p-10 md:p-16 lg:p-20 rounded-3xl">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Handshake className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">Partner With Us to Find Top Talent</h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Our mission is to connect exceptional candidates with forward-thinking companies. Let's create a
              partnership that drives mutual success and exponential growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 text-lg">
                <Users className="h-5 w-5" />
                Start Partnership
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
       
      </main>
      </div>

      {/* Value Proposition Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Partner With Us?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide comprehensive solutions that benefit both companies and candidates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                All candidates go through rigorous screening and training to ensure they meet your standards
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful placements and long-term partnerships with leading companies
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Handshake className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Win-Win Partnership</h3>
              <p className="text-gray-600">
                We create mutually beneficial relationships that drive growth for all parties involved
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-gray-100">
        <div className="container ml-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Track Record Speaks for Itself</h2>
            <p className="text-gray-600 text-lg">
              Numbers that demonstrate our commitment to excellence and successful partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="transform hover:scale-105 transition-transform duration-200">
              <HandsonCard
                img="https://img.icons8.com/ios/50/system-information.png"
                h1="15k+"
                h3="Successful Placements"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <HandsonCard
                img="https://img.icons8.com/ios/50/system-information.png"
                h1="48k+"
                h3="Professional Network"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="28" h3="Training Programs" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="15" h3="Partner Companies" />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What You Get as Our Partner</h2>
              <p className="text-gray-600 text-lg">
                Comprehensive benefits designed to maximize your recruitment success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Pre-Screened Candidates</h3>
                  <p className="text-gray-600">
                    Access to thoroughly vetted candidates who have completed our comprehensive training programs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Continuous support throughout the hiring process and beyond to ensure successful integration
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">
                    Tailored recruitment solutions that align with your specific company needs and culture
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Guarantee</h3>
                  <p className="text-gray-600">
                    We stand behind our placements with quality guarantees and replacement policies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring Process?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Join our network of successful companies and discover how we can help you find the perfect candidates for
              your team.
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto text-lg">
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white">
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}

export default CompanyCollaboration
