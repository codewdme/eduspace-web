import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { Link, useLocation } from "react-router-dom";

const ChooseSubject = () => {
  const propData = useContext(noteContext);
  const location = useLocation();

  useEffect(() => {
    if (propData.subjectsReload === true) {
      propData.updateSubjectOptions();
    }
    propData.setSubjectsReload(false);
  });

  return (
    <div className="section ">
      <div>
        <p className="p-12  text-left text-4xl font-extrabold  ">
          {propData.sectionHeading}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center p-6 text-lg gap-6">
        {propData.subjectOptions.map((element) => {
          return (
            <Link
              key={element.subjectCode}
              to={`${location.pathname.replace("choosesubject", "results")}`}
              className="text-black text-left flex items-center  p-6  bg-blue-200 rounded-xl cursor-pointer  hover:scale-105 transition hover:ease-in-out shadow-lg border-2 border-white hover:border-black font-bold"
              onClick={() => {
                propData.fetchFiles(element.subjectCode);
              }}
            >
              {element.subjectName}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseSubject;
