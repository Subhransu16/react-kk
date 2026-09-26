import React from "react";

function App() {
  // TASK 1 – Primitive Data Rendering
  const studentName = "Arun";
  const age = 22;
  const course = "React";
  const fees = 15000;

  // TASK 2 – Array Rendering Using map()
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];

  // TASK 3 – Object Rendering
  const student = {
    name: "Priya",
    age: 21,
    course: "MERN Stack",
    city: "Chennai"
  };

  // TASK 4 – Array of Objects Using map()
  const students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" }
  ];

  return (
    <div className="container">
      <h1>React Rendering – 4 Basic Tasks</h1>

      <section>
        <h2>Task 1 – Primitive Data Rendering</h2>
        <h2>{studentName}</h2>
        <p>Age: {age}</p>
        <p>Course: {course}</p>
        <p>Fees: {fees}</p>
      </section>

      <section>
        <h2>Task 2 – Array Rendering Using map()</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Task 3 – Object Rendering</h2>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>City: {student.city}</p>
      </section>

      <section>
        <h2>Task 4 – Array of Objects Using map()</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.course}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
