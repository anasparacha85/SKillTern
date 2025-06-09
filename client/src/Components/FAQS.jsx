/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const solutions = [
    'Upskilling & reskilling',
    'Cloud transformation',
    'Tech fluency',
    'Engineering onboarding',
    'Software delivery'
  ]

  return (
    <div className="bg-blue-950 text-white min-h-screen p-4 md:p-8 mt-[6%] lg:p-16">
      <div className="lg:w-[90%] md:w-[90%] sm:w-full w-full mx-auto">
        <h2 className="text-lg font-semibold mb-4">Our solutions</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Face the future with confidence</h1>
        <p className="text-gray-300 mb-8">
          And with the skills and engineering insights to thrive. Our solutions enable tech teams to navigate digital trends and customer needs that continue to shift at lightning speed. Implement one (or more) and you'll transform your technology workforce—one developer, one delivery, one success at a time.
        </p>
        <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors duration-300 mb-12 inline-block">
          See all solutions &gt;
        </a>

        <div className="space-y-4">
          {solutions.map((solution) => (
            <div key={solution} className="border-b border-purple-700">
              <button
                onClick={() => toggleSection(solution)}
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-xl font-semibold">{solution}</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    expandedSection === solution ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === solution && (
                <div className="pb-4">
                  <p className="text-gray-300">
                    Additional information about {solution} would go here.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQS