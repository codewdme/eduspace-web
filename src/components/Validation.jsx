import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Validation = () => {
  const propData = useContext(noteContext);
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (password === "@-edgerunners-junexus" && propData.uploadInfo !== []) {
      console.log(propData.uploadInfo);
      //   let message = await propData.addFiles();
      //   alert(message);
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
        <form className="bg-white flex flex-col gap-4 rounded ">
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fileDownloadUrl"
            >
              PASSWORD
            </label>
            <input
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fileDownloadUrl"
              type="password"
              placeholder="**************"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleClick}
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Validation;
