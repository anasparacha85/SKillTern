import { useCallback, useEffect, useState } from "react";
import React from "react";
import { usestore } from "../../Store/ContextStore";
import { Link } from "react-router-dom";
import LMSHeader from '../../Components/LMSHeader'
import ProfileHeader from '../../Components/ProfileHeader'


export default function CourseList() {
   
    const {url,selecteditem,setselecteditem,courses,setcourses,filtercourse,setfiltercourse,fetchCourseByName,fetchCourseByCategory,categoryitem, setcategoryitem}=usestore()
  console.log("my courses",courses);
  
    const onchange=(e)=>{
      setselecteditem(e.target.value)
      console.log(selecteditem);
      
      
    }
   
    const oncategorychange=(e)=>{
      setcategoryitem(e.target.value)
    }
  
   

    // const filtercourses=courses.filter((course,index)=>  course.CourseName=="Flutter Development"
    // )
  // useEffect(()=>{
  //   setfiltercourse(courses.filter((value)=>{
  //     return selecteditem=="" || value.CourseName===selecteditem 
      
  //         }))
  // },[selecteditem])


useEffect(()=>{
  if(selecteditem){

    setfiltercourse(courses.filter((value)=>value.CourseName==selecteditem))
    setcategoryitem('')
   }
},[selecteditem])
useEffect(()=>{
  if(categoryitem){
    setfiltercourse(courses.filter((value)=>value.CourseCategory==categoryitem))
    setselecteditem('')
  }
},[categoryitem])
 

  
 
  
  
  console.log("hello",courses);
   

    console.log("baby",filtercourse);
    
    
  return (
    <div className="w-full md:w-[99%]">
    <LMSHeader />
    <ProfileHeader Heading={`/Courses/${selecteditem?selecteditem:categoryitem?categoryitem:"Not selected"}`}/>
    <div className="flex flex-col md:flex-row p-4 bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-purple-700">Filter</h2>
        <div className="mt-4">
          <h3 className="text-purple-600 font-semibold">Categories</h3>
       <ul className="space-y-2 mt-2 text-sm">
  {Object.entries(
    courses.reduce((acc, course) => {
      const category = course.CourseCategory;
      if (!acc[category]) acc[category] = [];
      acc[category].push(course);
      return acc;
    }, {})
  ).map(([category, courseList]) => (
    <li key={category}>
      {/* Category Radio */}
      <div>
        <input
          type="radio"
          onChange={oncategorychange}
          value={category}
          checked={categoryitem === category}
          name="category" // this is OK: all categories share the name
        />{" "}
        {category}
      </div>

      {/* Courses under this Category */}
      <ul className="">
        {courseList.map((course) => (
          <li key={course._id}>
            <input
              type="radio"
              onChange={onchange}
              value={course.CourseName}
              checked={selecteditem === course.CourseName}
              name={`course-${category}`} // ✅ give different group for each category
            />{" "}
            {course.CourseName}
          </li>
        ))}
      </ul>
    </li>
  ))}
</ul>

        </div>
      </aside>

      <main className="flex-1 grid gap-4 p-4 w-full md:w-3/5">
  {filtercourse?.length > 0 ? filtercourse?.map((course) => (
    <Link key={course._id} to={`/LMS/course/${course._id}`} className="w-full">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row w-full md:w-5/6">
        {/* Image */}
        <img
          src={course.CoursePic}
          alt={course.CourseName}
          className="w-full md:w-32 h-40 md:h-32 object-cover rounded-lg"
        />
        
        {/* Content */}
        <div className="mt-3 md:mt-0 md:ml-4 flex flex-col justify-between">
          <h3 className="text-purple-700 font-bold text-lg">{course.CourseName}</h3>
          <p className="text-gray-600 text-sm">{course.CourseDescription}</p>
          
          <div className="text-sm text-gray-500 flex gap-2 flex-wrap">
            <span>{course.lessonCount} Lessons</span>
            <span>03:05:26 Hours</span>
            <span>Beginner</span>
          </div>
          
          <div className="text-red-600 font-bold">
            {course.CoursePrice == 0 && "Free"}
          </div>
        </div>
      </div>
    </Link>
  )) : (
    <div className="text-xl text-green-600 flex justify-start">No Courses Found</div>
  )}
</main>

    </div>
    </div>
  );
}
