import React, { useEffect, useState } from "react";
import uploadIcon from "../../assets/upload2.svg";
import tick from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";
import "./obj.css";
import OverallProg from "./OverallProg";
function ObjectiveBox1(props) {
  const { objCount, setadminClicked } = props;

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
    <>
      {!objCount ? (
        <div>
          <p
            style={{
              fontFamily: "Nunito",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            No Objective Set
          </p>
        </div>
      ) : (
        <>
          <hr
            style={{
              border: "1.5px solid  #fff",
              margin: "-10px 22px 9px",
              position: "relative",
              width:"82%"
            }}
          />
          <OverallProg />
          <hr
            style={{
              border: "1.5px solid  #fff",
              margin: "20px",
              position: "relative",
              width:"82%"
            }}
          />
          <div
            style={{
              display: "flex",
              width: "85%",
              justifyContent: "flex-start",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: "17px",
                fontFamily: "nunito",
                fontWeight: "bold",
                // marginRight: "8.2em",
              }}
            >
              OBJECTIVE PROGRESS
            </p>
          </div>
          {Array.from({ length: objCount }, (_, index) => (
            <div
              key={index}
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
              <div
                className="objHeader"
                style={{ color: "white", width: "100%" }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    fontFamily: "nunito",
                    marginLeft: "15px",
                  }}
                >
                  Objective {index + 1}
                </p>
              </div>
              <div
                className="objTitle"
                style={{ color: "white", width: "100%" }}
              >
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "15px",
                    marginTop: "-10px",
                    fontFamily: "nunito",
                    marginLeft: "15px",
                  }}
                >
                  Objective {index + 1} would go here...
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
                        justifyContent: "space-between",
                        background: "white",
                        margin: "10px",
                        width: "95%",
                        alignItems: "center",
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
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="upicon"
                          style={{
                            background: "white",
                            display: "flex",
                            flexDirection: "row",
                            paddingRight: "20px",
                            alignItems: "center",
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
                              alignItems: "center",
                            }}
                            onClick={() => setadminClicked(3)}
                          >
                            upload
                          </span>
                          <p
                            style={{
                              color: "#004785",
                              background: "white",
                              margin: "4px",
                              fontFamily: "nunito",
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
                                alignItems: "center",
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
                                alignItems: "center",
                              }}
                            >
                              close
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ObjectiveBox1;
