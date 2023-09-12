import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Validation = () => {
  const propData = useContext(noteContext);
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = async () => {
    if (password === "@-edgerunners-junexus" && propData.uploadInfo !== []) {
      console.log(propData.uploadInfo);
      let message = await propData.addFiles();
      console.log(message);
      alert("file uploaded");
      navigate("/addfileinfoform");
    } else if (
      password === "@-edgerunners-junexus" &&
      propData.uploadInfo === []
    ) {
      alert("Re-enter File details and try again");
      navigate("/addfileinfoform");
    } else {
      alert("Wrong password -- please try again.");
    }
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center p-16 ">
      <div className="w-full ">
        <div className="bg-white flex flex-col gap-4 rounded ">
          <div className="">
            <div className="text-black">{propData.uploadInfo.year}</div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fileDownloadUrl"
            >
              PASSWORD
            </label>
            <input
              onChange={onChange}
              onKeyDown={handleKeyDown}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fileDownloadUrl"
              type="text"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
              type="button"
              onClick={handleClick}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validation;
