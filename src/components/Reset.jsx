import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../firebase";
import "./reset.css";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="bg-[#7c7c7c]">
    <div className="h-screen text-lg font-bold">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordResetEmail(auth, email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link className="registerlink" to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
}
export default Reset;