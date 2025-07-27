import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");

  // handle password logic here
  const handlePass = (e) => {
    e.preventDefault();
    if (!password || !confirmPass) {
      alert("fill in both field");
      return;
    }
    if (password !== confirmPass) {
      alert("password don't match");
      return;
    }
    console.log("password updated", password);
    alert("password successfully updated!");
  };

  return (
    <div>
      <div className="max-w-md  mx-auto px-4 lg:px-0">
        <h1 className="text-[1.75rem] md:text-[2rem] font-medium text-textClr ">
          Set a new password
        </h1>
        <p className="text-[1.25rem] text-[#999999] leading-5.5 mt-3">
          Create a new password. Ensure it differs from previous ones for
          security
        </p>
        <form className="mt-6">
          {/* password input  */}
          <div className="flex flex-col w-full gap-2 mb-6 md:mb-12">
            <label
              htmlFor="password"
              className="text-[var(--text-color)] font-medium"
            >
              New Password
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA] cursor-pointer"
              >
                {showPass ? (
                  <IoEyeOutline size={22} />
                ) : (
                  <FaRegEyeSlash size={22} />
                )}
              </button>
              <input
                id="password"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your new password"
                className="bg-[#F3F3F3] border border-[#00000030] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] pl-4 pr-10 py-3 rounded-[10px] w-full focus:outline-none"
              />
            </div>
          </div>

          {/* confirm password input  */}

          <div className="flex flex-col w-full gap-2 mb-6 md:mb-12">
            <label
              htmlFor="confirmPassword"
              className="text-[var(--text-color)] font-medium"
            >
              Confirm New Password
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA] cursor-pointer"
              >
                {showConfirmPass ? (
                  <IoEyeOutline size={22} />
                ) : (
                  <FaRegEyeSlash size={22} />
                )}
              </button>
              <input
                id="confirmPassword"
                type={showConfirmPass ? "text" : "password"}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="Re-enter password"
                className="bg-[#F3F3F3] border border-[#00000030] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] pl-4 pr-10 py-3 rounded-[10px] w-full focus:outline-none"
              />
            </div>
          </div>

          <button type="submit" onClick={handlePass} className="w-full bg-[#B0A2DA] text-white py-3 text-lg rounded-[10px] font-bold hover:bg-[#9a8dd1] transition-all duration-300 cursor-pointer mt-4">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
