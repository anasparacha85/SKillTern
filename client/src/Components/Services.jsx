




import React from "react";
import Python from "../../public/python-inky.png";
import Java from "../../public/java-inky.png";
import JavaScript from "../../public/javascript-inky.png";
import CSharp from "../../public/csharp-inky.png";
import AWS from "../../public/aws-inky.png";
import Azure from "../../public/azure-dark.webp";
import Kubernetes from "../../public/topic-kubernetes.webp";
import Ruby from "../../public/ruby-inky.png";
import ReactImg from "../../public/react-inky.png";


const Services = () => {
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

  return (
    <>
      <div className="bg-[#2A2053] min-h-[300px] mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#4A4279_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

        <div className="max-w-7xl mt-10 mx-auto px-4 py-12 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                Popular Pluralsight Skills topics to learn now
              </h2>
              <a
                href="#"
                className="inline-flex items-center text-red-600 font-bold hover:text-pink-400 transition-colors text-lg"
              >
                View all Skills topics
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
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {skillTopics.map((topic, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-[#1E1A3F] rounded-lg flex items-center justify-center p-3 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2"
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
    
    </>
  );
};

export default Services;

