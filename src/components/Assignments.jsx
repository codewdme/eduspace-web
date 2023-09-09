import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

import ChooseCourse from "./ChooseCourse";

const Assignments = () => {
  const propData = useContext(noteContext);
  const location = useLocation();

  // on componetn mount it calls the fetchfiles function to get fileInfo data from backend API;
  useEffect(() => {
    propData.setSelectedCategory(location.pathname.replace(/\//g, ""));
  });

  return (
    <>
      <div className="section flex flex-col ">
        <ChooseCourse />
      </div>
    </>
  );
};

export default Assignments;
