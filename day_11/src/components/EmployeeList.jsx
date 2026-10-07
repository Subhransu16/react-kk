import { useState } from "react";

function SalaryInc() {
  const [salary, setSalary] = useState(25000);

  const increaseSalary = () => {
    setSalary(salary + 5000);
  };

  return (
    <>
      <h2>Task 1 - Employee Salary</h2>

      <p>Name: Arun</p>

      <p>Salary: ₹{salary}</p>

      <button onClick={increaseSalary}>
        Increase Salary
      </button>
    </>
  );
}

export default SalaryInc;