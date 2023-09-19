import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const AddFileInfoForm = () => {
  const navigate = useNavigate();
  const propData = useContext(noteContext);
  const [formData, setFormData] = useState({
    subject: "",
    unitNo: "",
    assignmentNo: "",
    examName: "",
    course: "",
    subjectCode: "",
    semester: "",
    category: "",
    author: "",
    fileUrl: "",
    fileDownloadUrl: "",
    year: "",
  });

  const handleProceed = () => {
    propData.setUploadInfo(formData);
    console.log(formData);
    setTimeout(() => {
      navigate("/validation");
    }, 1000);
  };

  const onChange = (e) => {
    //  code to automatically convert the file url to downloadable url as well
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

  // automating the file info database updating system.
  const [inputString, setInputString] = useState("");

  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  const handleProcess = () => {
    // CHECK FOR CATEGORY

    if (inputString.includes("PYQS")) {
      var automatedCategoryName = "PYQS";
    } else if (inputString.includes("NOTES")) {
      var automatedCategoryName = "NOTES";
    } else if (inputString.includes("ASSIGNMENT")) {
      var automatedCategoryName = "ASSIGNMENTS";
    } else if (inputString.includes("SYLLABUS")) {
      var automatedCategoryName = "SYLLABUS";
    }

    // EXAM Name Identification:

    if (inputString.includes("INSEM1")) {
      var automatedExamName = "INSEM I";
    } else if (inputString.includes("INSEM2")) {
      var automatedExamName = "INSEM II";
    } else if (inputString.includes("INSEM3")) {
      var automatedExamName = "INSEM III";
    } else if (inputString.includes("ENDSEM")) {
      var automatedExamName = "ENDSEM";
    } else if (inputString.includes("BACKEXAM")) {
      var automatedExamName = "BACKEXAM";
    }

    // CHECK FOR UNIT NO
    let automatedUnitNo = "";
    if (inputString.includes("UNIT5")) {
      automatedUnitNo = "5";
    } else if (inputString.includes("UNIT4")) {
      automatedUnitNo = "4";
    } else if (inputString.includes("UNIT3")) {
      automatedUnitNo = "3";
    } else if (inputString.includes("UNIT2")) {
      automatedUnitNo = "2";
    } else if (inputString.includes("UNIT1")) {
      automatedUnitNo = "1";
    } else if (inputString.includes("UNIT6")) {
      automatedUnitNo = "6";
    }

    //CHECK FOR ASSIGNMENT NO:
    if (inputString.includes("ASSIGNMENT1")) {
      var automatedAssignmentNo = 1;
    } else if (inputString.includes("ASSIGNMENT2")) {
      var automatedAssignmentNo = 2;
    } else if (inputString.includes("ASSIGNMENT3")) {
      var automatedAssignmentNo = 3;
    } else if (inputString.includes("ASSIGNMENT4")) {
      var automatedAssignmentNo = 4;
    } else if (inputString.includes("ASSIGNMENT5")) {
      var automatedAssignmentNo = 5;
    } else if (inputString.includes("ASSIGNMENT6")) {
      var automatedAssignmentNo = 6;
    }

    // CHECK FOR YEAR:
    if (inputString.includes("2021")) {
      var automatedIdentfiedYear = "2021";
    } else if (inputString.includes("2022")) {
      var automatedIdentfiedYear = "2022";
    } else if (inputString.includes("2023")) {
      var automatedIdentfiedYear = "2023";
    } else if (inputString.includes("2024")) {
      var automatedIdentfiedYear = "2024";
    } else if (inputString.includes("2025")) {
      var automatedIdentfiedYear = "2025";
    } else if (inputString.includes("2026")) {
      var automatedIdentfiedYear = "2026";
    }

    // CHECK FOR SEMESTER VALUES
    if (inputString.includes("SEM1")) {
      var semesterValue = "1";
    } else if (inputString.includes("SEM2")) {
      var semesterValue = "2";
    } else if (inputString.includes("SEM3")) {
      var semesterValue = "3";
    } else if (inputString.includes("SEM4")) {
      var semesterValue = "4";
    } else if (inputString.includes("SEM5")) {
      var semesterValue = "5";
    } else if (inputString.includes("SEM6")) {
      var semesterValue = "6";
    } else if (inputString.includes("SEM7")) {
      var semesterValue = "7";
    } else if (inputString.includes("SEM8")) {
      var semesterValue = "8";
    }

    // COURSE Identification
    let courseNameForSubjectsArray = "";

    if (inputString.includes("BTECH")) {
      var automatedCourseName = "BTECH";
      courseNameForSubjectsArray = "BTech";
    } else if (inputString.includes("BCA")) {
      var automatedCourseName = "BCA";
      courseNameForSubjectsArray = "BCA";
    } else if (inputString.includes("BBA")) {
      var automatedCourseName = "BBA";
      courseNameForSubjectsArray = "BBA";
    } else if (inputString.includes("HUMANITIES")) {
      var automatedCourseName = "HUMANITIES";
      courseNameForSubjectsArray = "Humanities";
    } else if (inputString.includes("HOSPITALITY")) {
      var automatedCourseName = "HOSPITALITY";
      courseNameForSubjectsArray = "Hospitality";
    } else if (inputString.includes("HOTELMANAGEMENT")) {
      var automatedCourseName = "HOTELMANAGEMENT";
      courseNameForSubjectsArray = "Hotel Management";
    } else if (inputString.includes("LAW")) {
      var automatedCourseName = "LAW";
      courseNameForSubjectsArray = "Law";
    } else if (inputString.includes("BAPSYCHOLOGY")) {
      var automatedCourseName = "BAPSYCHOLOGY";
      courseNameForSubjectsArray = "BA Hons. Psychology";
    }

    // check for Subject Name:
    let automatedIdentifiedSubjectName = "";
    let automatedIdentifiedSubjectCode = "";
    let semester = parseInt(semesterValue);
    let subjectArray = [];

    const selectedOptions =
      propData.subjectOptionsMap[courseNameForSubjectsArray];

    if (
      selectedOptions &&
      semester >= 1 &&
      semester <= selectedOptions.length
    ) {
      subjectArray = selectedOptions[semester - 1];
    }

    for (let i = 0; i < subjectArray.length; i++) {
      const element = subjectArray[i];

      if (inputString.includes(element.fileNamingFormatName)) {
        automatedIdentifiedSubjectName = element.subjectName;
        automatedIdentifiedSubjectCode = element.subjectCode;
      }
    }

    // Setting form DATA:

    setFormData({
      ...formData,
      subject: automatedIdentifiedSubjectName,
      subjectCode: automatedIdentifiedSubjectCode || "",
      unitNo: automatedUnitNo || "",
      assignmentNo: automatedAssignmentNo || "",
      examName: automatedExamName || "",
      course: automatedCourseName || "",
      semester: semesterValue || "",
      category: automatedCategoryName || "",
      author: "EdgeRunners",
      fileUrl: "",

      year: automatedIdentfiedYear,
    });
  };

  return (
    <div className=" section flex justify-center items-center p-16 ">
      <div className="w-full  ">
        <div className="bg-white flex flex-col gap-4 rounded ">
          {/* automatic fileinfo extraction from filename*/}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fileName"
              >
                FILE NAME
              </label>
              <input
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fileName"
                type="text"
                placeholder="Copy Your File Name Here"
              />
            </div>
            <div className="flex items-center justify-between ">
              <button
                className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
                type="button"
                onClick={handleProcess}
              >
                Process
              </button>
            </div>
          </div>

          {/* File data input section */}
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
                value={formData.category}
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
                value={formData.course}
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
                value={formData.semester}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="semester"
                type="number"
                placeholder="4"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subjectCode"
              >
                SUBJECT CODE
              </label>
              <input
                onChange={onChange}
                value={formData.subjectCode}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subjectCode"
                type="text"
                placeholder="DCA0001"
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
                value={formData.subject}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Applied Physics"
              />
              {/* <select
                id="filename"
                name="filename"
                onChange={onchange}
                
              >
                <option value="select">Select a Subject</option>
                <option value="javascript">JavaScript</option>
                <option value="php">PHP</option>
                <option value="java">Java</option>
                <option value="golang">Golang</option>
                <option value="python">Python</option>
                <option value="c#">C#</option>
                <option value="C++">C++</option>
                <option value="erlang">Erlang</option>
              </select> */}
            </div>

            <div className={`${formData.category == "PYQS" ? "" : "hidden"}`}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="examName"
              >
                EXAM NAME
              </label>
              <input
                onChange={onChange}
                value={formData.examName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="examName"
                type="text"
                placeholder="END SEM >> if not exam paper then NULL"
              />
            </div>
            <div className={`${formData.category == "NOTES" ? "" : "hidden"}`}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="unitNo"
              >
                UNIT NO
              </label>
              <input
                onChange={onChange}
                value={formData.unitNo}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="unitNo"
                type="number"
                placeholder="3"
              />
            </div>
            <div
              className={`${
                formData.category == "ASSIGNMENTS" ? "" : "hidden"
              }`}
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="assignmentNo"
              >
                ASSIGNMENT NO
              </label>
              <input
                onChange={onChange}
                value={formData.assignmentNo}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="assignmentNo"
                type="number"
                placeholder="3"
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
                value={formData.year}
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
                value={formData.author}
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
                value={formData.} 
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
              onClick={handleProceed}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFileInfoForm;
