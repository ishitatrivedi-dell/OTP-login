import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
    const userData = { phone };
    if (isNewUser) {
      userData.name = name;
      userData.email = email;
    }
    await api.post("/auth/send-otp", userData);
    navigate("/otp", { state: { phone, isNewUser, name, email } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-80 space-y-4">
        <h1 className="text-xl font-bold">Login</h1>
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="newUser"
            checked={isNewUser}
            onChange={(e) => setIsNewUser(e.target.checked)}
          />
          <label htmlFor="newUser" className="text-sm">
            First time visiting?
          </label>
        </div>

        {isNewUser && (
          <>
            <input
              className="input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        )}

        <input
          className="input"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        
        <button 
          className="btn w-full" 
          onClick={sendOtp}
          disabled={isNewUser && (!name || !email)}
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}
