import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import webIcons from "../../assets/images";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../../components/Auth/ForgotPassword";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    // Handle login logic here  
    console.log("Login button clicked");
    navigate("/dashboard");
  }

  return (
    <div className="w-full flex h-screen  md:flex-row">
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6">
          {/* Logo button */}
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="cursor-pointer absolute top-6 left-6 z-10"
      >
        <img src={webIcons.logo} alt="logo" className="w-[135px]" />
      </button>
      <ForgotPassword ></ForgotPassword>
    </div>

      {/* Form side */}
     

      {/* Image side */}
      <div className="w-full md:w-1/2 hidden lg:flex items-center justify-center bg-[var(--main-component-color)]">
        <img
          src={webIcons.loginBg}
          alt="Login side"
          className=" object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
