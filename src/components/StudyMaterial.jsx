import React, { useState } from "react";

function StudyMaterial() {
  const [inputString, setInputString] = useState("");
  const [formData, setFormData] = useState({
    subject: "",
    course: "",
    semester: "",
    year: "",
  });

  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  const handleProcess = () => {
    // Split the inputString based on the '-' separator
    const [subject, course, semester, year] = inputString.split("-");

    // Update the formData state with the extracted values
    setFormData({
      subject: subject || "",
      course: course || "",
      semester: semester || "",
      year: year || "",
    });
  };

  return (
    <div>
      <h1>Custom String Processor</h1>
      <input
        type="text"
        placeholder="Enter a custom string (e.g., Geometry-Btech-Sem1-2023)"
        value={inputString}
        onChange={handleInputChange}
      />
      <button onClick={handleProcess}>Process</button>
      <form>
        <div>
          <label>Subject:</label>
          <input type="text" name="subject" value={formData.subject} readOnly />
        </div>
        <div>
          <label>Course:</label>
          <input type="text" name="course" value={formData.course} readOnly />
        </div>
        <div>
          <label>Semester:</label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            readOnly
          />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" name="year" value={formData.year} readOnly />
        </div>
      </form>
    </div>
  );
}

export default StudyMaterial;
