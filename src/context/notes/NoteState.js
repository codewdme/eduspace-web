import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState([]);
  const [courseName, setCourseName] = useState(null);
  const [uploadInfo, setUploadInfo] = useState([]);

  const semesterOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const courseOptions = [
    "B.Tech",
    "B.Com",
    "B.Sc",
    "Hospitality",
    "Humanties",
    "Law",
  ];

  // api call to fetch files information from backend.
  async function fetchFiles(sem) {
    console.log(sem);
    let url = `http://localhost:5000/api/db/fetchfileinfo/${courseName}/${sem}`;
    console.log(url);

    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    setState(json);
  }

  // ADDING FILE INFO TO DB
  async function addFiles() {
    let url = `http://localhost:5000/api/db/addfileinfo`;

    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(uploadInfo),
    });
    const json = await response.json();

    setState(json);
    return json;
  }

  // const addFileInfo = (
  //   fileName,
  //   examName,
  //   course,
  //   semester,
  //   year,
  //   fileUrl,
  //   fileDownloadUrl
  // ) => {};

  return (
    <NoteContext.Provider
      value={{
        setCourseName,
        setUploadInfo,
        fetchFiles,
        addFiles,

        state,
        courseName,
        semesterOptions,
        courseOptions,
        uploadInfo,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
