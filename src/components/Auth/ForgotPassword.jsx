import React, { useState } from "react";


const ForgotPassword = ({email,setEmail,onSubmit}) => {
  
  // const [email, setEmail] = useState("");

  return (
    <div>
      <div className="max-w-md  mx-auto px-4 lg:px-0">
        <h1 className="text-[1.75rem] md:text-[2rem] font-medium text-textClr ">
          Forgot password
        </h1>
        <p className="text-[1.25rem] text-[#999999] leading-5 mt-3">
          Please enter your email to reset the password
        </p>
        <form className="mt-6">
          {/* email input  */}
          <div>
            <label className="block mb-1 font-Inter font-medium text-textClr">
              Your Email
            </label>
            <div className="form-control my-2">
              <input 
                type="email"
                value={email}
                placeholder="Enter your email"
                className="bg-[#F3F3F3] border border-[#00000030] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] pl-4 pr-10 py-3 rounded-[10px] w-full focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" onClick={onSubmit} className="w-full bg-[#B0A2DA] text-white py-3 text-lg rounded-[10px] font-bold hover:bg-[#9a8dd1] transition-all duration-300 cursor-pointer mt-4">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
