import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { usestore } from '../../Store/ContextStore';

const EnrolledStudents = () => {
  const [loading, setLoading] = useState(false);
  const { url, jwtToken } = usestore();
  const [enrollments, setEnrollments] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  const fetchEnrolledStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${url}/api/admin/GetEnrolledStudents`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      const data = await response.json();
      setEnrollments(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch enrollments.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  const openImageModal = (url) => setSelectedImage(url);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="lg:max-w-6xl w-screen lg:ml-80 p-6 bg-white shadow-md rounded-lg mt-10 max-h-[550px] overflow-y-scroll overflow-x-scroll">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Currently {enrollments.length}  Enrolled
      </h2>

      {loading ? (
        <div className="w-full h-[100%] flex justify-center items-center">
          <ClipLoader size={50} color="blue" loading={loading} />
        </div>
      ) : error ? (
        <div className="text-red-500 font-medium">{error}</div>
      ) : (
        <div className="overflow-x-auto w-full overflow-y-scroll">
          <table className="w-full bg-white rounded-md shadow text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">User Profile</th>
                <th className="p-3">User Name</th>
                <th className="p-3">User Email</th>
                <th className="p-3">Course Name</th>
                <th className="p-3">Course Category</th>
                <th className="p-3">Course Pic</th>
                <th className="p-3">Course Price</th>
                <th className="p-3">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {enrollments?.map((enrollment) => (
                <tr key={enrollment._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={enrollment?.student?.profilePicture || '/default-profile.png'}
                      alt="Profile"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover cursor-pointer"
                      onClick={() =>
                        openImageModal(enrollment?.student?.profilePicture)
                      }
                    />
                  </td>
                  <td className="p-3">{enrollment?.student?.name || 'N/A'}</td>
                  <td className="p-3">{enrollment?.student?.email || 'N/A'}</td>
                  <td className="p-3">{enrollment?.course?.CourseName || 'N/A'}</td>
                  <td className="p-3">{enrollment?.course?.CourseCategory || 'N/A'}</td>
                  <td className="p-3">
                    <img
                      src={enrollment?.course?.CoursePic || '/default-course.png'}
                      alt="Course"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover cursor-pointer"
                      onClick={() =>
                        openImageModal(enrollment?.course?.CoursePic)
                      }
                    />
                  </td>
                  <td className="p-3">
                    {enrollment?.course?.CoursePrice === 0
                      ? 'Free'
                      : `$${enrollment?.course?.CoursePrice || 'N/A'}`}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        enrollment?.PaymentStatus === 'paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {enrollment?.PaymentStatus || 'Not paid'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div
                className="bg-white p-4 rounded shadow-lg max-w-md w-11/12"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Large"
                  className="max-w-full max-h-[80vh] mx-auto"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnrolledStudents;
