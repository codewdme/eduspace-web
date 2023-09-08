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
import StudyMaterial from "./components/StudyMaterial";
import Home from "./components/Home";
const App = () => {
  return (
    <NoteState>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pyqs" element={<Pyqs />} />
            <Route path="/results" element={<Results />} />
            {/* course routes */}
            <Route path="/pyqs/choosecourse" element={<ChooseCourse />} />
            <Route path="/syllabus/choosecourse" element={<ChooseCourse />} />
            <Route
              path="/assignments/choosecourse"
              element={<ChooseCourse />}
            />
            <Route path="/notes/choosecourse" element={<ChooseCourse />} />

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
            <Route path="/studymaterial" element={<StudyMaterial />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
};

export default App;
