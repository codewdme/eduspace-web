import React, { useContext, useState, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { Navigate, useNavigate } from "react-router-dom";

const GetVerified = () => {
  const propData = useContext(noteContext);
  const navigate = useNavigate();
  const [showOtpDialogueBox, setShowOtpDialogueBox] = useState(false);

  const handleVerification = async () => {
    generateOtp();
    setShowOtpDialogueBox(true);
  };

  useEffect(() => {
    if (propData.inputEmailId === "") {
      navigate("/uploadfiles");
    }
  });

  //OTP generation
  const generateOtp = async () => {
    let url = `${propData.host}/edgerunners/junexus/generateotp`;
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmailId: propData.inputEmailId }),
    });
  };

  //   OTP verification
  const [inputOtp, setInputOtp] = useState("");

  const verifyOtp = async () => {
    let url = `${propData.host}/edgerunners/junexus/verifyotp`;
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmailId: propData.inputEmailId,
        inputOtp: inputOtp,
      }),
    });
    const json = await response.json();
    if (json.message === "true") {
      propData.setEmailIdVerifiedMessageVisibility(true);
      navigate("/uploadfiles");

      setTimeout(() => {
        propData.setEmailIdVerifiedMessageVisibility(false);
      }, 3000);
    } else {
      setInputOtp(null);
    }
  };

  const handleOtpInput = (e) => {
    setInputOtp(e.target.value);
    // if (!regexPattern.test(inputValue)) {
    //   // If the input doesn't match the pattern, remove invalid characters
    //   const validInput = inputValue.replace(/[^\d]/g, "");
    //   setInputOtp(validInput);
    //   console.log("setvalueofinputotp", inputOtp);
    // }
  };
  return (
    <div>
      <div
        className={`  flex flex-col p-8 ${
          showOtpDialogueBox === true ? "hidden" : ""
        }`}
      >
        <div>
          <p className="p-12  text-left text-4xl font-extrabold  ">
            Your email is not verified
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
            type="button"
            onClick={() => {
              navigate("/uploadfiles");
            }}
          >
            Cancel
          </button>
          <button
            className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
            type="button"
            onClick={handleVerification}
          >
            Get Verified
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col p-8 ${
          showOtpDialogueBox === true ? "" : "hidden"
        }`}
      >
        <div>
          <p className="p-12  text-left text-4xl font-extrabold  ">
            Verify Email
          </p>
        </div>
        <div
          className={`${
            propData.emailIdVerifiedMessageVisibility === true ? "hidden" : ""
          }`}
        >
          <button
            className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
            type="button"
            onClick={() => {
              navigate("/uploadfiles");
            }}
          >
            Change Email
          </button>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="OTP"
          >
            Check your email for OTP
          </label>

          <input
            onChange={handleOtpInput}
            value={inputOtp}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="OTP"
            type="OTP"
            placeholder="Enter OTP here"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
            type="button"
            onClick={() => {
              generateOtp();
              alert("OTP Resent");
            }}
          >
            Resend OTP
          </button>
          <button
            className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
            type="button"
            onClick={verifyOtp}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetVerified;
