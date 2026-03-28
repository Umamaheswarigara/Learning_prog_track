import { useState } from "react";
import "../styles/SignUp.css";
import signupImage from "../assets/Login.svg";

function Signup({ setPage }) {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.dob) newErrors.dob = "DOB is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.password){ newErrors.password = "Password is required";}
    else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm password required";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
       localStorage.setItem("user", JSON.stringify(form));
      alert("Registration Successful!");
      setPage("login");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* LEFT IMAGE SECTION */}
        <div className="image-section">
          <img src={signupImage} alt="Signup Illustration" />
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="auth-box">
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <p className="error">{errors.name}</p>

            <input
              type="date"
              name="dob"
              onChange={handleChange}
            />
            <p className="error">{errors.dob}</p>

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <p className="error">{errors.email}</p>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <p className="error">{errors.phone}</p>

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <p className="error">{errors.password}</p>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <p className="error">{errors.confirmPassword}</p>

            <button type="submit">Register</button>
          </form>

          <p className="switch" onClick={() => setPage("login")}>
            Already have an account? Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;