import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Briefcase, MapPin, FileImage, Layers, Text, Timer, Upload } from "lucide-react";
import { usestore } from "../../Store/ContextStore";

export const PostJob = () => {
  const { url, jwtToken } = usestore();
  const jobCategories = ["Backend Development", "App Development", "Graphic Design", "ChatBot Development", "FrontEnd Development"];
  const jobTypes = ["Full-time", "Part-time", "Internship", "Freelance"];
  const jobTimes = ["2 Months", "4 Months", "6 Months", "Proper Job"];

  const [formData, setFormData] = useState({
    JobCategory: "",
    JobName: "",
    JobDescription: "",
    JobType: "Full-time",
    JobLocation: "",
    JobDuration: "",
    CategoryImage: null,
    JobImage: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
     const { name, files } = e.target
        console.log("helo",name,files);
        
        if (files && files[0]) {
          // Validate file type
          const fileType = files[0].type
          if (!fileType.startsWith("image/")) {
            toast.error("Please select an image file")
            return
          }
    
          // Validate file size (max 5MB)
          if (files[0].size > 5 * 1024 * 1024) {
            toast.error("Image size should be less than 5MB")
            return
          }
    
        
    setFormData({ ...formData, [name]: files[0] });
        }
  };
  const CategoryfileInputRef=useRef()
  const JobfileInputRef=useRef()
   const triggerCategoryFileInput = () => {
    CategoryfileInputRef.current.click()
  }
  const triggerJobFIleInput=()=>{
    JobfileInputRef.current.click()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(`${url}/api/jobs/post-a-job`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: formDataToSend,
      });
      const data = await response.json();
      if (data.SuccessMessage) {
        toast.success(data.SuccessMessage);
        setFormData({
          JobCategory: "",
          JobName: "",
          JobDescription: "",
          JobType: "Full-time",
          JobLocation: "",
          JobDuration: "",
          CategoryImage: null,
          JobImage: null,
        });
      } else if (data.FailureMessage) {
        toast.error(data.FailureMessage);
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-full ">
     <div className="max-w-4xl mx-auto p-4 ">
        <div className="bg-gradient-to-r from-blue-700 to-purple-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-2">Post a New Job</h1>
          <p className="text-blue-100">Fill in job details and publish your opening</p>
        </div>
<div className="h-[500px] overflow-y-scroll">
          <form onSubmit={handleSubmit} className="p-6 space-y-6" encType="multipart/form-data">
            {/* Job Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Layers className="text-blue-600 h-4 w-4" />
              Job Category
            </label>
            <select
              name="JobCategory"
              value={formData.JobCategory}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Category</option>
              {jobCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Category Image */}
        
                 {/* Hidden file input */}
              <input
                type="file"
              name="CategoryImage"
                ref={CategoryfileInputRef}
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {/* Custom upload button */}
              <div className="flex flex-col items-start gap-4 w-full">
                <button
                  type="button"
                  onClick={triggerCategoryFileInput}
                  className="flex items-start gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  <Upload className="h-5 w-5" />
                  Select Category Image
                </button>

                <div className="text-sm text-gray-500 text-start">
                  <p>Click the button to select a new Category Image</p>
                  <p className="mt-1">Supported formats: JPG, PNG (Max: 5MB)</p>
                </div>
              </div>

          {/* Job Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Briefcase className="text-blue-600 h-4 w-4" />
              Job Name
            </label>
            <input
              type="text"
              name="JobName"
              placeholder="e.g. React Developer"
              value={formData.JobName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Job Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <FileImage className="text-blue-600 h-4 w-4" />
              Job Image
            </label>
            <input type="file" name="JobImage" accept="image/*" onChange={handleFileChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Text className="text-blue-600 h-4 w-4" />
              Job Description
            </label>
            <textarea
              name="JobDescription"
              placeholder="Describe the job role and responsibilities..."
              value={formData.JobDescription}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg h-28"
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Briefcase className="text-blue-600 h-4 w-4" />
              Job Type
            </label>
            <select
              name="JobType"
              value={formData.JobType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Job Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <MapPin className="text-blue-600 h-4 w-4" />
              Job Location
            </label>
            <input
              type="text"
              name="JobLocation"
              placeholder="e.g. Remote, Lahore"
              value={formData.JobLocation}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Job Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Timer className="text-blue-600 h-4 w-4" />
              Job Duration
            </label>
            <select
              name="JobDuration"
              value={formData.JobDuration}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Duration</option>
              {jobTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Post Job
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
