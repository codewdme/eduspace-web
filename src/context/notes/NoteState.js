import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState([]);

  // api call to fetch files information from backend.
  const fetchFiles = async () => {
    let url = "http://localhost:5000/api/db/fetchfileinfo";

    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setState(json);
  };

  return (
    <NoteContext.Provider value={{ state, fetchFiles }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
