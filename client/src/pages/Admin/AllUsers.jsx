import { Check, Cross, Delete, DeleteIcon, Edit, TicketIcon, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { usestore } from "../../Store/ContextStore";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

// const mockUsers = [
//   {
//     id: 1,
//     name: "Ali Raza",
//     email: "ali@example.com",
//     phone: "03001234567",
//     profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "Sara Khan",
//     email: "sara@example.com",
//     phone: "03121234567",
//     profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
//     status: "Inactive",
//   },
//   // Add more dummy users as needed
// ];

const AdminUsers = () => {
    const {url,jwtToken}=usestore()
  const [users, setUsers] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [Loading, setLoading] = useState(false)
const FetctUsers=async()=>{
    try {
        setLoading(true)
        const response=await fetch(`${url}/api/admin/getAllUsers`,{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${jwtToken}`
            }
        })
        const data=await response.json()
        
       setUsers(data)
        
    } catch (error) {
        toast.error(error.FailureMessage)
        
        
    }
    finally{

setLoading(false)
    }
}
  useEffect(() => {
    FetctUsers()
  }, []);

  const toggleStatus =async (id,status) => {

    let Action=status=='Activated'?'DeActivate':'Activate'
    console.log(Action);
    try {
 
    const response=await fetch(`${url}/api/admin/ToggleStatus`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${jwtToken}`

        },
        body:JSON.stringify({userId:id,Action:Action})
    })
    const data=await response.json();
    if(data.SuccessMessage){
        toast.success(data.SuccessMessage);
        FetctUsers()
    }
           
    } catch (error) {
        toast.error(error.FailureMessage)
        
    }
    
   
  };

//   const deleteUser = (id) => {
//     setUsers((prev) => prev.filter((user) => user.id !== id));
//   };

  const openImageModal = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
     <div className="lg:max-w-6xl w-screen lg:ml-80 p-6 bg-white shadow-md rounded-lg mt-10 max-h-[550px] overflow-y-scroll overflow-x-scroll">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">All Users</h2>
      {Loading ? (
    <div className='w-full h-[100%] flex justify-center items-center'><ClipLoader size={50} color='blue' loading={Loading}/></div>
    ) : (
      <div className="overflow-x-auto w-full overflow-y-scroll">
        <table className="w-full bg-white rounded-md shadow text-sm md:text-base overflow-y-scroll">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Profile</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={user.
profilePicture}
                    alt="Profile"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover cursor-pointer"
                    onClick={() => openImageModal(user.
profilePicture)}
                  />
                </td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
               
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.Status === "Activated"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.Status}
                  </span>
                </td>
                <td className="p-3 flex flex-wrap gap-2">
                  <button onClick={()=>editUser(user._id)} className="px-2 py-1   text-xs rounded hover:bg-gray-100 cursor-pointer ">
                    <Edit/>
                  </button>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="px-2 py-1   text-xs rounded hover:bg-gray-100 cursor-pointer "
                  >
                    <Delete/>
                  </button>
                  <button
                    onClick={() => toggleStatus(user._id,user.Status)}
                    className={`px-2 py-1 text-[14px] rounded text-white flex gap-1 cursor-pointer rounded-l-full ${
                      user.status === "Active" ? "bg-gray-300 hover:bg-gray-400" : "bg-gray-500 hover:bg-gray-600"
                    }`}
                  >
                  {user.Status === "Activated" ? <X/> :<Check/>} {user.Status === "Activated" ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

      {/* Profile Picture Modal */}
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
              alt="Profile Large"
              className="max-w-full max-h-[80vh] mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
