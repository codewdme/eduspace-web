import React, { useEffect } from "react";
import File from "./File";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import ChooseCourse from "./ChooseCourse";

const Pyqs = () => {
  const propData = useContext(noteContext);

  // on componetn mount it calls the fetchfiles function to get fileInfo data from backend API;
  // useEffect(() => {
  //   propData.fetchFiles();
  //   console.log(`pyqs`, propData.state);
  // }, []);

  return (
    <>
      <ChooseCourse />
    </>
    // <div className="p-12 ">
    //   <p className="text-center text-xl font-extrabold p-8 ">
    //     Semester -{" "}
    //     {propData.state.slice(0, 1).map((element) => {
    //       return element.semester;
    //     })}
    //   </p>
    //   <div className="grid grid-cols-1  gap-8  ">
    //     {propData.state.map((element) => {
    //       return (
    //         <div key={element._id}>
    //           <File
    //             title={element.fileName}
    //             year={element.year}
    //             fileUrl={element.fileUrl}
    //             fileDownloadUrl={element.fileDownloadUrl}
    //             examName={element.examName}
    //             semester={element.semester}
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Pyqs;
