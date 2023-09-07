import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Link } from "react-router-dom";
import Results from "./Results";

const ChooseSem = () => {
  const propData = useContext(noteContext);

  if (propData.courseName) {
    return (
      <>
        <div className="">
          <div className="grid grid-cols-4 items-center justify-center p-6 text-lg gap-6">
            {propData.semesterOptions.map((element) => {
              return (
                <Link
                  key={element}
                  // to="/results"
                  className="flex items-center justify-center p-6 bg-blue-200 rounded-xl cursor-pointer hover:scale-105 transition hover:ease-in-out hover:shadow-lg"
                  onClick={() => {
                    propData.fetchFiles(element);
                  }}
                >
                  SEM - {element}
                </Link>
              );
            })}
          </div>
        </div>
        <Results />
      </>
    );
  } else if (propData.selectedSem) {
    return <></>;
  } else {
    return <></>;
  }
};

export default ChooseSem;
