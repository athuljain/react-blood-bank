import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {



    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = users.find((u) => u.email === user.email && u.password === user.password);
      if (validUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(validUser));
        alert('login success')
        navigate("/");
      } else {
        setError("Invalid credentials");
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to="/register">Don't have an account? Register</Link>
      </div>
    );
  }