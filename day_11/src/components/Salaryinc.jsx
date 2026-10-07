import { useState } from "react";

function SalaryInc() {
  const [salary, setSalary] = useState(25000);
  const increaseSalary = () => {
    setSalary(salary + 5000);
  };
  return (
    <>
      <p style={{ fontWeight: "bold", border: "1px solid black" }}>Name: Arun</p>
      <p style={{ border: "1px solid black" }}>Salary: {salary}</p>

      <button onClick={increaseSalary} style={{ backgroundColor: "green", color: "white"  }}>
        Increment
      </button>
    </>
  );
}
export default SalaryInc;