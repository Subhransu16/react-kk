import React, { Suspense, lazy, useEffect, useReducer, useState } from "react";

const About = lazy(() => import("./components/About.jsx"));
const StudentDetails = lazy(() => import("./components/StudentDetails.jsx"));

function basicCounterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": return state + 1;
    case "DECREMENT": return state - 1;
    case "RESET": return 0;
    default: return state;
  }
}

function customCounterReducer(state, action) {
  switch (action.type) {
    case "ADD": return state + action.payload;
    case "SUBTRACT": return state - action.payload;
    case "RESET": return 10;
    default: return state;
  }
}

function passwordReducer(state, action) {
  switch (action.type) {
    case "TOGGLE": return { visible: !state.visible };
    case "SHOW": return { visible: true };
    case "HIDE": return { visible: false };
    default: return state;
  }
}

const initialStudent = { name: "", email: "", course: "" };
function studentReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.payload.field]: action.payload.value };
    case "RESET":
      return initialStudent;
    default:
      return state;
  }
}

const initialFetchState = { users: [], loading: true, error: "" };
function fetchReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { users: [], loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { users: action.payload, loading: false, error: "" };
    case "FETCH_ERROR":
      return { users: [], loading: false, error: action.payload };
    default:
      return state;
  }
}

function useUsers() {
  const [state, dispatch] = useReducer(fetchReducer, initialFetchState);

  useEffect(() => {
    const controller = new AbortController();
    async function getUsers() {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal
        });
        if (!response.ok) throw new Error("Unable to fetch users. Please try again.");
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch({ type: "FETCH_ERROR", payload: error.message || "Something went wrong." });
        }
      }
    }
    getUsers();
    return () => controller.abort();
  }, []);

  return state;
}

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function Section({ number, title, concept, children }) {
  return (
    <section className="task-card">
      <div className="task-heading">
        <span className="task-number">Task {number}</span>
        <h2>{title}</h2>
      </div>
      <p className="concept">Concept: {concept}</p>
      {children}
    </section>
  );
}

function CounterTask() {
  const [count, dispatch] = useReducer(basicCounterReducer, 0);
  return (
    <Section number="1" title="Counter Application" concept="useReducer, dispatch(), action.type">
      <h3 className="count">{count}</h3>
      <div className="button-row">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        <button className="secondary" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </Section>
  );
}

function CustomCounterTask() {
  const [count, dispatch] = useReducer(customCounterReducer, 10);
  return (
    <Section number="2" title="Increment by Custom Value" concept="action.payload">
      <h3 className="count">{count}</h3>
      <div className="button-row">
        <button onClick={() => dispatch({ type: "ADD", payload: 5 })}>Add 5</button>
        <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>Add 10</button>
        <button onClick={() => dispatch({ type: "SUBTRACT", payload: 5 })}>Subtract 5</button>
        <button className="secondary" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </Section>
  );
}

function PasswordTask() {
  const [state, dispatch] = useReducer(passwordReducer, { visible: false });
  return (
    <Section number="3" title="Show / Hide Password" concept="Boolean state with useReducer">
      <input type={state.visible ? "text" : "password"} defaultValue="mySecret123" aria-label="Password" />
      <div className="button-row">
        <button onClick={() => dispatch({ type: "SHOW" })}>Show Password</button>
        <button className="secondary" onClick={() => dispatch({ type: "HIDE" })}>Hide Password</button>
      </div>
    </Section>
  );
}

function StudentFormTask() {
  const [student, dispatch] = useReducer(studentReducer, initialStudent);
  const update = (field) => (event) =>
    dispatch({ type: "UPDATE_FIELD", payload: { field, value: event.target.value } });

  return (
    <Section number="4" title="Student Form" concept="Object state, dispatch(), payload">
      <div className="form-grid">
        <label>Name<input value={student.name} onChange={update("name")} placeholder="Enter name" /></label>
        <label>Email<input type="email" value={student.email} onChange={update("email")} placeholder="Enter email" /></label>
        <label>Course<input value={student.course} onChange={update("course")} placeholder="Enter course" /></label>
      </div>
      <button className="secondary" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <div className="details">
        <h3>Entered Student Details</h3>
        <p><strong>Name:</strong> {student.name || "—"}</p>
        <p><strong>Email:</strong> {student.email || "—"}</p>
        <p><strong>Course:</strong> {student.course || "—"}</p>
      </div>
    </Section>
  );
}

function UserList({ users, loading, error }) {
  if (loading) return <p className="status">Loading users...</p>;
  if (error) return <p className="error">{error}</p>;
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}><strong>{user.name}</strong><span>{user.email}</span></li>
      ))}
    </ul>
  );
}

function FetchUsersTask() {
  const state = useUsers();
  return (
    <Section number="5" title="API Fetch Users" concept="useReducer, useEffect, fetch()">
      <UserList {...state} />
    </Section>
  );
}

function SearchUsersTask() {
  const [state, dispatch] = useReducer(fetchReducer, initialFetchState);
  const [search, searchDispatch] = useReducer((current, action) => {
    if (action.type === "SEARCH") return action.payload;
    if (action.type === "CLEAR") return "";
    return current;
  }, "");

  useEffect(() => {
    const controller = new AbortController();
    async function getUsers() {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal
        });
        if (!response.ok) throw new Error("Unable to fetch users. Please try again.");
        dispatch({ type: "FETCH_SUCCESS", payload: await response.json() });
      } catch (error) {
        if (error.name !== "AbortError") dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    }
    getUsers();
    return () => controller.abort();
  }, []);

  const filteredUsers = state.users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Section number="6" title="Fetch Users with Search" concept="useReducer, filter(), includes()">
      <input
        value={search}
        onChange={(event) => searchDispatch({ type: "SEARCH", payload: event.target.value })}
        placeholder="Search users by name..."
        aria-label="Search users by name"
      />
      {state.loading ? <p className="status">Loading users...</p> :
        state.error ? <p className="error">{state.error}</p> :
        filteredUsers.length ? <UserList users={filteredUsers} loading={false} error="" /> :
        <p className="status">No Users Found</p>}
    </Section>
  );
}

function TodoTask() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");
  function addTodo(event) {
    event.preventDefault();
    const trimmed = newTodo.trim();
    if (!trimmed) return;
    dispatch({ type: "ADD", payload: trimmed });
    setNewTodo("");
  }

  return (
    <Section number="7" title="Todo Application" concept="Array state with useReducer">
      <form className="todo-form" onSubmit={addTodo}>
        <input value={newTodo} onChange={(event) => setNewTodo(event.target.value)} placeholder="Enter a task..." />
        <button type="submit">Add Task</button>
      </form>
      <p className="task-total">Total task count: <strong>{todos.length}</strong></p>
      {todos.length === 0 ? <p className="muted">No tasks added yet.</p> :
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
              <div className="button-row compact">
                <button className="small" onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}>
                  Mark {todo.completed ? "Pending" : "Completed"}
                </button>
                <button className="small danger" onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>Delete</button>
              </div>
              <small>Status: {todo.completed ? "Completed" : "Pending"}</small>
            </li>
          ))}
        </ul>}
    </Section>
  );
}

function LazyAboutTask() {
  const [show, setShow] = useState(false);
  return (
    <Section number="8" title="Lazy Load About Component" concept="lazy(), Suspense">
      <div className="loaded-content"><h3>Home Component</h3><p>This is the Home component shown initially.</p></div>
      <button onClick={() => setShow(true)}>Show About</button>
      {show && <Suspense fallback={<p className="status">Loading...</p>}><About /></Suspense>}
    </Section>
  );
}

function LazyStudentTask() {
  const [show, setShow] = useState(false);
  return (
    <Section number="9" title="Lazy Load Student Details" concept="Conditional rendering with Lazy Loading">
      <button onClick={() => setShow(true)}>View Student</button>
      {show && <Suspense fallback={<p className="status">Loading Student Details...</p>}><StudentDetails /></Suspense>}
    </Section>
  );
}

export default function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">REACT PRACTICAL ASSIGNMENT</p>
        <h1>useReducer & Lazy Loading</h1>
        <p>Tasks 1–9 · React Hooks · API Fetching · Code Splitting</p>
      </header>
      <div className="task-grid">
        <CounterTask />
        <CustomCounterTask />
        <PasswordTask />
        <StudentFormTask />
        <FetchUsersTask />
        <SearchUsersTask />
        <TodoTask />
        <LazyAboutTask />
        <LazyStudentTask />
      </div>
      <footer>Built with React and Vite</footer>
    </main>
  );
}