import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../context/context";

export default function Register() {
    const {user, setUser}=useContext(myContext)
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
//       setError("Invalid email format");
//       return;
//     }
//     if (user.password.length < 6) {
//       setError("Password must be at least 6 characters long");
      
//       return;
//     }
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     users.push(user);
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("register Success")
//     navigate("/login");
//   };


const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
        setError("Invalid email format");
        return;
    }
    
    // Validate password length
    if (user.password.length < 6) {
        setError("Password must be at least 6 characters long");
        return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const existingUser = users.find(u => u.email === user.email);
    if (existingUser) {
        setError("User already exists with this email");
        return;
    }

    // Add new user
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Registration Successful");
    navigate("/login");
};

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br />
        <input type="text" name="bloodGroup" placeholder="Blood Group" onChange={handleChange} required /><br />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required /><br />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}