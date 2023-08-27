import React, { useState } from "react";
import fingerprint from "../assets/fingerprint.svg";
import './css/InstructorParent.css'
import CustomButton from '../assets/Custombutton'
import SetObjective from './SetObjective'
import ObjectiveBox from './ObjectiveBox'
import ObjectiveBox1 from "./progress/ObjectiveBox1";
import OverallProg from "./progress/OverallProg";
export default function InstructorParent() {
    const [adminClicked, setadminClicked] = useState(0);
    const [objCount, setobjCount] = useState(1);
    console.log(objCount,"setobjCount");
    const adminClick = (e)=>{
        console.log("hiii");
        setadminClicked(e);
    }
    return (
        <div style={{background:"#004785"}}>
            <div className="mainPageContent">
                <div className="upperPageContent">
                    <div className="fngrprintLogoInstructorParent">
                        <img src={fingerprint} alt="" className="fngrprintLogoInstructor"></img>
                    </div>
                    <div className="instructorText">INSTRUCTOR</div>
                </div>
                <div className="lowerPageContent">
                    <CustomButton txt="ADMIN" style={{width:"30vw" , margin:"10px" , fontSize: "20px" }} onClick = {(e)=>adminClick(1)}/>
                    <CustomButton txt="PROGRESS" style={{width:"30vw" , margin:"10px" , fontSize: "20px"}} onClick = {(e)=>adminClick(2)}/>
                </div>
            </div>
            {/* <hr style={{border : "1.5px solid  #fff" , margin : "20px" , position : "fixed" , left :"0" , right:"0" , top:"18vh" }}/> */}
            {/* {{adminClicked} && <SetObjective/>} */}
            {
                adminClicked==1 && <SetObjective setobjCount={setobjCount} />
            }
            
            
            
            
            {/* {
                !adminClicked ? "" : <ObjectiveBox/>
            } */}

            {adminClicked==2 && (
                <div className="progressSec" >
                    <OverallProg/>

                    <hr style={{border : "2px solid  #fff" , margin : "20px" , position : "fixed" , left :"0" , right:"0" , top:"20vh" }}/>

                    <ObjectiveBox1 objCount={objCount} />
                </div>
            ) }
        </div>
    );
}
