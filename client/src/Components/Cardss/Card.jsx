import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ image, title, Category }) => {
  return (
    <div className="group max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden transition hover:shadow-2xl hover:scale-[1.02] duration-300 border border-gray-100">
      {/* Image */}
      <div className="overflow-hidden h-48">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={image}
          alt={title}
        />
      </div>

      {/* Title */}
      <div className="p-5 text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">Category: {Category}</p>
      </div>

      {/* Button */}
      <div className="flex justify-center pb-5">
        <NavLink to={`/Internships/${Category}`}>
          <button className="bg-gradient-to-r from-purple-700 to-red-600 text-white px-6 py-2 rounded-full font-medium cursor-pointer hover:from-purple-800  hover:to-red-700 transition duration-300 shadow-md">
            Apply Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
