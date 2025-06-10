import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LMSHeader from '../../Components/LMSHeader'
import { usestore } from "../../Store/ContextStore";
import CourseCard from "../../Components/Cardss/CourseCard";
import BlurText from "../../Animations/BlurText";
import SkillImage from '../../../public/skills-hero-navigate-opt.webp'
import Python from "../../../public/python-inky.png";
import Java from "../../../public/java-inky.png";
import JavaScript from "../../../public/javascript-inky.png";
import CSharp from "../../../public/csharp-inky.png";
import AWS from "../../../public/aws-inky.png";
import Azure from "../../../public/azure-dark.webp";
import Kubernetes from "../../../public/topic-kubernetes.webp";
import Ruby from "../../../public/ruby-inky.png";
import ReactImg from "../../../public/react-inky.png";
import UpSkill from "../../Components/UpSkill";
import Learn from "../../Components/Learn";
import Evaluate from "../../Components/Evaluate";
import Footer from "../../Components/Footer";
import Experience from "../../Components/Experience";
import FAQS from "../../Components/FAQS";


const Home = () => {
  const skillTopics = [
    { name: "Python", icon: Python },
    { name: "React", icon: ReactImg },
    { name: "Java", icon: Java },
    { name: "C#", icon: CSharp },
    { name: "Ruby", icon: Ruby },
    { name: "JavaScript", icon: JavaScript },
    { name: "AWS", icon: AWS },
    { name: "Azure", icon: Azure },
    { name: "Kubernetes", icon: Kubernetes },
  ];
  const [courses, setCourses] = useState([]);
  const { url } = usestore()

  useEffect(() => {
    fetch(`${url}/api/courses/getAllCourses`) // Backend se courses fetch karna
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setCourses(data)

      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <LMSHeader />
      <div className=" h-full flex items-center justify-center flex-col lg:p-16 md:p-16 sm:p-4 p-4 skill-home-container">
        <div className="bg-purple-800 rounded-3xl lg:p-12 md:p-12 sm:p-6 p-6 max-w-7xl w-full skill-home-primary-container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-red-600 font-bold mb-4">SkillTern LMS</h2>
              <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Where teams build better technology skills, faster
              </h1>
              <p className="text-gray-300 mb-8 text-md">
                Technology teams are only as successful as their skills are
                relevant. Give them access to Pluralsight Skills—courses,
                assessments, learning paths, and labs— and you give them the tech
                fluency they need to build business-critical skills.
              </p>
              <button className="bg-pink-600 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-700 transition duration-300">
                Try for free
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src={SkillImage}
                alt="Person working on laptop"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded">
                <span className="font-bold">aws</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded flex items-center">
                <span className="font-bold mr-2">2.61</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-green-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#4A4279_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="max-w-7xl mt-10 mx-auto px-4 py-12 relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                  Popular Courses topics to learn now
                </h2>
                <Link
                  to="/LMS/Courses"
                  className="inline-flex items-center text-red-600 font-bold hover:text-pink-400 transition-colors text-lg"
                >
                  View all Courses
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                {skillTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 bg-[#1E1A3F] rounded-lg flex items-center justify-center p-3 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                  >
                    <img
                      src={topic.icon}
                      alt={`${topic.name} icon`}
                      className="w-10 h-10"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UpSkill />
      </div>

      <div className="container m-auto p-6">
        <h2 className="text-4xl text-gray-800 font-extrabold mt-4 mb-10 text-center">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {courses.map((course, index) => (
            <CourseCard rout={`/LMS/course/${course._id}`} Label="Enroll Now" key={index} id={course._id} title={course.CourseName} image={course.CoursePic} description={course.CourseDescription} price={course.CoursePrice} />
          ))}
        </div>
      </div>
      <div>
        <div>
          <Learn />
        </div>

        <div>
          <Evaluate />
        </div>
        <FAQS />
      </div>
      <div>
        <Experience />
      </div>

      <Footer />

    </>
  );
};

export default Home;
