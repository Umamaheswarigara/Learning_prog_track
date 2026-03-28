import { useState } from "react";
import { Mail, KeyRound } from "lucide-react";
import "../styles/Login.css";
import loginImage from "../assets/Login.svg"; 

function Login({ setIsLoggedIn, setPage, setUser }) {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (Object.keys(newErrors).length === 0) {
      if (
        savedUser &&
        savedUser.email === form.email &&
        savedUser.password === form.password
      ) {
        setUser(savedUser);
        setIsLoggedIn(true);
        setPage("dashboard");
      } else {
        newErrors.password = "Invalid email or password";
      }
    }

    setErrors(newErrors);
  };
return (
  <div className="auth-container">
    <div className="auth-card">

      {/* LEFT IMAGE SECTION */}
      <div className="image-section">
        <img src={loginImage} alt="Illustration" />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ position: "relative", marginBottom: "15px" }}>
            <Mail
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#b366ff",
                width: "18px",
                height: "18px"
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              style={{
                paddingLeft: "35px"
              }}
            />
          </div>
          <p className="error">{errors.email}</p>

          {/* Password */}
          <div style={{ position: "relative", marginBottom: "15px" }}>
            <KeyRound
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#b366ff",
                width: "18px",
                height: "18px"
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              style={{
                paddingLeft: "35px"
              }}
            />
          </div>
          <p className="error">{errors.password}</p>

          <button type="submit">Login</button>
        </form>

        <p className="switch" onClick={() => setPage("signup")}>
          Don't have an account? Sign Up
        </p>
      </div>

    </div>
  </div>
);
}

export default Login;