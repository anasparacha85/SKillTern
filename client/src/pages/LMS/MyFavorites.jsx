/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import CourseCard from "../../Components/Cardss/CourseCard"
import { usestore } from "../../Store/ContextStore"
import LMSHeader from "../../Components/LMSHeader"
import ProfileHeader from "../../Components/ProfileHeader"
import { Heart, BookOpen, Search, RefreshCw } from "lucide-react"

export const MyFavorites = () => {
  const { url, jwtToken } = usestore()
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  const getFavoriteCourses = () => {
    setIsLoading(true)
    setError("")

    fetch(`${url}/api/courses/getFavorites`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch favorite courses")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        if (data.length > 0) {
          setCourses(data)
        } else {
          setCourses([])
        }
        data.map((value, index) => {
          console.log(value)
        })
      })
      .catch((error) => {
        console.log(error)
        setError("Failed to load your favorite courses. Please try again.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getFavoriteCourses()
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
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  )

  // Empty state component
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-gray-100 rounded-full p-6 mb-6">
        <Heart className="h-16 w-16 text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No Favorite Courses Yet</h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        You haven't added any courses to your favorites. Start exploring courses and save the ones you love!
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => (window.location.href = "/LMS/courses")}
          className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <Search className="h-4 w-4" />
          Browse Courses
        </button>
        <button
          onClick={getFavoriteCourses}
          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
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
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">{error}</p>
      <button
        onClick={getFavoriteCourses}
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
      <ProfileHeader Heading="My Favorites" />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">My Favorite Courses</h1>
                <p className="text-gray-600 mt-1">
                  {courses.length > 0
                    ? `You have ${courses.length} course${courses.length === 1 ? "" : "s"} in your favorites`
                    : "Courses you love, all in one place"}
                </p>
              </div>
            </div>

            {courses.length > 0 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpen className="h-4 w-4" />
                  <span>Keep learning with your saved courses</span>
                </div>
                <button
                  onClick={getFavoriteCourses}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  <RefreshCw className="h-3 w-3" />
                  Refresh
                </button>
              </div>
            )}
          </div>

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
                    rout={`/LMS/course/${course.course._id}`}
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

          {/* Additional Info */}
          {courses.length > 0 && (
            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-2">💡 Pro Tip</h3>
              <p className="text-blue-700 text-sm">
                Keep your favorite courses organized by regularly reviewing and updating your list. Remove courses
                you've completed or are no longer interested in to keep your favorites relevant.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MyFavorites
