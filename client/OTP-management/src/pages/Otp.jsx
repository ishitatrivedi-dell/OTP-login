import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

export default function Otp() {
  const { state } = useLocation();
  const phone = state?.phone;
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verifyOtp = async () => {
    try {
      const response = await api.post("/auth/verify-otp", { phone, otp });
      console.log("OTP verification successful:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("OTP verification failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-80 space-y-4">
        <h1 className="text-xl font-bold">Verify OTP</h1>
        <input
          className="input"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button className="btn w-full" onClick={verifyOtp}>
          Verify
        </button>
      </div>
    </div>
  );
}
