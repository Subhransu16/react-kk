import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import SalaryInc from "./components/Salaryinc";
import CourseList from "./components/Courselist";
import ProductDetails from "./components/Productdetials";
import EmployeeList from "./components/EmployeeList";
import ShowPassword from "./components/ShowPassword";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <h1>React useState Practice</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/salary">Employee Salary</Link>
          <Link to="/courses">Course List</Link>
          <Link to="/product">Product Details</Link>
          <Link to="/employees">Employee List</Link>
          <Link to="/password">Show Password</Link>
        </nav>

        <Routes>

          <Route
            path="/"
            element={
              <div className="task">
                <h2>Welcome</h2>
                <p>Select a task from the navigation.</p>
              </div>
            }
          />

          <Route
            path="/salary"
            element={
              <div className="task">
                <SalaryInc />
              </div>
            }
          />

          <Route
            path="/courses"
            element={
              <div className="task">
                <CourseList />
              </div>
            }
          />

          <Route
            path="/product"
            element={
              <div className="task">
                <ProductDetails />
              </div>
            }
          />

          <Route
            path="/employees"
            element={
              <div className="task">
                <EmployeeList />
              </div>
            }
          />

          <Route
            path="/password"
            element={
              <div className="task">
                <ShowPassword />
              </div>
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;