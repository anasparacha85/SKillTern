import { useState } from "react";
import { toast } from "react-toastify";
import { usestore } from "../Store/ContextStore";
import { ClipLoader } from "react-spinners";

const UpdatePasswordModal = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    url,
    setforgetpasswordmodalopen,
    setotpmodalopen,
    updatepasswordmodalopen,
    setupdatepasswordmodalopen,
  } = usestore();

  const otptoken = localStorage.getItem("otptoken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${url}/Api/Auth/UpdatePassword`, {
        method: "PATCH",
        headers: {
          Authorization: otptoken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword, confirmNewPassword }),
      });

      const data = await response.json();

      if (data.SuccessMessage) {
        toast.success(data.SuccessMessage);
        setupdatepasswordmodalopen(false);
        setotpmodalopen(false);
        setforgetpasswordmodalopen(false);
      } else {
        toast.error(data.FailureMessage);
      }
    } catch (error) {
      toast.error("An error occurred while updating the password.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!updatepasswordmodalopen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-start justify-center">
      <div className="bg-[#242145] text-white w-[450px] py-8 px-6 rounded-xl relative mt-24">
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-100"
          onClick={() => setupdatepasswordmodalopen(false)}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-3 text-start text-gray-200">
          Update Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm mb-1 text-gray-300">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-red-600 transition-all"
          >
            {isLoading ? <ClipLoader size={20} color="white" /> : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordModal;
