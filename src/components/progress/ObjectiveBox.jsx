import React from "react";
import uploadIcon from "../../assets/upload2.svg";
import tick from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";
import './obj.css'
function ObjectiveBox() {
  const teamcount = {
    team1: {
      filesUploaded: "01",
      parameter: true,
    },
    team2: {
      filesUploaded: "00",
      parameter: false,
    },
  };
  const teamEntries = Object.entries(teamcount);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
        // background:"pink",
        justifyContent: "flex-start",
      }}
    >
      <div className="objHeader" style={{ color: "white", width: "100%" }}>
        <p style={{ fontWeight:"500",fontSize:"17px"}}>Objective 1</p>
      </div>
      <div className="objTitle" style={{ color: "white", width: "100%" }}>
        <p style={{ fontWeight:"400",fontSize:"15px",marginTop:"5px"}}>Objective 1 would go here...</p>
      </div>
      <div
        className="teamBox"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {teamEntries.map((item, index) => {
          return (
            <div
              className="whitebox"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                background: "white",
                margin: "10px",
                width: "100%",
                borderRadius: "10px",
                height: "37px",
                fontWeight: "700",
              }}
            >
              <div
                className="tmname"
                style={{
                  color: "#004785",
                  background: "white",
                  marginLeft: "19px",
                  fontWeight: "700",
                }}
              >
                TEAM {index+1}
              </div>
              <div className="whiteicons" style={{
                    // background: "white",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent:"space-between",
                    width: "36%",
                    background: "white",
                    margin: "10px"
                  }}>
                <div
                  className="upicon"
                  style={{
                    background: "white",
                    display: "flex",
                    flexDirection: "row",
                    paddingRight:"20px"
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      display: "flex",
                      background: "white",
                      color: "#004785",
                      height: "37px",
                      cursor: "pointer",
                      justifyContent: "center",
                    }}
                  >
                    upload
                  </span>
                  <p
                    style={{
                      color: "#004785",
                      background: "white",
                      margin: "4px",
                    }}
                  >
                    {item[1].filesUploaded}
                  </p>
                </div>
                <div
                  className="check"
                  style={{
                    background: "white",
                    display: "flex",
                    flexDirection: "row",
                    width: "34px",
                  }}
                >
                  {item[1].parameter ? <span className="material-symbols-outlined" style={{
                      display: "flex",
                      background: "white",
                      color: "green",
                      height: "34px",
                      cursor: "pointer",
                      justifyContent: "center",
                    }}
                  >done</span> :<span className="material-symbols-outlined" style={{
                    display: "flex",
                    background: "white",
                    color: "red",
                    height: "34px",
                    cursor: "pointer",
                    justifyContent: "center",
                  }}
                >close</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ObjectiveBox;
