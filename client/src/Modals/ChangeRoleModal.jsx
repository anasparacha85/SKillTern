import { useEffect, useState } from "react";
import { usestore } from "../Store/ContextStore";

const ChangeRoleModal = ({ isOpen, onClose, currentRole, onChangeRole,userID }) => {
  const [selectedRole, setSelectedRole] = useState(currentRole);
  const [Roles, setRoles] = useState([])
 const {url,jwtToken}=usestore()
 const fetchRole=async()=>{
    try {
        const response=await fetch(`${url}/api/admin/GetRoles`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${jwtToken}`
            }
        })
        const data=await response.json()
        console.log(data);
        setRoles(data)
        
    } catch (error) {
        console.log(error);
        
    }
 }
 useEffect(()=>{
    fetchRole()
 },[isOpen])
  const handleRoleChange = () => {
    // if (selectedRole !== currentRole) {
      onChangeRole(selectedRole,userID); // callback to update role in parent
    // }
    onClose(); // close modal after update
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Change User Role</h2>

        {/* Current Role Display */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Current Role</label>
          <input
            type="text"
            value={currentRole}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Change Role Select */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Select New Role</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
           {Roles.map((role)=>(
            <option key={role} value={role}>{role}</option>
           ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleRoleChange}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Change Role
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeRoleModal;
