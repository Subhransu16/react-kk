import { useState } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState('Arun')
  const [count, setCount] = useState(0)
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false)
  const [inputName, setInputName] = useState('')
  const [likes, setLikes] = useState(0)

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
    </main>
  )
}

export default App
