import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Assignments from "./components/Assignments";
import Syllabus from "./components/Syllabus";
import Pyqs from "./components/Pyqs";
import NoteState from "./context/notes/NoteState";

const App = () => {
  return (
    <NoteState>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/pyqs" element={<Pyqs />} />
            <Route path="/assignments" element={<Assignments />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
};

export default App;
