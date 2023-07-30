import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import "../index.css"
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Link } from "react-router-dom"

function Dashboard() {

  const mcS = (<div className="mc-status" data-mc-server="mc.superslinkyserver.com"></div>)

  const [user, loading, error] = useAuthState(auth);
  {!user && <Link to="/" />}
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className=" bg-[#333333] h-screen overflow-scroll no-scrollbar">

       <div className="text-base font-semibold text-[#ffffff]"> 
        
        <div className=" flex flex-col items-center font-bold py-6 border-b-2  ">
        Logged in:
        </div>

          <div className="my-6 mx-6 rounded-lg border-2">
           <div className="flex flex-col  "> 

            <div className="p-6 ">
              <div>Welcome to the server, {name}.</div>
              {/*<div>Email: {user?.email}</div>*/}
              </div>

            <div className="md:flex justify-center">

              <div className=" flex flex-col items-center mx-6 space-y-8 mb-8">
              <Link to="/Servers" className="bg-[#464646] py-4 text-center link rounded-lg w-[250px] hover:bg-[#202020] " onClick={ mcS }>Servers</Link>
                <button className="bg-[#464646] py-4 text-center link rounded-lg w-[250px] hover:bg-[#202020] ">Tools</button>
              </div>

              <div className="flex flex-col items-center mx-2 space-y-8 mb-8" >
                <button className="bg-[#464646] py-4 text-center link rounded-lg w-[250px] hover:bg-[#202020] ">Account Settings</button>
                <button className="bg-[#464646] py-4 text-center link rounded-lg w-[250px] hover:bg-[#202020] ">Soundboard</button>
              </div>

            </div>

            </div>

          </div>

       </div>
     </div>
  );



}

export default Dashboard;