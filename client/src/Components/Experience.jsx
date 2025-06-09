import { ChevronRight } from 'lucide-react'
import Skills from '../../public/skills-logos.webp'

const Experience =  () => {
  const experiences = [
    'Certification prep',
    'Skill assessments',
    'Learning paths',
    'Hands-on Labs',
    'Instructor-led classes',
  ]

  return (
    <div className="bg-white mt-[7%] px-4 sm:px-6 lg:px-8 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-16 md:gap-16 sm:gap- gap-0 items-center lg:items-start justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full h-0 pb-[75%] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={Skills}
                alt="Pluralsight Skills"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              The Skillhub Skills experience
            </h2>
            <ul className="space-y-4">
              {experiences.map((experience, index) => (
                <li key={index} className="flex mt-3 items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-md text-gray-600">{experience}</span>
                  <ChevronRight className="text-gray-400" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Experience