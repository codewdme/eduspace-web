import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const UploadFile = (props) => {
  const propData = useContext(noteContext);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const inputfile = e.target.files[0];

    if (inputfile) {
      // Check file type
      if (inputfile.type === "application/pdf") {
        // Check file size
        if (inputfile.size <= 5 * 1024 * 1024) {
          // 5MB in bytes
          setFile(inputfile);
        } else {
          setFile(null);
          alert("File size must be 5MB or less.");
        }
      } else {
        setFile(null);
        alert("Only PDF files are allowed.");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    propData.setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      `${propData.host}/edgerunners/junexus/mailuploadedfile`,
      {
        method: "POST",
        header: { "Content-Type": "multipart/form-data" },
        body: formData,
      }
    );
    console.log(response);
    if (response.ok) {
      alert(
        "File uploaded. Thankyou for contributing to JU Nexus. -Team Edgerunners "
      );

      props.setVerified(false);
    } else {
      alert("Some error ocurred. Please try again.");
    }
    propData.setLoading(false);
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div>
        <p className="p-12  text-left text-4xl font-extrabold  ">
          Upload Files
        </p>
      </div>
      <div className="flex flex-col p-4 gap-8">
        <p>
          Only pdf files accepted!
          <p>Max Size: 5MB.</p>
        </p>
        <div>
          <label class="file-input-container grid grid-cols-1 md:w-[50%] items-center justify-center p-6 py-12 border-2 border-black rounded-md text-xl text-center">
            {file ? `Selected file: ${file.name}` : "Select Files"}
            <input
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center p-6 text-lg gap-6 border-2 border-black rounded-md file-input "
              type="file"
              accept=".pdf"
              placeholder="+"
              onChange={handleFileChange}
            />{" "}
          </label>
        </div>
        <div className="flex justify-center">
          <button
            disabled={!file}
            type="submit"
            className={`flex  items-center justify-center ml-4 p-2 w-[50%] md:w-[10%] bg-blue-200 rounded-xl cursor-pointer  ${
              file
                ? "hover:scale-105 transition hover:ease-in-out shadow-lg border-2 border-white hover:border-black text-black"
                : ""
            } `}
          >
            {file && <p>Submit</p>}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UploadFile;
