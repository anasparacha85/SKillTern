import { useEffect } from "react"
import UserHeader from "../../Components/UserHeader"
import Footer from "../../Components/Footer"
import { usestore } from "../../Store/ContextStore"
import Card from "../../Components/Cardss/Card"
import HandsonCard from "../../Components/Cardss/HandsonCard"
import { ClipLoader } from "react-spinners"
import { Briefcase, Users, TrendingUp, Building, Search, ArrowRight } from "lucide-react"

export const Internships = () => {
  const { url, JobsCategories, isLoading, setisLoading } = usestore()

  useEffect(() => {
    console.log("Updated Job Categories:", JobsCategories)
  }, [JobsCategories])

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-50">
        <ClipLoader size={50} color="#3B82F6" loading={isLoading} />
        <p className="mt-4 text-gray-600 font-medium">Loading internship opportunities...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />

      {/* Hero Section */}
        <div className='home-menu h-full'>
        <main className="p-6 sm:p-10 md:p-16 lg:p-20">
       <div className="bg-[#1b1834] p-6 sm:p-10 md:p-16 lg:p-20 rounded-3xl">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Briefcase className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl text-white  font-bold mb-4">Find Your Perfect Internship</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover amazing internship opportunities across various industries and kickstart your career journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="w-full sm:w-auto bg-transparent font-semibold rounded-3xl text-white border-2 border-blue-600 hover:bg-purple-600 duration-500 transition-all py-3 px-6 sm:px-8 flex items-center gap-2">
              <Search className="h-5 w-5" />
              Browse Opportunities
            </button>
          </div>
        </div>
      </div>
      </main>
      </div>

      {/* Categories Section */}
      <div className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Internship Categories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from a wide range of internship categories and find the perfect match for your skills and interests
            </p>
          </div>

          {JobsCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {JobsCategories.map((value, index) => (
                <div key={index} className="transform hover:scale-105 transition-transform duration-200">
                  <Card image={value.CategoryImage} title={value.JobCategory} Category={value.JobCategory} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Categories Available</h3>
              <p className="text-gray-600">Internship categories will appear here once they're loaded.</p>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Users className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Looking for Hands-On Candidates for Your Company?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Our goal is to provide the best candidates for your company's exponential growth. Let's shake hands and
              create a win-win situation that benefits everyone involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
                Partner With Us
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-100 py-16">
        <div className="container ml-auto px-10 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-600 text-lg">
              See how we're making a difference in connecting talent with opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
            <div className="transform hover:scale-105 transition-transform duration-200">
              <HandsonCard
                img="https://img.icons8.com/ios/50/system-information.png"
                h1="15k+"
                h3="Internships Provided"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <HandsonCard
                img="https://img.icons8.com/ios/50/system-information.png"
                h1="48k+"
                h3="LinkedIn Community"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="28" h3="Learning Courses" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="15" h3="Partner Companies" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Platform?</h2>
            <p className="text-gray-600 text-lg">We provide comprehensive support for both interns and companies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Get hands-on experience and mentorship to accelerate your career development
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Matching</h3>
              <p className="text-gray-600">
                Our advanced matching system connects the right talent with the right opportunities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Company Support</h3>
              <p className="text-gray-600">Comprehensive support for companies to find and onboard the best interns</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Internships