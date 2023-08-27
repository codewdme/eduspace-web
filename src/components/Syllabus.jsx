import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import ChooseSem from "./ChooseSem";

const Syllabus = () => {
  return (
    <div className="text-center text-xl font-bold">
      <ChooseSem />
    </div>
  );
};

export default Syllabus;
