import React, { useRef, useState } from "react"

const VerifyCode = () => {
  const email = "demo@gmail.com";
  const inputs = useRef([]);
  const [values, setValues] = useState(["", "", "", "", "", ""]);

  const handleSubmit = () => {
    const joinOtp = values.join(""); // join the otp array in a single string..
    setOtp(joinOtp);
    onSubmit(joinOtp);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      // validate the otp (only number)
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (index < 5) {
        inputs.current[index + 1]?.focus();
      }
    } else {
      // If invalid, reset the value
      const newValues = [...values];
      newValues[index] = "";
      setValues(newValues);
    }
  };
// backspace, left and right arrow moving function 
  const handleKey = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // prevent default browser behavior

      const newValues = [...values];

      if (values[index]) {
        // If current field has a value, clear it
        newValues[index] = "";
        setValues(newValues);
      } else if (index > 0) {
        // If empty, move focus left and clear previous value
        newValues[index - 1] = "";
        setValues(newValues);
        inputs.current[index - 1]?.focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // otp code copy function 
  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").trim();
    if (!paste) return;

    // Filter only digits and slice max 6 chars
    const digits = paste.replace(/\D/g, "").slice(0, 6).split("");

    if (digits.length === 0) return;

    const newValues = [...values];
    for (let i = 0; i < digits.length; i++) {
      newValues[i] = digits[i];
    }
    setValues(newValues);

    // Focus the last filled input
    const lastFilledIndex = digits.length - 1;
    inputs.current[lastFilledIndex]?.focus();
  };

  return (
    <div className="mx-auto max-w-md font-Roboto">
      <h3 className="text-[1.75rem] md:text-[2rem] font-medium">
        Check your email
      </h3>
      <p className="text-gray-400">
        We sent a reset link to contact <strong>{email}</strong>{" "}
        enter 6 digit code that mentioned in the email
      </p>

      <div className="flex justify-between mt-5">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            maxLength={1}
            type="tel"
            inputMode="numeric"
            value={values[index]} // controlled input
            className={`p-2 rounded-lg border-2 text-center outline-none text-xl w-[3rem] h-[4rem] transition-colors duration-150 ${
              values[index] ? "border-blue-500" : "border-gray-400"
            }`}
            ref={(el) => (inputs.current[index] = el)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKey(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </div>
      <button
        className="w-full bg-[#B0A2DA] text-white py-3 text-lg rounded-[10px] font-bold hover:bg-[#9a8dd1] transition-all duration-300 cursor-pointer mt-4"
        disabled={!values.every((e) => e.trim() != "")}
        onClick={handleSubmit}
        style={{
          cursor: values.every((e) => e.trim() != "")
            ? "pointer"
            : "not-allowed",
        }}
      >
        Verify Code
      </button>
      <p className="text-gray-400 text-base mt-5">
        Haven’t got the email yet?{" "}
        <span className="text-blue-400 underline cursor-pointer">
          Resend email
        </span>
      </p>
    </div>
  );
};

export default VerifyCode
