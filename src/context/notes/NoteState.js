import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState([]);
  const [courseName, setCourseName] = useState(null);
  const [uploadInfo, setUploadInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSem, setSelectedSem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    setSelectedSem(sem);
    setLoading(true);
    setTimeout(async () => {
      let url = `https://naughty-lion-train.cyclic.app/edgerunners/junexus/fetchfileinfo/${selectedCategory}/${courseName}/${sem}`;

      const response = await fetch(url, {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      setState(json);
      setLoading(false);
    }, 500);
  }

  // ADDING FILE INFO TO DB
  async function addFiles() {
    let url = `https://naughty-lion-train.cyclic.app/edgerunners/junexus/addfileinfo`;

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
        setSelectedCategory,
        setSelectedSem,
        setLoading,
        selectedSem,
        loading,

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
