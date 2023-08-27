import React, { useEffect } from "react";
import File from "./File";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Results = () => {
  const propData = useContext(noteContext);

  // on componetn mount it calls the fetchfiles function to get fileInfo data from backend API;
  // useEffect(() => {
  //   propData.fetchFiles();
  //   console.log(`Results`, propData.state);
  // }, []);

  if (propData.state.length == 0) {
    return (
      <div className="flex flex-col gap-8 p-8 ">
        <div className="flex justify-between items-center gap-2">
          <p className="text-center text-xl font-extrabold  ">
            Semester{" "}
            {propData.state.slice(0, 1).map((element) => {
              return element.semester;
            })}
          </p>
          <div className=" flex gap-4 items-center text-sm">
            <Link
              to="/choosesem"
              className="p-2 px-4 bg-blue-600 text-white hover:scale-105 rounded-md flex items-center "
            >
              Change Sem
            </Link>
            <Link
              to="/choosecourse"
              className="p-2 px-4 bg-blue-600 text-white hover:scale-105 rounded-md flex items-center"
            >
              Change Course
            </Link>
          </div>
        </div>
        <div className=" p-8 text-center font-bold">
          The content you are searching for is not updated yet. It will be
          updated soon.
          <br /> We apologize for the inconvenience caused.
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-8 p-8 ">
        <div className="flex justify-between items-center gap-2">
          <div className="flex  items-center gap-2 ">
            <p className="text-center text-md font-bold  ">{propData.course}</p>
            <p className="text-center text-md font-bold  ">
              Semester{" "}
              {propData.state.slice(0, 1).map((element) => {
                return element.semester;
              })}
            </p>
          </div>
          <div className=" flex gap-4 items-center text-sm">
            <Link
              to="/choosesem"
              className="p-2 px-4 bg-blue-600 text-white hover:scale-105 rounded-md flex items-center "
            >
              Change Sem
            </Link>
            <Link
              to="/choosecourse"
              className="p-2 px-4 bg-blue-600 text-white hover:scale-105 rounded-md flex items-center"
            >
              Change Course
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-8  ">
          {propData.state.map((element) => {
            return (
              <div key={element._id}>
                <File
                  title={element.fileName}
                  year={element.year}
                  fileUrl={element.fileUrl}
                  fileDownloadUrl={element.fileDownloadUrl}
                  examName={element.examName}
                  semester={element.semester}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Results;
