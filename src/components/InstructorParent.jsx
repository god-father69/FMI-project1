import React, { useState } from "react";
import fingerprint from "../assets/fingerprint.svg";
import './css/InstructorParent.css'
import CustomButton from '../assets/Custombutton'
import SetObjective from './SetObjective'
export default function InstructorParent() {

  return (
    <div>
        <div className="mainPageContent">
            <div className="upperPageContent">
                <div className="fngrprintLogoInstructorParent">
                    <img src={fingerprint} alt="" className="fngrprintLogoInstructor"></img>
                </div>
                <div className="instructorText">INSTRUCTOR</div>
            </div>
            <div className="lowerPageContent">
                <CustomButton txt="ADMIN" style={{width:"30vw" , margin:"10px" }}/>
                <CustomButton txt="PROGRESS" style={{width:"30vw" , margin:"10px"}}/>
            </div>
        </div>
        {/* <SetObjective/> */}
    </div>
  );
}
