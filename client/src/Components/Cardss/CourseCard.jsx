import { useEffect, useState } from "react";
import { usestore } from "../../Store/ContextStore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { StarIcon, HeartIcon } from "lucide-react";

const CourseCard = ({ image, title, description, price, id, rout, Label }) => {
  const { url, jwtToken, setUserLoginOpen } = usestore();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.includes(id));
  }, [id]);

  const toggleFavourite = () => {
    if (!jwtToken) {
      setUserLoginOpen(true);
      return;
    }

    const method = isFavorite ? "DELETE" : "POST";
    const endpoint = isFavorite
      ? `${url}/api/courses/removeFavorites/${id}`
      : `${url}/api/courses/addFavorites/${id}`;

    fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.SuccessMessage) {
          toast.success(data.SuccessMessage);
          const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
          let updatedFavorites;
          if (isFavorite) {
            updatedFavorites = storedFavorites.filter(courseId => courseId !== id);
          } else {
            updatedFavorites = [...storedFavorites, id];
          }
          localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
          setIsFavorite(!isFavorite);
        } else if (data.FailureMessage) {
          toast.error(data.FailureMessage);
        }
      })
      .catch(error => console.log("Error:", error));
  };
  return (
    <div className="max-w-md bg-white rounded-2xl cursor-pointer shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 relative">
      {/* Course Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-fill" />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-700 to-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Bestseller
        </span>

        {/* Favorite Button */}
        <button
          onClick={toggleFavourite}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md transition-all duration-300"
        >
          <HeartIcon
            className={`w-6 h-6 ${isFavorite ? "text-purple-700 fill-purple-700" : "text-gray-400"
              }`}
          />
        </button>
      </div>

      {/* Course Details */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description.slice(0, 90)}...</p>

        {/* Star Rating */}
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
          ))}
          <span className="text-sm text-gray-500">(4.9/5)</span>
        </div>

        {/* Pricing */}
        <p className="text-lg font-bold text-purple-700">{price == 0 ? "Free" : "Paid"}</p>

        {/* Enroll Button */}
        <Link to={rout}>
          <button className="mt-4 w-full bg-gradient-to-r from-purple-700 to-red-600 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300">
            {Label}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
