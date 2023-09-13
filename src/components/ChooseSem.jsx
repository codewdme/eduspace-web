import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ChooseSem = () => {
  const propData = useContext(noteContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="section ">
      <div>
        <p className="p-12  text-left text-4xl font-extrabold  ">
          {propData.sectionHeading}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center p-6 text-lg gap-6">
        {propData.semesterOptions.map((element) => {
          return (
            <Link
              key={element}
              to={`${location.pathname.replace("choosesem", "choosesubject")}`}
              className="flex items-center justify-center p-6  bg-blue-200 rounded-xl cursor-pointer  hover:scale-105 transition hover:ease-in-out shadow-lg border-2 border-white hover:border-black font-bold"
              onClick={() => {
                propData.setSelectedSem(element);
                propData.updateSubjectOptions();
                propData.setSubjectsReload(true);
              }}
            >
              Sem - {element}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseSem;
