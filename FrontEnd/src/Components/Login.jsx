import React, { useState } from "react";
import Navbar from "../Utilities/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        loginData,
      );

      if (response.status === 200) {
        const { token, userId, email, role } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
        localStorage.setItem("userName", response.data.userName);

        toast.success(response.data.message || "Login Successfully Done!");
        setLoginData({
          email: "",
          password: "",
        });

        window.dispatchEvent(new Event("storage"));

        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login Failed! ");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid login_page_main_frame">
        <div className="container text-center my-5 form_layout">
          <h2 className="login_title my-3">Login Form</h2>
          <form onSubmit={handleLoginForm}>
            <div className="input_box my-4">
              <label>Email: </label>
              <input
                type="email"
                placeholder="enter your email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input_box my-4">
              <label>Password: </label>
              <input
                type="password"
                placeholder="enter your password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
            <div className="input_box my-4">
              <button
                type="submit"
                className="btn btn-outline-danger w-25 my-4"
              >
                Login
              </button>
            </div>
            <div className="input_box ">
              <p className="link_for_signUp">
                Don't have an account?<a href="/register">Create Account</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
