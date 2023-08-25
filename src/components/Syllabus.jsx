import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const Syllabus = () => {
  const a = useContext(noteContext);

  useEffect(() => {
    a.update();
  }, []);

  return (
    <div>
      this is about {a.state.name} who studies in {a.state.section}
    </div>
  );
};

export default Syllabus;
