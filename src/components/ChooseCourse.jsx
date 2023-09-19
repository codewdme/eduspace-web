import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { Link, useLocation } from "react-router-dom";

const ChooseCourse = () => {
  const propData = useContext(noteContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/pyqs") {
      propData.setSectionHeading("Previous Year Question Papers");
    } else if (location.pathname === "/assignments") {
      propData.setSectionHeading("Assignments");
    } else if (location.pathname === "/notes") {
      propData.setSectionHeading("Notes");
    } else if (location.pathname === "/syllabus") {
      propData.setSectionHeading("Syllabus");
    }
  });

  return (
    <>
      <div>
        <p className="p-12  text-left text-4xl font-extrabold  ">
          {propData.sectionHeading}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center p-6 text-lg gap-6">
        {propData.courseOptions.map((element) => {
          return (
            <Link
              key={element}
              to={`${location.pathname}/choosesem`}
              className="flex items-center justify-center h-[7rem] p-6  bg-blue-200 rounded-xl cursor-pointer  hover:scale-105 transition hover:ease-in-out shadow-lg border-2 border-white hover:border-black "
              onClick={() => {
                propData.setCourseName(element);
              }}
            >
              {element}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ChooseCourse;
