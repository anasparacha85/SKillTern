import { useState } from "react";
import { usestore } from "../../Store/ContextStore";
import { Layers, Upload, Video, FileImage, BookOpenText } from "lucide-react";
import { toast } from "react-toastify";

export const CourseUpload = () => {
  const [courseData, setCourseData] = useState({
    CourseName: "",
    CourseCategory: "",
    CourseDescription: "",
    CoursePrice: "",
    CoursePic: "",
    CoursePreviewVideo: "",
    lessons: [],
  });

  const { url, jwtToken } = usestore();
  const [lesson, setLesson] = useState({ title: "", videoUrl: "" });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleLessonChange = (e) => {
    setLesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const addLesson = () => {
    if (lesson.title && lesson.videoUrl) {
      setCourseData({ ...courseData, lessons: [...courseData.lessons, lesson] });
      setLesson({ title: "", videoUrl: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${url}/api/courses/uploadCourses`, {
      method: "POST",
      body: JSON.stringify(courseData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Course uploaded successfully!");
          setCourseData({
            CourseName: "",
            CourseCategory: "",
            CourseDescription: "",
            CoursePrice: "",
            CoursePic: "",
            CoursePreviewVideo: "",
            lessons: [],
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("courses", data);
      })
      .catch((error) => {
        console.log(error);
        
      });
  };

  return (
    <div className="h-full">
      <div className="max-w-4xl mx-auto p-4">
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-900 text-white p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold mb-2">Upload New Course</h1>
          <p className="text-blue-100">Fill in the course details and publish your content</p>
        </div>

        {/* Scrollable Form */}
        <div className="h-[500px] overflow-y-scroll bg-white p-6 rounded-b-lg shadow-md space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Course Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <BookOpenText className="text-blue-600 h-4 w-4" />
                Course Name
              </label>
              <input
                type="text"
                name="CourseName"
                placeholder="e.g. JavaScript for Beginners"
                value={courseData.CourseName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Layers className="text-blue-600 h-4 w-4" />
                Course Category
              </label>
              <input
                type="text"
                name="CourseCategory"
                placeholder="e.g. Web Development"
                value={courseData.CourseCategory}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Description</label>
              <textarea
                name="CourseDescription"
                placeholder="Describe what this course covers..."
                value={courseData.CourseDescription}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg h-28"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Price</label>
              <input
                type="number"
                name="CoursePrice"
                placeholder="e.g. 999"
                value={courseData.CoursePrice}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Course Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <FileImage className="text-blue-600 h-4 w-4" />
                Course Image URL
              </label>
              <input
                type="text"
                name="CoursePic"
                placeholder="Paste image URL here..."
                value={courseData.CoursePic}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Preview Video */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Video className="text-blue-600 h-4 w-4" />
                Preview Video URL
              </label>
              <input
                type="text"
                name="CoursePreviewVideo"
                placeholder="Paste video URL here..."
                value={courseData.CoursePreviewVideo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Lesson Upload */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Add Lessons</h2>
              <div className="flex gap-3 flex-col md:flex-row">
                <input
                  type="text"
                  name="title"
                  placeholder="Lesson Title"
                  value={lesson.title}
                  onChange={handleLessonChange}
                  className="p-3 border border-gray-300 rounded-lg flex-1"
                />
                <input
                  type="text"
                  name="videoUrl"
                  placeholder="Lesson Video URL"
                  value={lesson.videoUrl}
                  onChange={handleLessonChange}
                  className="p-3 border border-gray-300 rounded-lg flex-1"
                />
                <button
                  type="button"
                  onClick={addLesson}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Add
                </button>
              </div>

              {/* Lesson List */}
              <ul className="list-disc pl-5 mt-3 text-sm text-gray-600">
                {courseData.lessons.map((l, i) => (
                  <li key={i}>
                    {l.title} - <span className="text-blue-500">{l.videoUrl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Upload Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseUpload;
