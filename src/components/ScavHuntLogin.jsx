import React, { useState } from "react";
import fingerprint from "../assets/fingerprint.svg";
import CustomButton from "../assets/Custombutton";
import './css/ScavHuntLogin.css'
export default function ScavHuntLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    // You can perform further actions, such as sending the data to a server
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="loginContainer">
        <div className="fngrprintLogo">
          <img src={fingerprint} alt="" />
        </div>
        <div className="formdata">
          <form onSubmit={handleSubmit}>
            <div className="username">
              <label htmlFor="Username"  >Username:</label>
              <input
                type="text"
                className="custominput"
                id="Usrname"
                name="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="pass">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="custominput"
                id="pswrd"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <CustomButton txt="SUBMIT"  />
          </form>
        </div>
      </div>
    </div>
  );
}
