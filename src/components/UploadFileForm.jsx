import React, { useContext, useEffect, useState } from "react";
import UploadFile from "./UploadFile";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import Loading from "./Loading";

const UploadFileForm = () => {
  const propData = useContext(noteContext);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const verifyEmailId = async (emailId) => {
    let url = `${propData.host}/edgerunners/junexus/verifymailid/${emailId}`;
    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    const recievedMessage = json.verified;

    // setVerified(true);
    if (recievedMessage === "true") {
      setVerified(true);
    } else {
      setVerified(false);
      navigate("/getverified");
    }

    // setLoading(false);
  };

  // async function addMailId() {
  //   let url = `${host}/edgerunners/junexus/addmailid`;
  //   console.log("run");
  //   const response = await fetch(url, {
  //     method: "POST",

  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify(mailIdInfo),
  //   });
  //   console.log("run");
  //   const json = await response.json();

  //   setState(json);
  //   return json;
  // }

  const handleChange = (e) => {
    propData.setInputEmailId(e.target.value);
  };

  const handleProceed = async (e) => {
    propData.setLoading(true);
    e.preventDefault();
    // set loading true:

    // a function that calls to the databse to check if this email id exists in the verified email id list.
    verifyEmailId(propData.inputEmailId);

    // return true or false.

    // if true then show Upload file form which has a few details to be filled such as semester, year, course. etc. >> that will autogenerate name for the file as well.

    // if false, show an alert button, your emailId is not verified. Also give options like return  or verify now! >> on clicking verify now! the button activateas a function that will generate an api request to verify the email.

    //  then the user inputs the email and the api checks for the verification no.

    // then after it is verfied, the user's mail Id should be added to Database of registered emailIds.

    // then the user can restart the process and the normal upload route will work again.
    propData.setLoading(false);
  };

  if (propData.loading === true) {
    return <Loading />;
  } else if (propData.loading !== true) {
    return (
      <div>
        {/* You have been verified message card. */}
        <div
          className={`${
            propData.emailIdVerifiedMessageVisibility === true ? "" : "hidden"
          } p-10 flex items-center justify-center`}
        >
          <div className="">
            Your Email is verified Now! You can proceed to Upload Files Now!
          </div>
        </div>
        {/* main form */}
        <div
          className={`${verified === true ? "hidden" : ""} ${
            propData.emailIdVerifiedMessageVisibility === true ? "hidden" : ""
          } p-12 `}
        >
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="emailId"
          >
            UNIVERSITY MAIL ID
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emailId"
            type="email"
            placeholder="xyz.23bcn@jecrcu.edu.in"
          />

          <div className="flex items-center justify-between mt-4">
            <button
              className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
              type="button"
              onClick={
                propData.inputEmailId === "" ||
                !propData.inputEmailId.includes("@jecrcu.edu.in")
                  ? () => {
                      alert("Please use a valid University Email ID");
                    }
                  : handleProceed
              }
            >
              Proceed
            </button>
          </div>
        </div>
        <div className={`${verified === true ? "" : "hidden"}`}>
          <button
            className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
            type="button"
            onClick={() => {
              setVerified(false);
            }}
          >
            Change Email
          </button>
          {/* UPLOAD FILE FORM TO BE ADDED */}
          {/* UPLOAD FILE SECTION */}
          <UploadFile setVerified={setVerified} />
        </div>
      </div>
    );
  }
};

export default UploadFileForm;
