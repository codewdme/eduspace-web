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

const App = () => {
  return (
    <NoteState>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/pyqs" element={<Pyqs />} />
            <Route path="/choosecourse" element={<ChooseCourse />} />
            <Route path="/results" element={<Results />} />
            <Route path="/choosesem" element={<ChooseSem />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/addfileinfoform" element={<AddFileInfoForm />} />
            <Route path="/validation" element={<Validation />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
};

export default App;
