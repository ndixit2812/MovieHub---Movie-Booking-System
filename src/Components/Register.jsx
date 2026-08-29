import React, { useState } from "react";
import Navbar from "../Utilities/Navbar";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  here is the fetching code come
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        formData,
      );

      toast.success(response.data.message || "Registration Successfully Done!");
      console.log(formData);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid login_page_main_frame">
        <div className="container my-3 form_layout">
          <form onSubmit={handleSubmit}>
            <h2 className="my-3">Create An Account</h2>
            <div className="input_box my-3">
              <label>UserName: </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="userName"
                value={formData.userName}
                onChange={handleChangeFormData}
              />
            </div>
            <div className="input_box my-3">
              <label>Email: </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChangeFormData}
              />
            </div>
            <div className="input_box my-3">
              <label>Password: </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChangeFormData}
              />
            </div>

            <div className="input_box my-3">
              <label>Mobile No: </label>
              <input
                type="tel"
                placeholder="Enter your mobile no."
                name="mobile"
                value={formData.mobile}
                onChange={handleChangeFormData}
              />
            </div>

            <div className="input_box my-3">
              <button
                type="submit"
                className="btn btn-outline-danger w-25 my-4"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
