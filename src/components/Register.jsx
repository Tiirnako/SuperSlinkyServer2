import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useNavigation } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import "./register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter username");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history("/Dashboard");
  }, [user, loading]);
  return (
    <div className="bg-[#7c7c7c]">
    <div className="h-screen text-lg font-bold">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link className="loginlink" to="/Login">Login here</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;