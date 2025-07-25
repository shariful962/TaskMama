import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import webIcons from "../../assets/images";
import { useNavigate } from "react-router-dom";

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
      {/* Logo button */}
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="cursor-pointer absolute top-6 left-6 z-10"
      >
        <img src={webIcons.logo} alt="logo" className="w-[135px]" />
      </button>

      {/* Form side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-[500px] flex flex-col">
          <h1 className="text-3xl md:text-[2rem] text-[var(--text-color)] font-medium mb-6 md:mb-11.5 text-center">Admin Log in</h1>

          <div className="flex flex-col w-full gap-2 mb-4 md:mb-9">
            <label htmlFor="email" className="text-[var(--text-color)] font-medium">
              Email
            </label>
            <div className="relative">
              <MdOutlineMail size={22} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA]" />
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="bg-[#F3F3F3] border border-[#00000030] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] pl-4 pr-10 py-3 rounded w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 mb-6 md:mb-12">
            <label htmlFor="password" className="text-[var(--text-color)] font-medium">
              Password
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA] cursor-pointer"
              >
                {showPass ? <IoEyeOutline size={22} /> : <FaRegEyeSlash size={22} />}
              </button>
              <input
                id="password"
                type={showPass ? "text" : "password"}
                placeholder="Your password"
                className="bg-[#F3F3F3] border border-[#00000030] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] pl-4 pr-10 py-3 rounded w-full focus:outline-none"
              />
            </div>
          </div>

          <button onClick={handleLogin} className="bg-[#B0A2DA] text-white py-3 text-lg rounded font-bold hover:bg-[#9a8dd1] transition-all duration-300 cursor-pointer mb-4">
            Log in
          </button>

          <p className="text-center text-sm text-gray-500 mb-4">or</p>

          <button className="relative border flex items-center justify-center gap-3  py-3 rounded font-semibold bg-[#353535]">
            <img src={webIcons.googleIco} alt="google ico" className="w-6" />
            <p className="text-white text-lg">Log in with Google account</p>
          </button>
        </div>
      </div>

      {/* Image side */}
      <div className="w-1/2 hidden lg:flex items-center justify-center bg-[var(--main-component-color)]">
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
