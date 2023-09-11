import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const AddFileInfoForm = () => {
  const navigate = useNavigate();
  const propData = useContext(noteContext);

  const [formData, setFormData] = useState({
    fileName: "",
    examName: "",
    course: "",
    semester: null,
    category: "",
    author: "",
    fileUrl: "",
    fileDownloadUrl: "",
    year: null,
  });

  const handleClick = () => {
    propData.setUploadInfo(formData);
    console.log(formData);
    setTimeout(() => {
      navigate("/validation");
    }, 1000);
  };

  const onChange = (e) => {
    if (e.target.id === "fileUrl") {
      const downloadLink = e.target.value
        .replace(
          "https://drive.google.com/file/d/",
          "https://drive.google.com/u/0/uc?id="
        )
        .replace("/view", "&export=download");
      console.log("donload link ", downloadLink);
      console.log(formData.fileDownloadUrl);
      setFormData({
        ...formData,
        fileDownloadUrl: downloadLink,
        [e.target.id]: e.target.value,
      });
      console.log(formData.fileDownloadUrl);
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  return (
    <div className=" section flex justify-center items-center p-16 ">
      <div className="w-full  ">
        <form className="bg-white flex flex-col gap-4 rounded ">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                CATEGORY
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                type="text"
                placeholder="PYQS / ASSIGNMENTS / SYLLABUS / NOTES"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="course"
              >
                COURSE
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="course"
                type="text"
                placeholder="BTECH"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="semester"
              >
                SEMESTER
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="semester"
                type="number"
                placeholder="4"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fileName"
              >
                SUBJECT
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fileName"
                type="text"
                placeholder="Applied Physics"
              />
            </div>

            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="examName"
              >
                EXAM NAME / UNIT-N0.
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="examName"
                type="text"
                placeholder="END SEM or UNIT NO. >> if assignment,syllabus then >> NULL"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="year"
              >
                YEAR
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="year"
                type="number"
                placeholder="2023"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="author"
              >
                AUTHOR
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                type="text"
                placeholder="unknown / edgerunners / 'name' "
              />
            </div>
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fileUrl"
              >
                FILE URL
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fileUrl"
                type="text"
                placeholder="https://drive.google.com/file/d/1wPpzYwC6Gl-bKQA7GxY5mCS632_bV5RM/view"
              />

              <p className="block text-black text-xs font-bold mb-2">
                DOWNLOAD URL : {"   "}
                <span className=" font-base">{formData.fileDownloadUrl}</span>
              </p>
            </div>
            {/* <div className="col-span-2">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="fileDownloadUrl"
              >
                {formData.fileDownloadUrl}
              </label>
              <input
                onChange={onchange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fileDownloadUrl"
                type="text"
                placeholder="https://drive.google.com/u/0/uc?id=1wPpzYwC6Gl-bKQA7GxY5mCS632_bV5RM&export=download"
              />
            </div> */}
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
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

export default AddFileInfoForm;
