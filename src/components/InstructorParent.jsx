import React, { useState } from "react";
import fingerprint from "../assets/fingerprint.svg";
import './css/InstructorParent.css'
import CustomButton from '../assets/Custombutton'
import SetObjective from './SetObjective'
import ObjectiveBox from './ObjectiveBox'
export default function InstructorParent() {
    const [adminClicked, setadminClicked] = useState(0);
    const adminClick = ()=>{
        setadminClicked(1  );
    }
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
                    <CustomButton txt="ADMIN" style={{width:"35vw" , margin:"10px" , fontSize: "20px" }} onClick = {adminClick}/>
                    <CustomButton txt="PROGRESS" style={{width:"35vw" , margin:"10px" , fontSize: "20px"}}/>
                </div>
            </div>
            <hr style={{border : "2px solid  #fff" , margin : "20px" , position : "fixed" , left :"0" , right:"0" , top:"20vh" }}/>
            {/* {{adminClicked} && <SetObjective/>} */}
            {
                !adminClicked ? "" : <SetObjective/>
            }
            {/* {
                !adminClicked ? "" : <ObjectiveBox/>
            } */}
        </div>
    );
}
