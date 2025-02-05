import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Assignments from "./components/Assignments";
import Syllabus from "./components/Syllabus";
import Pyqs from "./components/Pyqs";
import NoteState from "./context/notes/NoteState";
import About from "./components/About";
import ChooseSem from "./components/ChooseSem";
import ChooseCourse from "./components/ChooseCourse";
import Results from "./components/Results";
import AddFileInfoForm from "./components/AddFileInfoForm";
import Validation from "./components/Validation";
import Home from "./components/Home";
import Notes from "./components/Notes";
// import Footer from "./components/Footer";
import ChooseSubject from "./components/ChooseSubject";
import UploadFileForm from "./components/UploadFileForm";
import GetVerified from "./components/GetVerified";

const App = () => {
  return (
    <NoteState>
      <Router>
        <div className="flex flex-col md:flex-row">
          <Navbar />
          <div className="w-full flex flex-col ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pyqs" element={<Pyqs />} />
              <Route path="/results" element={<Results />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/uploadfiles" element={<UploadFileForm />} />
              <Route path="/getverified" element={<GetVerified />} />

              {/* course routes */}
              <Route path="/pyqs/choosecourse" element={<ChooseCourse />} />
              <Route path="/syllabus/choosecourse" element={<ChooseCourse />} />
              <Route
                path="/assignments/choosecourse"
                element={<ChooseCourse />}
              />
              <Route path="/notes/choosecourse" element={<ChooseCourse />} />
              {/* subject routes */}
              <Route path="/pyqs/choosesubject" element={<ChooseSubject />} />
              <Route
                path="/syllabus/choosesubject"
                element={<ChooseSubject />}
              />
              <Route
                path="/assignments/choosesubject"
                element={<ChooseSubject />}
              />
              <Route path="/notes/choosesubject" element={<ChooseSubject />} />

              {/* sem routes */}
              <Route path="/pyqs/choosesem" element={<ChooseSem />} />
              <Route path="/syllabus/choosesem" element={<ChooseSem />} />
              <Route path="/assignments/choosesem" element={<ChooseSem />} />
              <Route path="/notes/choosesem" element={<ChooseSem />} />
              {/* results routes */}
              <Route path="/pyqs/results" element={<Results />} />
              <Route path="/syllabus/results" element={<Results />} />
              <Route path="/assignments/results" element={<Results />} />
              <Route path="/notes/results" element={<Results />} />

              <Route path="/assignments" element={<Assignments />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/addfileinfoform" element={<AddFileInfoForm />} />
              <Route path="/validation" element={<Validation />} />
              {/* <Route path="/studymaterial" element={<StudyMaterial />} /> */}
            </Routes>
            // <Footer />
          </div>
        </div>
      </Router>
    </NoteState>
  );
};

export default App;
