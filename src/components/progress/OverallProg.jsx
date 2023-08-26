import React from "react";

function OverallProg() {
  const teamcount = {
    team1: [
      {
        filesUploaded: "01",
        parameter: true,
      },
      {
        filesUploaded: "03",
        parameter: false,
      },
    ],
    team2: [
      {
        filesUploaded: "05",
        parameter: false,
      },
      {
        filesUploaded: "04",
        parameter: false,
      },
    ],
  };
  console.log("jelooooo");

  const teamEntries = Object.entries(teamcount);
  console.log("jelooooo", teamEntries[0]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "90%",
        // background:"pink",
        justifyContent: "flex-start",
        // position: "relative"
      }}
    >
      <div className="objHeader" style={{ color: "white", width: "100%" }}>
        <p
          style={{ fontWeight: "500", fontSize: "17px", fontFamily: "nunito",marginLeft:"15px" }}
        >
          OVERALL PROGRESS
        </p>
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
                alignItems:"center",
                justifyContent: "space-between",
                background: "white",
                margin: "10px",
                width: "95%",
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
                  fontFamily: "nunito",
                }}
              >
                TEAM {index + 1}
              </div>
              <div
                className="whiteicons"
                style={{
                  // background: "white",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "36%",
                  background: "white",
                  margin: "10px",
                  alignItems: "center"
                }}
              >
                {console.log(item[1],"itemm")}
                {item[1].map((val, index) => {
                  return (
                    <div
                      className="upicon"
                      style={{
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        // paddingRight: "20px",
                      }}
                    >
                      <p
                        style={{
                          color: "#004785",
                          background: "white",
                          margin: "4px",
                          fontFamily: "nunito",
                          
                        }}
                      >
                        {val.filesUploaded}
                        {console.log(val[0],"holaa")}
                      </p>
                      {val.parameter ? (
                    <span
                      className="material-symbols-outlined"
                      style={{
                        display: "flex",
                        background: "white",
                        color: "green",
                        height: "34px",
                        alignItems: "center",
                        //   cursor: "pointer",
                        justifyContent: "center",
                      }}
                    >
                      done
                    </span>
                  ) : (
                    <span
                      className="material-symbols-outlined"
                      style={{
                        display: "flex",
                        background: "white",
                        color: "red",
                        height: "34px",
                        // cursor: "pointer",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      close
                    </span>
                  )}
                    </div>
                  );
                })}
                {/* <div
                  className="check"
                  style={{
                    background: "white",
                    display: "flex",
                    flexDirection: "row",
                    width: "34px",
                  }}
                >
                  {item[1].parameter ? (
                    <span
                      className="material-symbols-outlined"
                      style={{
                        display: "flex",
                        background: "white",
                        color: "green",
                        height: "34px",
                        //   cursor: "pointer",
                        justifyContent: "center",
                      }}
                    >
                      done
                    </span>
                  ) : (
                    <span
                      className="material-symbols-outlined"
                      style={{
                        display: "flex",
                        background: "white",
                        color: "red",
                        height: "34px",
                        // cursor: "pointer",
                        justifyContent: "center",
                      }}
                    >
                      close
                    </span>
                  )}
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OverallProg;
