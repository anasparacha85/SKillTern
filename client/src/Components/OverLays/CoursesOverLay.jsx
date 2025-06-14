import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { usestore } from '../../Store/ContextStore';

const CoursesOverLay = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navigate = useNavigate();
  const { courses, fetchCourses, setselecteditem, setcategoryitem } = usestore();

  useEffect(() => {
    fetchCourses(); // fetch on mount
  }, []);

  // Group courses by category
  const groupedCourses = courses?.reduce((acc, course) => {
    console.log('hello world acc',acc," hello world course",course);
    
    const category = course?.CourseCategory || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(course);
    return acc;
  }, {});

  return (
    <div className="absolute top-full left-0 w-48 bg-white text-gray-700 p-2 rounded-md shadow-lg z-50">
      {Object.entries(groupedCourses).map(([category, courseList]) => (
        <div
          key={category}
          onMouseEnter={() => setHoveredCategory(category)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <button
            onClick={() => {
              setcategoryitem(category);
              navigate('/LMS/Courses');
            }}
            className="peer w-full text-start p-2 hover:bg-gray-200 cursor-pointer"
          >
            {category}
          </button>

          {hoveredCategory === category && (
            <div className="absolute left-full top-0 -ml-1 w-full bg-white text-gray-700 p-2 rounded-md shadow-lg z-50">
              {courseList.map((course) => (
                <button
                  key={course._id}
                  onClick={() => {
                    setselecteditem(course.CourseName);
                    navigate('/LMS/Courses');
                  }}
                  className="p-2 hover:bg-gray-200 cursor-pointer block text-start w-full"
                >
                  {course.CourseName}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      <button
        onClick={() => {
          setcategoryitem('');
          setselecteditem('');
          fetchCourses();
          navigate('/LMS/Courses');
        }}
        className="peer w-full p-2 hover:bg-gray-200 cursor-pointer text-start"
      >
        ALL Courses
      </button>
    </div>
  );
};

export default CoursesOverLay;
