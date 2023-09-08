import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Link, useLocation } from "react-router-dom";

const ChooseCourse = () => {
  const propData = useContext(noteContext);
  const location = useLocation();

  return (
    <>
      <div className="grid grid-cols-4 items-center justify-center p-6 text-lg gap-6">
        {propData.courseOptions.map((element) => {
          return (
            <Link
              key={element}
              to={`${location.pathname}/choosesem`}
              className="flex items-center justify-center p-6 bg-blue-200 rounded-xl cursor-pointer hover:scale-105 transition hover:ease-in-out hover:shadow-lg"
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
