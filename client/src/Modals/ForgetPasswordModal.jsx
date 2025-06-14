import { useState } from "react";
import { toast } from "react-toastify";
import { usestore } from "../Store/ContextStore";
import OtpModal from "./OtpModal";
import { Mail } from "lucide-react";
import { ClipLoader } from "react-spinners";

const ForgetPasswordModal = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    url,
    forgetpasswordmodalopen,
    setforgetpasswordmodalopen,
    setotpmodalopen
  } = usestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`${url}/Api/Auth/ForgetPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })
      .then((res) => {
        if (res.ok) {
          setotpmodalopen(true);
        }
        return res.json();
      })
      .then((data) => {
        if (data?.SuccessMessage) {
          toast.success(data.SuccessMessage);
          localStorage.setItem("otptoken", data.token);
        }
        if (data?.FailureMessage) {
          toast.error(data.FailureMessage);
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!forgetpasswordmodalopen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 z-50 flex items-start justify-center">
      <div className="bg-[#242145] text-gray-100 rounded-xl w-[450px] py-8 px-6 relative mt-20">
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-400"
          onClick={() => setforgetpasswordmodalopen(false)}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-start mb-4 text-gray-200">
          Forgot Password?
        </h2>
        <p className="text-sm text-gray-200 mb-6">
          Enter your email address and we’ll send you an OTP to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 pl-10 border border-gray-500 rounded-md focus:outline-none text-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
                required
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-red-600 transition-all"
          >
            {isLoading ? <ClipLoader size={20} color="white" /> : "Send OTP"}
          </button>
        </form>
      </div>

      {/* OTP Modal */}
      <OtpModal />
    </div>
  );
};

export default ForgetPasswordModal;
