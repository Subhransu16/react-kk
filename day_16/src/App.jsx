
import React, { useState, useEffect } from "react";

// TASK 1: Digital Timer
function DigitalTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup the interval
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setSeconds(0);
  }

  return (
    <section className="panel">
      <div className="section-heading">
        <span className="number-badge">01</span>
        <div>
          <h2>Digital Timer</h2>
          <p>Count elapsed time in seconds.</p>
        </div>
      </div>

      <div className="timer-display" aria-live="polite">
        <span className="timer-value">{seconds}</span>
        <span className="timer-unit">seconds</span>
      </div>

      <p className={`status ${isRunning ? "status-running" : ""}`}>
        {isRunning ? "Timer is running" : "Timer is paused"}
      </p>

      <div className="button-row">
        <button
          className="button button-primary"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>

        <button
          className="button button-secondary"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>

        <button
          className="button button-outline"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

// TASK 2: Automatic Welcome Message
function WelcomeMessage() {
  const [message, setMessage] = useState("Please Wait...");
  const [restartCount, setRestartCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage("Welcome to React!");
    }, 3000);

    // Cleanup timeout when restarting or unmounting
    return () => {
      clearTimeout(timeoutId);
    };
  }, [restartCount]);

  function handleRestart() {
    setMessage("Please Wait...");
    setRestartCount((count) => count + 1);
  }

  return (
    <section className="panel">
      <div className="section-heading">
        <span className="number-badge number-badge-purple">
          02
        </span>
        <div>
          <h2>Automatic Welcome</h2>
          <p>A welcome message appears after three seconds.</p>
        </div>
      </div>

      <div
        className={`welcome-display ${
          message === "Please Wait..."
            ? "is-waiting"
            : "is-welcome"
        }`}
        aria-live="polite"
      >
        <span className="message-dot"></span>
        <span>{message}</span>
      </div>

      <p className="helper-text">
        Press restart to begin the 3-second delay again.
      </p>

      <div className="button-row">
        <button
          className="button button-purple"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    </section>
  );
}

// MAIN APP
export default function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <div className="eyebrow">REACT PRACTICE PROJECT</div>

        <h1>
          Timers <span>&amp;</span> Effects
        </h1>

        <p>
          Two small applications demonstrating React state,
          effects, and timer cleanup.
        </p>
      </header>

      <div className="panels">
        <DigitalTimer />
        <WelcomeMessage />
      </div>

      <footer>
        Built with React hooks · useState and useEffect
      </footer>
    </main>
  );
}
