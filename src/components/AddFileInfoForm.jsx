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
    setTimeout(() => {
      navigate("/validation");
    }, 1000);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
                placeholder="APPLIED PHYSICS"
              />
            </div>

            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="examName"
              >
                EXAM NAME
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="examName"
                type="text"
                placeholder="END SEM >> if not a question paper then >> NULL"
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
            </div>
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fileDownloadUrl"
              >
                DIRECT DOWNLOAD URL
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fileDownloadUrl"
                type="text"
                placeholder="https://drive.google.com/u/0/uc?id=1wPpzYwC6Gl-bKQA7GxY5mCS632_bV5RM&export=download"
              />
            </div>
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
        <p className="p-12 text-center text-gray-500 text-xs">
          &copy;2023 EdgeRunners Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AddFileInfoForm;
