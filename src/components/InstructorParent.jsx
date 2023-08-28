import React, { useState } from "react";
import fingerprint from "../assets/fingerprint.svg";
import "./css/InstructorParent.css";
import CustomButton from "../assets/Custombutton";
import SetObjective from "./SetObjective";
import ObjectiveBox from "./ObjectiveBox";
import ObjectiveBox1 from "./progress/ObjectiveBox1";
import OverallProg from "./progress/OverallProg";
import ScavHuntUploads01 from "./ScavHuntUploads01";
export default function InstructorParent() {
  const [adminClicked, setadminClicked] = useState(2);
  const [objCount, setobjCount] = useState(0);
  console.log(objCount, "setobjCount");
  const adminClick = (e) => {
    console.log("hiii");
    setadminClicked(e);
  };
  return (
    <div style={{ background: "#004785" ,overflowX:"hidden"}}>
      <div
        className="mainPageContent"
        style={{ position: "fixed", zIndex: "100", background: "#004785" }}
      >
        <div className="upperPageContent">
          <div className="fngrprintLogoInstructorParent">
            <img
              src={fingerprint}
              alt=""
              className="fngrprintLogoInstructor"
            ></img>
          </div>
          <div className="instructorText">INSTRUCTOR</div>
        </div>

        <div className="lowerPageContent">
          <CustomButton
            txt="ADMIN"
            style={{ width: "30vw", margin: "10px", fontSize: "20px" ,background:adminClicked==1 ? "white" : "#004785"}}
            onClick={(e) => adminClick(1)}
            style2={{background:adminClicked==1 ? "white" : "#004785", color:adminClicked==1 ? "#004785" : "white"}}
          />
          <CustomButton
            txt="PROGRESS"
            style={{ width: "30vw", margin: "10px", fontSize: "20px",background:adminClicked==2 ? "white" : "#004785" }}
            onClick={(e) => adminClick(2)}
            style2={{background:adminClicked==2 ? "white" : "#004785", color:adminClicked==2 ? "#004785" : "white"}}
          />
        </div>
      </div>

      {/* {{adminClicked} && <SetObjective/>} */}
      <div className="childsss" style={{ overflow: "scroll", zIndex: "-5" ,overflowY:"hidden"}}>
        {adminClicked == 1 && (
          <>
            <hr
              style={{
                border: "1.5px solid  #fff",
                margin: "0px 20px",
                position: "absolute",
                width: "87%",
                top:"22vh",
                zIndex:"0",
                left:"0.8em"
              }}
            />
            <SetObjective setobjCount={setobjCount} objCount={objCount} />

          </>
        )}

        {adminClicked == 2 && (
          <div className="progressSec">
            <ObjectiveBox1
              objCount={objCount}
              setadminClicked={setadminClicked}
            />
          </div>
        )}
        {adminClicked == 3 && <ScavHuntUploads01 />}
      </div>
    </div>
  );
}
