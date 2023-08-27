import React from 'react';
import './cstmbtn.css'
const CustomButton = (props) => {
  return (
    <button
      className="custombbutton"
      style={props.style}
      onClick= {props.onClick}
    >
      <p style={props.style2}>{props.txt}</p>
      {/* <span className="down-chevron-icon">&#9660;</span> */}
    </button>
  );
};

export default CustomButton;
