import React, { useEffect, useRef, useState } from "react";
import UserHeader from "../../Components/UserHeader";
import Footer from "../../Components/Footer";
import { usestore } from "../../Store/ContextStore";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { User, FileText, Save } from "lucide-react";

export const JobApplicationForm = () => {
  const [jobname, setjobname] = useState('')

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null,
    qualifications: "",
    experience: "",
    jobPosition: "",
    expectedSalary: "",
    coverLetter: "",
  });
  
  const {url,jwtToken,user,isLoading,setisLoading}=usestore();
  console.log('hello token',jwtToken);
  
  const params=useParams()
  const fetchjobbyid=()=>{
    fetch(`${url}/api/jobs/jobsbyid/${params.id}`,{
      method:'GET',
      headers: {
                "Authorization": `Bearer ${jwtToken}`, // Include token in the request
             
            }

    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      setjobname(data.JobName)
      

    }).catch((error)=>{
      console.log(error);
      
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      fileInputRef.current = file; // Store file in ref
      console.log("Selected File (Ref):", fileInputRef.current);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata=new FormData();
    userdata.append("name",user.name);
  userdata.append("email", user.email);
  userdata.append("phone", formData.phone);
  userdata.append("qualifications", formData.qualifications);
  userdata.append("experience", formData.experience);
  userdata.append("jobPosition", jobname);
  userdata.append("expectedSalary", formData.expectedSalary);
  userdata.append("coverLetter", formData.coverLetter);
  // Append file from useRef
  if (fileInputRef.current) {
    userdata.append("cv", fileInputRef.current);
} else {
    console.error("File not found in ref!");
}

console.log("✔ FormData Entries:");
for (let pair of userdata.entries()) {
    console.log(pair[0], pair[1]); // Debugging
}
console.log(formData.cv);


  setisLoading(true)
    fetch(`${url}/api/jobs/Apply`,{
      method:'POST',
      headers: {
        "Authorization": `Bearer ${jwtToken}`, // Include token in the request
     
    },
      body:userdata

    }).then((res)=>{
      console.log(res);
      
      return res.json()
    }).then((data)=>{
      console.log('jellp',data);
      if(data.SuccessMessage){
        toast.success(data.SuccessMessage)
        setFormData({  name: "",
          email: "",
          phone: "",
          cv: null,
          qualifications: "",
          experience: "",
          jobPosition: "",
          expectedSalary: "",
          coverLetter: "",})
      }
      if(data.FailureMessage){
        toast.error(data.FailureMessage)
      }
      
      

    }).catch((error)=>{
      console.log(error);
      toast.error(error.FailureMessage)
      
    }).finally(()=>{
      setisLoading(false)
    })
  }
  
useEffect(() => {
  fetchjobbyid()
}, [])

  return (
    <>
    <UserHeader/>
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden mt-10">
  {/* Header */}
  <div className="bg-gradient-to-r from-blue-700 to-purple-900 text-white md:p-8 p-6">
    <div className="flex md:items-center items-start md:flex-row flex-col gap-4">
      <div className="bg-white/20 p-3 rounded-full">
        <User className="h-8 w-8" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">Apply for Job</h1>
        <p className="text-blue-100">Fill out the form to submit your job application.</p>
      </div>
    </div>
  </div>

  {/* Form */}
  <form onSubmit={handleSubmit} className="p-8 space-y-8">
    {/* Personal Info Section */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <User className="h-5 w-5 text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            disabled
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            disabled
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Position</label>
          <input
            type="text"
            name="jobPosition"
            value={jobname}
            disabled
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>

    {/* Other Info Section */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-800">Job Details</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expected Salary (USD)</label>
          <input
            type="number"
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications</label>
          <input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload CV (PDF or DOCX)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          rows="6"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Write your cover letter here..."
        />
      </div>
    </div>

    {/* Submit Button */}
    <div className="border-t pt-6">
      <button
        type="submit"
        className="w-full md:w-auto bg-gradient-to-r from-blue-700 to-purple-900 text-white py-3 px-8 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <ClipLoader size={20} color="white" loading={isLoading} />
        ) : (
          <>
            <Save size={18} />
            Apply Now
          </>
        )}
      </button>
    </div>
  </form>
</div>
    <Footer/>
    </>
  );
};

export default JobApplicationForm;
