# React Timer & Welcome App

A beginner-friendly React project with two independent applications:

1. **Digital Timer** — Start, Stop, and Reset a seconds counter.
2. **Automatic Welcome Message** — Shows `Please Wait...`, then changes to `Welcome to React!` after 3 seconds. Restart begins the delay again.

## Requirements

- Node.js 18 or newer
- npm

## Run the project

1. Extract the ZIP file.
2. Open a terminal in the extracted project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## React concepts demonstrated

- `useState` for the seconds count, timer state, and welcome message
- `useEffect` to manage interval and timeout lifecycles
- `setInterval` / `clearInterval` for the digital timer
- `setTimeout` / `clearTimeout` for the delayed welcome message
- Separate event handler functions
- Effect cleanup to prevent duplicate or lingering timers

The timer's Start button is disabled while running, and the effect cleanup clears the interval whenever the timer stops or the component unmounts.
