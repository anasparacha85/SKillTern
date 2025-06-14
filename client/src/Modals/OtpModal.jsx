import { useState } from "react";
import { toast } from "react-toastify";
import { usestore } from "../Store/ContextStore";
import UpdatePasswordModal from "./UpdatePasswordModal";
import { ClipLoader } from "react-spinners";

const OtpModal = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    url,
    otpmodalopen,
    setotpmodalopen,
    setupdatepasswordmodalopen,
  } = usestore();

  const otptoken = localStorage.getItem("otptoken");

  const handleChange = (index, value) => {
    if (value.length > 1 || isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next
    if (value && index < otp.length - 1) {
      const next = document.getElementById(`otp-${index + 1}`);
      if (next) next.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const combinedOtp = otp.join("");

    try {
      const response = await fetch(`${url}/Api/Auth/VerifyOtp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: otptoken,
        },
        body: JSON.stringify({ otp: combinedOtp }),
      });

      const data = await response.json();

      if (response.ok && data.SuccessMessage) {
        toast.success(data.SuccessMessage);
        setupdatepasswordmodalopen(true);
      } else {
        toast.error(data.FailureMessage || "Invalid OTP");
      }
    } catch (error) {
      toast.error("Verification failed.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!otpmodalopen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-start justify-center">
      <div className="bg-[#242145] text-white w-[450px] py-8 px-6 rounded-xl relative mt-24">
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-100"
          onClick={() => setotpmodalopen(false)}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-start mb-3 text-gray-200">
          Enter OTP
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Enter the 5-digit OTP sent to your email
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="flex justify-between space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                className="w-12 h-12 rounded-md text-center text-xl border border-gray-500 bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-red-600 transition-all"
          >
            {isLoading ? <ClipLoader size={20} color="white" /> : "Verify OTP"}
          </button>
        </form>
      </div>

      {/* Update password modal */}
      <UpdatePasswordModal />
    </div>
  );
};

export default OtpModal;
