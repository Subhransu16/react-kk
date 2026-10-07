import { useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const addReact = () => {
    setCourses([...courses, "React"]);
  };

  const updateCSS = () => {
    setCourses(
      courses.map((course) =>
        course === "CSS"
          ? "Advanced CSS"
          : course
      )
    );
  };

  return (
    <>
      <h2>Task 2 - Course List</h2>

      {courses.map((course, index) => (
        <div className="item" key={index}>
          {course}
        </div>
      ))}

      <button onClick={addReact}>
        Add React
      </button>

      <button onClick={updateCSS}>
        Update CSS
      </button>
    </>
  );
}

export default CourseList;