import React from "react";
import fingerprint from "../assets/fingerprint.svg";
import CustomButton from "../assets/Custombutton";
export default function ScavHuntLogin() {
  return (
    <div>
      <div className="loginContainer">
        <div className="fngrprintLogo">
          <img src={fingerprint} alt="" />
        </div>
        <div className="formdata">
          <form onSubmit={handleSubmit}>
            <div className="username">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                id="Usrname"
                name="Username"
                // value={formData.firstName}
                // onChange={handleInputChange}
              />
              <CustomButton/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
