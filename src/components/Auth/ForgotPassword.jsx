import React, { useState } from "react";


const ForgotPassword = () => {
  
  const [email, setEmail] = useState("");

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
                placeholder="Enter your email"
                className=" outline-none flex-1 text-gray-800"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="submit_btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
