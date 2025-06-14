import { useState } from "react";
import { Bold, Italic, Save } from "lucide-react";
import { usestore } from "../../Store/ContextStore";
import Header from "../../Components/Header";
import { User,   Calendar, FileText, Linkedin, Facebook, Instagram } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

export const AdminProfile = () => {
  
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const {user,url,jwtToken,setUser}=usestore()
  console.log(user.Age);
  const [isLoading, setisLoading] = useState(false)
  

  let space=user?user?.name?.indexOf(" "):" "
  
  const [formdata, setformdata] = useState({
    FirstName:user?.name?.substring(0,space) ,
    LastName:user?.name?.substring(space+1) ,
   
    BioGraphy:user?.BioGraphy ,
    Linkedin:user?.Linkedin ,
    Facebook:user?.Facebook ,
    Instagram:user?.Instagram ,
    Age:user?.Age ,
  })
  

  // Function to apply formatting
  const applyFormatting = (style) => {
    const textarea = document.getElementById("bioText");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formdata.BioGraphy.substring(start, end);
  
    if (selectedText) {
      let updatedText = formdata?.BioGraphy;
      if (style === "bold") {
        updatedText =
          formdata?.BioGraphy?.substring(0, start) +
          `**${selectedText}**` +
          formdata?.BioGraphy?.substring(end);
      } else if (style === "italic") {
        updatedText =
          formdata?.BioGraphy?.substring(0, start) +
          `*${selectedText}*` +
          formdata?.BioGraphy?.substring(end);
      }
      setformdata((prev) => ({ ...prev, BioGraphy: updatedText }));
    }
  };
  
 
const onchange=(e)=>{
  const {name,value}=e.target;
  setformdata({...formdata,[name]:value})
}

const onsubmit=(e)=>{
e.preventDefault();
setisLoading(false)
fetch(`${url}/api/user/UpdateUserProfile`,{
  method:'POST',
  body:JSON.stringify(formdata),
  headers:{
    'Content-Type':'application/json',
    'Authorization':`Bearer ${jwtToken}`
  }
})
.then((res)=>{
  return res.json()
}).then((data)=>{
 console.log(data);
 if(data.SuccessMessage){
  toast.success(data.SuccessMessage)
 }
 setUser(data.finddata)

  
 
}).catch((error)=>{
console.log(error);

}).finally(()=>{
  setisLoading(false)
})
}

  return (
    <div className="h-full overflow-y-scroll">
     <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-xl ">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-900 text-white p-6 md:p-8">
          <div className="flex md:items-center items-start gap-4 flex-col md:flex-row">
            <div className="bg-white/20 p-3 rounded-full">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">Admin Profile</h1>
              <p className="text-blue-100">
                Add information about yourself to share on your profile and connect with others.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onsubmit} className="p-8">
          {/* Personal Info */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <User className="h-5 w-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
                <input
                  name="FirstName"
                  value={formdata.FirstName}
                  onChange={onchange}
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
                <input
                  name="LastName"
                  value={formdata.LastName}
                  onChange={onchange}
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Age
              </label>
              <input
                name="Age"
                value={formdata.Age}
                onChange={onchange}
                type="number"
                placeholder="Enter your age"
                className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          {/* Biography */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-800">About You</h2>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-sm font-medium text-gray-700 mb-3 block">Biography</label>

              <div className="flex gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => applyFormatting("bold")}
                  className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium"
                >
                  <Bold size={16} /> Bold
                </button>
                <button
                  type="button"
                  onClick={() => applyFormatting("italic")}
                  className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium"
                >
                  <Italic size={16} /> Italic
                </button>
              </div>

              <textarea
                name="BioGraphy"
                id="bioText"
                value={formdata.BioGraphy}
                onChange={(e) => setformdata((prev) => ({ ...prev, BioGraphy: e.target.value }))}
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition resize-none"
                placeholder="Write about yourself..."
              />
              <p className="text-sm text-gray-500 mt-2">You can format text using buttons above.</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Social Media Links</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-blue-600" /> LinkedIn
                </label>
                <input
                  name="Linkedin"
                  value={formdata.Linkedin}
                  onChange={onchange}
                  type="url"
                  placeholder="https://linkedin.com/in/your-profile"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Facebook className="h-4 w-4 text-blue-700" /> Facebook
                </label>
                <input
                  name="Facebook"
                  value={formdata.Facebook}
                  onChange={onchange}
                  type="url"
                  placeholder="https://facebook.com/your-profile"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-pink-600" /> Instagram
                </label>
                <input
                  name="Instagram"
                  value={formdata.Instagram}
                  onChange={onchange}
                  type="url"
                  placeholder="https://instagram.com/your-profile"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>
            <div className="py-2 pb-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <ClipLoader size={20} color="white" loading={isLoading} />
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>
          </div>
          </div>

          {/* Save Button */}
          
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default AdminProfile;
