import React, { useEffect } from "react";
import File from "./File";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";

const Results = () => {
  const propData = useContext(noteContext);
  const location = useLocation();

  useEffect(() => {
    propData.state.slice(0, 1).map((element) => {
      propData.setSelectedSubject(element.subject);
    });
  });

  // on componetn mount it calls the fetchfiles function to get fileInfo data from backend API;
  // useEffect(() => {
  //   propData.fetchFiles();
  //   console.log(`Results`, propData.state);
  // }, []);

  if (propData.loading) {
    return <Loading />;
  } else {
    if (propData.state.length === 0) {
      return (
        <div className=" section flex flex-col gap-4 p-8 ">
          <div>
            <p className="p-2  text-left text-4xl font-extrabold  ">
              {propData.sectionHeading}
            </p>
          </div>
          <div className="flex flex-wrap  justify-between items-center gap-2">
            <div className="flex  items-center gap-2 ">
              <p className="text-center text-md font-bold  ">
                {propData.course}
              </p>
              <p className="text-center text-md font-bold  ">
                {propData.courseName} / Semester {propData.selectedSem} /{" "}
                {propData.selectedSubject}
              </p>
            </div>
            {/* Change sem and change course buttons */}
            <div className="w-full md:w-auto flex gap-4 justify-center items-center text-sm font-medium ">
              <Link
                to={`${location.pathname.replace("results", "choosesubject")}`}
                className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
              >
                Change Subject
              </Link>
              <Link
                to={`${location.pathname.replace("results", "choosesem")}`}
                className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
              >
                Change Sem
              </Link>
              <Link
                to={`${location.pathname.replace("/results", "")}`}
                className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
              >
                Change Course
              </Link>
            </div>
          </div>
          {/* response for no files */}
          <div className="flex justify-center items-center mt-10">
            <div className=" p-8 text-center font-bold">
              The content you are searching for is not updated yet. It will be
              updated soon.
              <br /> We apologize for the inconvenience caused.
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className=" section flex flex-col gap-4 p-8 ">
          <div>
            <p className="p-2  text-left text-4xl font-extrabold  ">
              {propData.sectionHeading}
            </p>
          </div>
          <div className="flex flex-wrap  justify-between items-center gap-2">
            <div className="flex  items-center gap-2 ">
              <p className="md:text-center text-md font-bold  ">
                {propData.course} / {propData.courseName} / Semester{" "}
                {propData.selectedSem} / {propData.selectedSubject}
              </p>
            </div>
            {/* Change sem and change course buttons */}
            <div className="w-full md:w-auto flex gap-4 justify-center items-center text-sm font-medium ">
              <Link
                to={`${location.pathname.replace("results", "choosesubject")}`}
                className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
              >
                Change Subject
              </Link>
              <Link
                to={`${location.pathname.replace("results", "choosesem")}`}
                className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
              >
                Change Sem
              </Link>
              <Link
                to={`${location.pathname.replace("/results", "")}`}
                className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
              >
                Change Course
              </Link>
            </div>
          </div>

          {/* Content cards */}
          <div className="w-full md:w-auto flex  justify-center items-center mt-10">
            <div className="flex flex-col md:flex-row flex-wrap gap-8  ">
              {propData.state.map((element) => {
                return (
                  <div key={element._id}>
                    <File
                      subject={element.subject}
                      year={element.year}
                      fileUrl={element.fileUrl}
                      fileDownloadUrl={element.fileDownloadUrl}
                      course={element.course}
                      examName={element.examName}
                      semester={element.semester}
                      author={element.author}
                      unitNo={element.unitNo}
                      assignmentNo={element.assignmentNo}
                      category={element.category}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }
};

export default Results;
