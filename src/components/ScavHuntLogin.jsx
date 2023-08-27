import React, { useState } from "react";
import { Link } from "react-router-dom";
import fingerprint from "../assets/fingerprint.svg";
import CustomButton from "../assets/Custombutton";
import mdalogo from "../assets/mdalogo.svg";
import "./css/ScavHuntLogin.css";

export default function ScavHuntLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    // You can perform further actions, such as sending the data to a server

    // Redirect to home page after form submission
    // window.location.href = "/home";
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        paddingTop: "10vh",
      }}
    >
      <div className="loginContainer">
        <div className="fngrprintLogo" style={{ marginBottom: "15px" }}>
          <img src={fingerprint} alt="" />
        </div>
        <div className="formdata">
          <form onSubmit={handleSubmit}>
            <div className="username">
              <label htmlFor="username" style={{ margin: "7px" }}>
                Username:
              </label>
              <input
                type="text"
                className="custominput"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="pass">
              <label htmlFor="password" style={{ margin: "7px" }}>
                Password:
              </label>
              <input
                type="password"
                className="custominput"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div
              className="submitBtn"
              style={{
                marginTop: "50px",
                marginTop: "50px",
                display: "flex",
                justifyContent: "space-around ", 
              }}
            >
              <Link to="/home">
                <CustomButton txt="LOGIN" style={{ width: "8em" }} />
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div
        className="logo"
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "100%",
          marginTop: "12vh",
        }}
      >
        <img src={mdalogo} alt="" />
      </div>
    </div>
  );
}
