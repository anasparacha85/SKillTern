import { GraduationCap, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyState = () => {
  return (
   <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-blue-100 rounded-full p-6 mb-6">
        <GraduationCap className="h-16 w-16 text-blue-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No Jobs Found</h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        No jos available of your search result yet!
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/Internships"
          className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 cursor-pointer text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <Search className="h-4 w-4" />
          Browse Jobs
        </Link>
        
      </div>
    </div>
  )
}

export default EmptyState
