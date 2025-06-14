import { useEffect, useState } from "react"
import LMSHeader from "../../Components/LMSHeader"
import ProfileHeader from "../../Components/ProfileHeader"
import { usestore } from "../../Store/ContextStore"
import { Link } from "react-router-dom"
import CourseCard from "../../Components/Cardss/CourseCard"
import { BookOpen, GraduationCap, Search, RefreshCw, Play, TrendingUp } from "lucide-react"

export const MyCourses = () => {
  const { url, jwtToken } = usestore()
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  const getEnrolledCourses = () => {
    setIsLoading(true)
    setError("")

    fetch(`${url}/api/courses/course/student/getCourses`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch enrolled courses")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        if (data.EnrolledCourseData) {
          setCourses(data.EnrolledCourseData)
        } else {
          setCourses([])
        }
      })
      .catch((error) => {
        console.log(error)
        setError("Failed to load your enrolled courses. Please try again.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getEnrolledCourses()
  }, [])

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-300"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
            <div className="h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )

  // Empty state component
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-blue-100 rounded-full p-6 mb-6">
        <GraduationCap className="h-16 w-16 text-blue-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Your Learning Journey</h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        You haven't enrolled in any courses yet. Discover amazing courses and start building new skills today!
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/LMS/courses"
          className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 cursor-pointer text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <Search className="h-4 w-4" />
          Browse Courses
        </Link>
        <button
          onClick={getEnrolledCourses}
          className="flex items-center gap-2 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </button>
      </div>
    </div>
  )

  // Error state component
  const ErrorState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-red-100 rounded-full p-6 mb-6">
        <BookOpen className="h-16 w-16 text-red-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Unable to Load Courses</h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">{error}</p>
      <button
        onClick={getEnrolledCourses}
        className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        <RefreshCw className="h-4 w-4" />
        Try Again
      </button>
    </div>
  )

  return (
    <>
      <LMSHeader />
      <ProfileHeader Heading="My Courses" />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">My Learning Dashboard</h1>
                <p className="text-gray-600 mt-1">
                  {courses.length > 0
                    ? `Continue your progress in ${courses.length} enrolled course${courses.length === 1 ? "" : "s"}`
                    : "Your personalized learning space"}
                </p>
              </div>
            </div>

            {courses.length > 0 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <TrendingUp className="h-4 w-4" />
                  <span>Keep up the great work with your studies!</span>
                </div>
                <button
                  onClick={getEnrolledCourses}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  <RefreshCw className="h-3 w-3" />
                  Refresh
                </button>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          {courses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Enrolled Courses</p>
                    <p className="text-2xl font-bold text-gray-800">{courses.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Play className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Ready to Continue</p>
                    <p className="text-2xl font-bold text-gray-800">{courses.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Learning Progress</p>
                    <p className="text-2xl font-bold text-gray-800">Active</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          {isLoading ? (
            <LoadingSkeleton />
          ) : error ? (
            <ErrorState />
          ) : courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="transform hover:scale-105 transition-transform duration-200">
                  <CourseCard
                    rout={`/LMS/CourseContent/${course.course._id}`}
                    Label="Continue Learning"
                    id={course.course._id}
                    title={course.course.CourseName}
                    image={course.course.CoursePic}
                    description={course.course.CourseDescription}
                    price={course.course.CoursePrice}
                  />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState />
          )}

          {/* Learning Tips */}
          {courses.length > 0 && (
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Learning Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Set aside dedicated time each day for consistent learning progress</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Take notes and practice what you learn to reinforce your knowledge</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MyCourses
