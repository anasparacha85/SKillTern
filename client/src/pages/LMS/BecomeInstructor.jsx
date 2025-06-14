import { useEffect, useRef, useState } from "react"
import { usestore } from "../../Store/ContextStore"
import { toast } from "react-toastify"
import { ClipboardCheck, FileText, Info, Upload } from "lucide-react"
import { useNavigate } from "react-router"

export const BecomeInstructorForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    message: "",
    document: null,
  })
  const [fileName, setFileName] = useState("No file chosen")
  const navigate=useNavigate()

  const formref = useRef()
  const pendref = useRef()
  const { user, url, jwtToken, Instructors, setInstructors } = usestore()

  useEffect(() => {
    if (Instructors.length > 0 && user.InstructorStatus === "pending" && formref.current && pendref.current) {
      formref.current.classList.add("hidden")
      pendref.current.classList.remove("hidden")
    }
  }, [user.InstructorStatus, Instructors])
useEffect(()=>{
  localStorage.getItem("instructor")=="true" && navigate('/LMS/Instructor/upload')
},[user, localStorage.getItem("instructor")])
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "name" || name === "email") return
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log(file);
    
    if (file) {
      const validExtensions = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      if (!validExtensions.includes(file.type)) {
        toast.error("Only PDF and DOCX files are allowed.")
        return
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File size should be less than 2MB.")
        return
      }
      setFormData({ ...formData, document: file })
       setFileName(file.name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append("name", user.name)
    formdata.append("email", user.email)
    formdata.append("address", formData.address)
    formdata.append("phone", formData.phone)
    formdata.append("message", formData.message)
    formdata.append("document", formData.document)

    try {
      const response = await fetch(`${url}/api/instructor/apply`, {
        method: "POST",
        body: formdata,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })

      const data = await response.json()
      if (data.SuccessMessage) {
        toast.success(data.SuccessMessage)
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      } else if (data.FailureMessage) {
        toast.error(data.FailureMessage)
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full  py-4 px-2 ">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-gray-700">
          <ClipboardCheck className="h-6 w-6 text-primary" />
          Become an Instructor
        </h2>
        <p className="text-gray-500 mb-4">Complete the form below to apply as an instructor</p>
      </div>

      {/* Pending Application View */}
      <div ref={pendref} className="bg-white hidden shadow-md rounded-lg p-6 w-full">
        <div className="bg-white rounded-lg w-full">
          <h2 className="text-xl font-semibold mb-6 text-gray-700 border-b pb-3">Your Application Status</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Document</th>
                  <th className="p-3 text-left">Details</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {Instructors.map((app, index) => (
                  <tr key={app.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{app.name}</td>
                    <td className="p-3">
                      <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md transition-colors">
                        <FileText className="h-4 w-4" />
                        <span className="text-sm">{app.document}</span>
                      </button>
                    </td>
                    <td className="p-3">-</td>
                    <td className="p-3">
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-md text-sm font-medium">
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {Instructors.length > 10 && (
            <div className="flex justify-end mt-4">
              <div className="flex gap-1">
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300">Previous</button>
                <button className="bg-primary text-white px-3 py-1 rounded-md">1</button>
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300">Next</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Application Form */}
      <div ref={formref} className="bg-white shadow-md rounded-lg p-6 w-full">
        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md mb-6 flex items-start gap-3">
          <Info className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <strong className="font-medium">Important:</strong> Please fill all fields carefully and share relevant
            documents to help us evaluate your application.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                disabled
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50"
                required
              />
              <p className="text-gray-500 text-sm mt-1">Your profile name</p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={user.email}
                disabled
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50"
                required
              />
              <p className="text-gray-500 text-sm mt-1">Your profile email</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
              required
              placeholder="Enter your complete address"
            ></textarea>
            <p className="text-gray-500 text-sm mt-1">Please provide your full address</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
              placeholder="Enter your phone number"
            />
            <p className="text-gray-500 text-sm mt-1">We may contact you at this number</p>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Additional Information</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
              placeholder="Share your teaching experience, qualifications, or any other relevant information"
            ></textarea>
            <p className="text-gray-500 text-sm mt-1">Optional: Tell us why you'd make a great instructor</p>
          </div>

          {/* Document Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Resume/CV</label>
            <div className="flex items-center">
              <label className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                <Upload className="h-5 w-5" />
                <span>Choose File</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  name="document"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="ml-3 text-gray-500 text-sm">{fileName}</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">PDF or DOCX files only (max 2MB)</p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full md:w-auto"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BecomeInstructorForm
