import { useState } from "react";

function ShowPassword() {
  const password = "react123";

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>Show Password</h2>

      <p>
        Password:{" "}
        {showPassword ? password : "********"}
      </p>

      <button onClick={togglePassword}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default ShowPassword;