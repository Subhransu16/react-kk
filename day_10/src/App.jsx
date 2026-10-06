import { useState } from 'react'
import './App.css'

function App() {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript'])
  const [student, setStudent] = useState({
    name: 'Arun',
    age: 22,
    course: 'React',
  })
  const [showDetails, setShowDetails] = useState(false)

  return (
    <main className="state-exercises">
      <h1>React State Tasks</h1>

      <section className="exercise">
        <h2>Task 1: Array State</h2>
        <ul className="skill-list">
          {skills.map((skill, index) => (
            <li key={`${skill}-${index}`}>{skill}</li>
          ))}
        </ul>
        <div className="button-group">
          <button
            type="button"
            onClick={() =>
              setSkills((currentSkills) => [...currentSkills, 'React'])
            }
          >
            Add React
          </button>
          <button
            type="button"
            onClick={() =>
              setSkills((currentSkills) =>
                currentSkills.map((skill) =>
                  skill === 'JavaScript' ? 'Advanced JavaScript' : skill,
                ),
              )
            }
          >
            Update JavaScript
          </button>
        </div>
      </section>

      <section className="exercise">
        <h2>Task 2: Object State</h2>
        <div className="student-details">
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          {student.city && <p>City: {student.city}</p>}
        </div>
        <div className="button-group">
          <button
            type="button"
            onClick={() =>
              setStudent((currentStudent) => ({
                ...currentStudent,
                course: 'MERN',
              }))
            }
          >
            Update Course
          </button>
          <button
            type="button"
            onClick={() =>
              setStudent((currentStudent) => ({
                ...currentStudent,
                city: 'Chennai',
              }))
            }
          >
            Add City
          </button>
        </div>
      </section>

      <section className="exercise">
        <h2>Task 3: Toggle</h2>
        <button
          type="button"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails ? (
          <p className="exercise-value">Student Details</p>
        ) : null}
      </section>
    </main>
  )
}

export default App
