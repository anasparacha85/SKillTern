import { useState, useRef, useEffect } from "react"
import { Save, Upload, X, Camera, ImageIcon } from "lucide-react"
import { usestore } from "../../Store/ContextStore"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"

export const Photo = () => {
  const { user, url, jwtToken, setUser, isLoading, setisLoading } = usestore()
  const [previewUrl, setPreviewUrl] = useState("")
  const fileInputRef = useRef(null)

  const [formdata, setformdata] = useState({
    profilePicture: null,
  })

  // Set initial preview if user has a profile picture
  useEffect(() => {
    if (user?.profilePicture) {
      setPreviewUrl(user.profilePicture)
    }
  }, [user])

  const onchange = (e) => {
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

      setformdata({ ...formdata, [name]: files[0] })

      // Create preview URL
      const reader = new FileReader()
      console.log(reader);
      
      reader.onload = () => {
        setPreviewUrl(reader.result)
      }
      reader.readAsDataURL(files[0])
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  const removeSelectedImage = () => {
    setformdata({ ...formdata, profilePicture: null })
    setPreviewUrl(user?.profilePicture || "")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const onsubmit = (e) => {
    e.preventDefault()

    if (!formdata.profilePicture) {
      toast.error("Please select an image to upload")
      return
    }

    const filedata = new FormData()
    filedata.append("image", formdata.profilePicture)

    setisLoading(true)

    fetch(`${url}/api/user/UploadProfilePicture`, {
      method: "POST",
      body: filedata,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        if (data.SuccessMessage) {
          toast.success(data.SuccessMessage)
          setUser(data.finddata)
        }
        if (data.FailureMessage) {
          toast.error(data.FailureMessage)
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error("An error occurred. Please try again.")
      })
      .finally(() => {
        setisLoading(false)
      })
  }

  return (
    <div className="p-3">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Camera className="h-6 w-6" />
            Profile Photo
          </h1>
          <p className="text-blue-100">Upload a profile picture to personalize your account</p>
        </div>

        <form onSubmit={onsubmit} className="p-6">
          {/* Current Profile Picture Preview */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Profile Picture</h2>

            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                {previewUrl ? (
                  <div className="relative">
                    <img
                      src={previewUrl || "/placeholder.svg"}
                      alt="Profile Preview"
                      className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 shadow-md"
                    />
                    {formdata.profilePicture && (
                      <button
                        type="button"
                        onClick={removeSelectedImage}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        aria-label="Remove selected image"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-200">
                    <ImageIcon className="h-16 w-16 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                name="profilePicture"
                ref={fileInputRef}
                accept="image/*"
                onChange={onchange}
                className="hidden"
              />

              {/* Custom upload button */}
              <div className="flex flex-col items-center gap-4 w-full">
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  <Upload className="h-5 w-5" />
                  Select New Photo
                </button>

                <div className="text-sm text-gray-500 text-center">
                  <p>Click the button to select a new profile picture</p>
                  <p className="mt-1">Supported formats: JPG, PNG (Max: 5MB)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-blue-800 mb-2">Tips for a great profile picture:</h3>
            <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
              <li>Use a photo where your face is clearly visible</li>
              <li>Choose a well-lit environment with minimal background distractions</li>
              <li>A professional or friendly appearance works best</li>
              <li>Square images work best and will be cropped to a circle</li>
            </ul>
          </div>

          {/* Save Button */}
          <div className="border-t pt-6">
            <button
              type="submit"
              disabled={isLoading || !formdata.profilePicture}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <ClipLoader size={20} color="white" loading={isLoading} />
              ) : (
                <>
                  <Save size={18} />
                  Save Profile Picture
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Photo
