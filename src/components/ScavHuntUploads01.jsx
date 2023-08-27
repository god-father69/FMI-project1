import React from "react";
import styles from "./css/ScavHuntUploads01.module.css";
import styles1 from "./css/ScavHuntUpload.module.css";
import Reload from "../assets/reload.svg";
export default function ScavHuntUploads01() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <span className={styles.heading}>Objective 1</span>
        <span>TEAM 1 COMMENTS</span>
        <textarea className={styles.textarea}></textarea>
        <span>TEAM 1 UPLOADS</span>
        <textarea className={styles.textarea}></textarea>
        <div
        //   className="buttn"
          style={{display: "flex", width: "100%",  justifyContent: "center" }}
        >
          <div className={styles1.reloadButton}>
            <img
              src={Reload}
              alt="reload-logo"
              className={styles1.reloadButtonImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
