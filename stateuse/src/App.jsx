import { useState } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState('Arun')
  const [count, setCount] = useState(0)
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false)
  const [inputName, setInputName] = useState('')
  const [likes, setLikes] = useState(0)
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript'])
  const [student, setStudent] = useState({
    name: 'Arun',
    age: 22,
    course: 'React',
  })
  const [showDetails, setShowDetails] = useState(false)

  return (
    <main className="state-exercises">
      <h1>React State Exercises</h1>

      <section className="exercise">
        <h2>Name Change</h2>
        <p className="exercise-value">{name}</p>
        <button onClick={() => setName('Kumar')}>Change Name</button>
      </section>

      <section className="exercise">
        <h2>Counter</h2>
        <p className="exercise-value">{count}</p>
        <div className="button-group">
          <button onClick={() => setCount((currentCount) => currentCount + 1)}>
            Increase
          </button>
          <button onClick={() => setCount((currentCount) => currentCount - 1)}>
            Decrease
          </button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      <section className="exercise">
        <h2>Show / Hide</h2>
        <button onClick={() => setIsWelcomeVisible((visible) => !visible)}>
          {isWelcomeVisible ? 'Hide' : 'Show'} Message
        </button>
        {isWelcomeVisible && <p className="exercise-value">Welcome to React</p>}
      </section>

      <section className="exercise">
        <h2>Input Name</h2>
        <label className="name-input">
          Your name
          <input
            type="text"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <p className="input-output">
          {inputName ? `Hello, ${inputName}` : 'Your name will appear here.'}
        </p>
      </section>

      <section className="exercise">
        <h2>Like Button</h2>
        <p className="exercise-value">{likes}</p>
        <button onClick={() => setLikes((currentLikes) => currentLikes + 1)}>
          Like
        </button>
      </section>

      <section className="exercise">
        <h2>Array State: Skills</h2>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <div className="button-group">
          <button onClick={() => setSkills((currentSkills) => [...currentSkills, 'React'])}>
            Add React
          </button>
          <button
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
        <h2>Object State: Student</h2>
        <div className="student-details">
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          {student.city && <p>City: {student.city}</p>}
        </div>
        <div className="button-group">
          <button
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
        <h2>Toggle Student Details</h2>
        <button onClick={() => setShowDetails((prev) => !prev)}>
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
