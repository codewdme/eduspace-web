import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState([]);
  const [courseName, setCourseName] = useState(null);
  const [uploadInfo, setUploadInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSem, setSelectedSem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sectionHeading, setSectionHeading] = useState("");
  const [homePageNavbarVisibility, setHomePageNavbarVisibility] =
    useState(false);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");

  const semesterOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const courseOptions = [
    "B.Tech",
    "BCA",
    "B.Sc",
    "Hospitality",
    "Humanties",
    "Law",
  ];

  // course-wise-subjects-array
  const btechCourseSubjects = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"];
  const bcaCourseSubjects = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"];
  const bscCourseSubjects = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"];
  const humantiesCourseSubjects = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"];
  const lawCourseSubjects = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"];
  const hospitalityCourseSubjects = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"];

  const updateSubjectOptions = () => {
    if (courseName === "B.Tech") {
      setSubjectOptions(btechCourseSubjects);
    } else if (courseName === "B.Sc") {
      setSubjectOptions(bscCourseSubjects);
    } else if (courseName === "BCA") {
      setSubjectOptions(bcaCourseSubjects);
    } else if (courseName === "Humanities") {
      setSubjectOptions(humantiesCourseSubjects);
    } else if (courseName === "Hospitality") {
      setSubjectOptions(hospitalityCourseSubjects);
    } else if (courseName === "Law") {
      setSubjectOptions(lawCourseSubjects);
    }
  };

  // api call to fetch files information from backend.
  async function fetchFiles(subject) {
    setSelectedSubject(subject);
    setLoading(true);
    setTimeout(async () => {
      let url = `https://naughty-lion-train.cyclic.app/edgerunners/junexus/fetchfileinfo/${selectedCategory}/${courseName}/${selectedSem}/${subject}`;

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
    console.log("run");
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(uploadInfo),
    });
    console.log("run");
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
        setSectionHeading,
        updateSubjectOptions,

        setHomePageNavbarVisibility,
        homePageNavbarVisibility,
        subjectOptions,
        selectedSem,
        loading,
        sectionHeading,
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
